import { useCallback, useEffect, useRef, useState } from "react";
import { AllDocsContainer, Box } from "../styles";
import DocCard from "../../../components/profile/DocumentCard";
import { PrimaryBtn } from "@/styles/Btn.styled";
import { HiOutlineDocumentText } from "react-icons/hi";
import { DocumentItemD } from "types/profile";
import { useAuth } from "context/AuthContext";
import { fetchOwnDocumentsService } from "network/services/profile";
import { DocumentSkel } from "../Skel";
import Button from "components/Button";
import { AddCircle } from "iconsax-react";
import DocumentAddModal from "components/profile/modals/DocumentAddModal";
import Image from "next/image";
import { BsPlusLg } from "react-icons/bs";
import TranslatedText from "components/TranslatedText";

const LIMIT = 8;

export default function DocumentsListing(props: Props) {
  const { own, editable, userId } = props;
  const [dsp, setDsp] = useState("block");
  const [list, setList] = useState<DocumentItemD[]>([]);
  const [loadingMore, setLoadingMore] = useState(false);
  const [total, setTotal] = useState(0);
  const page = useRef(1);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();
  const [addOpen, setAddOpen] = useState(false);
  const box_shadow = editable ? "edit-profile-shadow" : "profile-shadow";

  /**  
   OWN FETCHES
  */
  const fetchOwnDocuments = useCallback(
    async (more: boolean = false) => {
      try {
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
          res = await fetchOwnDocumentsService({
            token,
            page: page.current,
            perPage: LIMIT,
            userId: userId,
          });
        } else if (own) {
          res = await fetchOwnDocumentsService({
            token,
            page: page.current,
            perPage: LIMIT,
          });
        } else {
          return;
        }

        const { total, data } = res;
        if (more) {
          setList((s) => [...s, ...data]);
        } else {
          setList(data);
        }
        setTotal(total);
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

  const fetchMoreOwnDocuments = useCallback(() => {
    if (list.length < total) {
      page.current = page.current + 1;
      fetchOwnDocuments(true);
    }
  }, [fetchOwnDocuments, total, list.length]);

  /**  
   DECIDERS
  */
  const fetchMore = useCallback(() => {
    fetchMoreOwnDocuments();
  }, [fetchMoreOwnDocuments]);

  useEffect(() => {
    fetchOwnDocuments();
  }, [fetchOwnDocuments]);

  // console.log("Documents list: ", list);

  return (
    <div id="documents">
      {list.length === 0 && editable ? (
        <>
          <Box className="box px-5 py-10 text-center">
            <div>
              <img
                src="/images/preview-doc.svg"
                alt="files"
                className="mx-auto"
              />
            </div>
            <h2 className="profile-box-title"><TranslatedText>Documents</TranslatedText></h2>
            <p className="profile-box-subtitle"><TranslatedText>Add documents that supports your career</TranslatedText></p>

            <div className="flex flex-col md:items-center">
              <PrimaryBtn
                className="btn flex items-center justify-center gap-1"
                onClick={() => setAddOpen(true)}
              >
                <BsPlusLg /> <TranslatedText>Add&nbsp;document</TranslatedText>
              </PrimaryBtn>
            </div>

            <DocumentAddModal
              onAdd={(d) => {
                setAddOpen(false);
                setList((s) => [...s, d]);
              }}
              open={addOpen}
              onClose={() => setAddOpen(false)}
            />
          </Box>
        </>
      ) : list.length === 0 ? (
        ""
      ) : (
        <>
          <AllDocsContainer
            className={`py-10 px-1  md:px-10 mb-5  ${box_shadow}`}
            id="docs"
          >
            <div className="flex justify-between items-center mb-4   gap-2 md:gap-3 px-4">
              <h2 className="profile-heading">
                <HiOutlineDocumentText className="text-2xl lg:text-4xl" />{" "}
                <TranslatedText>Documents&nbsp;({list.length})</TranslatedText>
              </h2>
              {editable && (
                <div>
                  <Button
                    primary
                    icon={<AddCircle variant="Bold" />}
                    onClick={() => setAddOpen(true)}
                  >
                    <span className="text-xs md:text-lg"> <TranslatedText> Add document</TranslatedText></span>
                  </Button>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 mt-3">
              {!loading ? (
                list.map((i: any) => (
                  <DocCard
                    key={i.id}
                    {...i}
                    onDelete={(id) =>
                      setList((s) => s.filter((i) => i.id !== id))
                    }
                    own={own}
                    edit={editable}
                  />
                ))
              ) : (
                <div className="w-full">
                  <DocumentSkel />
                </div>
              )}
            </div>

            {!loading && total > list.length && (
              <div className="flex flex-col md:items-center">
                <Button
                  primary
                  outline
                  onClick={() => {
                    fetchMore();
                  }}
                >
                  Show more
                </Button>
              </div>
            )}
          </AllDocsContainer>
          {editable && (
            <DocumentAddModal
              onAdd={(d) => {
                setAddOpen(false);
                setList((s) => [...s, d]);
              }}
              open={addOpen}
              onClose={() => setAddOpen(false)}
            />
          )}
        </>
      )}
    </div>
  );
}

type Props = {
  own: boolean;
  addEnable: boolean;
  editable: boolean;
  userId?: number;
};
