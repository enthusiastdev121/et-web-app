import { photoList } from "@/utils/fakeAssets";
import { useAuth } from "context/AuthContext";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { PhotoItemD } from "types/profile";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Item from "./Item";
import styled from "styled-components";
import { fetchOwnPhotosApi } from "network/apis/ownProfile";
import { formatPhotoNodeOwn } from "network/apiFormatter/profile";
import DeleteDialog from "components/DeleteDialog";
import Button from "components/Button";
import { BsImage } from "react-icons/bs";
import { MdEdit } from "react-icons/md";
import { HiPlus } from "react-icons/hi";
import AddPhotos from "containers/editProfilePages/AddPhotos";
import Link from "next/link";
import EmptyPhotoList from "../../../components/profile/EmptyPhotoList";
import PhotoUploader from "components/profile/PhotoUploader";
import PhotoSlider from "components/profile/PhotoSlider";
import TranslatedText from "components/TranslatedText";

const LIMIT = 11;

export default function PhotosListing(props: Props) {
  const { own, editable, userId, profile } = props;
  const [list, setList] = useState<PhotoItemD[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [total, setTotal] = useState(0);
  const page = useRef(1);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const [addOpen, setAddOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);

  /**  
   OWN FETCHES
  */
  const fetchOwnPhotos = useCallback(
    async (more: boolean = false) => {
      try {
        // console.log("RAN FETCHOWNPHOTOS");
        // if (!token) {
        //   return;
        // }

        if (more) {
          setLoadingMore(true);
        } else {
          page.current = 1;
          setLoading(true);
        }

        let res;
        if (userId) {
          // console.log("RAN WITH USERID");
          res = await fetchOwnPhotosApi({
            token,
            page: page.current,
            perPage: LIMIT,
            userId: userId,
          });
        } else if (own) {
          console.log("RAN WITHOUT USERID");
          res = await fetchOwnPhotosApi({
            token,
            page: page.current,
            perPage: LIMIT,
          });
        } else {
          return;
        }

        const data = res.data.map((i: any) => formatPhotoNodeOwn(i));

        if (more) {
          setList((s) => [...s, ...data]);
        } else {
          setList(data);
        }
        setTotal(Number(res.total));
        setLoading(false);
        setLoadingMore(false);
      } catch (err) {
        console.log("Err", err);
        setLoading(false);
        setLoadingMore(false);
      }
    },
    [token, userId]
  );

  const fetchMoreOwnPhotos = useCallback(() => {
    if (list.length < total) {
      page.current = page.current + 1;
      fetchOwnPhotos(true);
    }
  }, [fetchOwnPhotos, total, list.length]);

  /**  
   DECIDERS
  */
  const fetchMore = useCallback(() => {
    fetchMoreOwnPhotos();
  }, [fetchMoreOwnPhotos]);

  useEffect(() => {
    fetchOwnPhotos();
  }, [fetchOwnPhotos]);

  // console.log("Photos: ", list);
  // console.log("userId", userId);

  return (
    <>
      {editable ? (
        list.length === 0 ? (
          <EmptyPhotoList onClick={() => setAddOpen(true)} />
        ) : (
          <Root className="px-4 sm:px-0 mb-10">
            <Header className="flex flex-row justify-between mb-4">
              <div className="flex flex-row gap-1 items-center">
                <div className="sm:text-2xl text-md ">
                  <BsImage />
                </div>
                <div className="text-md font-bold sm:text-2xl"><TranslatedText>Photos</TranslatedText></div>
              </div>
              <div className="flex flex-row gap-1">
                <Button
                  primary
                  icon={<HiPlus />}
                  onClick={() => setAddOpen(true)}
                >
                  <TranslatedText>Add Photos</TranslatedText>
                </Button>
              </div>
            </Header>

            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}
              gutter={10}
            >
              <Masonry gutter={10}>
                {list.map((i, index) => {
                  return (
                    <Item
                      key={i.id}
                      {...i}
                      onDelete={(id) =>
                        setList((s) => s.filter((i) => i.id !== id))
                      }
                      onClick={(id) => {
                        setGalleryIndex(index);
                        setGalleryOpen(true);
                      }}
                    />
                  );
                })}
              </Masonry>
            </ResponsiveMasonry>

            {!loading && total > list.length && (
              <Bottom className="mt-4">
                <Button primary outlined onClick={fetchMoreOwnPhotos}>
                  <TranslatedText>Load More</TranslatedText>
                </Button>
              </Bottom>
            )}
          </Root>
        )
      ) : list.length === 0 ? (
        ""
      ) : (
        <Root className="px-4 sm:px-0 mb-10">
          <Header className="flex flex-row justify-between mb-4">
            <div className="flex flex-row gap-1 items-center">
              <div className="text-xl">
                <BsImage />
              </div>
              <div className="text-lg font-semibold"><TranslatedText>Photos</TranslatedText></div>
            </div>
          </Header>

          <ResponsiveMasonry
            columnsCountBreakPoints={{ 350: 2, 750: 2, 900: 4 }}
            gutter={10}
          >
            <Masonry gutter={10}>
              {list.map((i, index) => {
                return (
                  <Item
                    key={i.id}
                    {...i}
                    onDelete={(id) =>
                      setList((s) => s.filter((i) => i.id !== id))
                    }
                    onClick={(id) => {
                      setGalleryIndex(index);
                      setGalleryOpen(true);
                    }}
                  />
                );
              })}
            </Masonry>
          </ResponsiveMasonry>

          {!loading && total > list.length && (
            <Bottom className="mt-4">
              <Button primary outlined onClick={fetchMore}>
                <TranslatedText>Load More</TranslatedText>
              </Button>
            </Bottom>
          )}
        </Root>
      )}

      {own && editable ? (
        <PhotoUploader
          open={addOpen}
          onClose={() => setAddOpen(false)}
          onPhotoAdd={(p) => setList((s) => [p, ...s])}
        />
      ) : null}

      {/* <button onClick={() => setGalleryOpen(true)}>Open Gallery </button> */}

      <PhotoSlider
        open={galleryOpen}
        onClose={() => setGalleryOpen(false)}
        initialList={list}
        own={own}
        initialIndex={galleryIndex}
        setList={setList}
        list={list}
        onReachEnd={() => { }}
        editable={editable}
        profile={profile}
      />
    </>
  );
}

type Props = {
  own: boolean;
  addEnable: boolean;
  editable: boolean;
  userId?: any;
  profile: any;
};

const Root = styled.div`
  width: 100%;
`;

const Header = styled.div``;

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LoadMoreBtn = styled.div`
  padding: 10px;
  border-radius: 8px;
  border: 2px solid;
  border-color: ${(p) => p.theme.primary};
  color: ${(p) => p.theme.primary};
  display: inline-flex;

  margin-top: 1rem;
  font-weight: 600;
  cursor: pointer;
`;
