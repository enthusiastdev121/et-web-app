import Button from "components/Button";
import ModalAnimated, { ModalPaper } from "components/ModalAnimated";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";
import { BsFileImage } from "react-icons/bs";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { RiAddFill } from "react-icons/ri";
import styled from "styled-components";
import { PhotoItemD, PhotoItemOwnD } from "types/profile";
import CropView from "./CropView";
import Item from "./Item";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export type PhotoNode = {
  file: any;
  localId: number;
  upload: false;
};

export default function PhotoUploader(props: Props) {
  const { open, onClose, onPhotoAdd } = props;
  const [list, setList] = useState<PhotoNode[]>([]);
  const [activeCrop, setActiveCrop] = useState<{
    localId: number | null;
    file: any;
  }>({
    localId: null,
    file: null,
  });
  const [uploadingStart, setUploadingStart] = useState(false);

  const [loading, setLoading] = useState(false);
  const onPik = (e: any) => {
    const files = document.getElementById("photoInput").files;

    if (files.length > 6) {
      toast.error("You can only upload upto 6 files at a time.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      document.getElementById("photoInput").value = "";
      return;
    }

    let arr: any[] = [];
    Array.from(e.target.files).map((i) => arr.push(i));

    setList((s) => [
      ...s,
      ...arr.map((i) => ({
        localId: i.lastModified + i.size + Date.now(),
        file: i,
        upload: false,
      })),
    ]);
    e.target.value = null;
  };

  const onUpload = useCallback(
    ({ localId, photo }: { localId: number; photo: PhotoItemD }) => {
      setList((s) => s.filter((i) => i.localId !== localId));
      if (onPhotoAdd) {
        onPhotoAdd(photo);
      }
    },
    [onPhotoAdd]
  );

  useEffect(() => {
    if (!open) {
      setList([]);
      setActiveCrop({ file: null, localId: null });
    }
  }, [open]);

  useEffect(() => {
    if (list.some((i) => i.upload)) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [list]);

  useEffect(() => {
    if (uploadingStart && list.length === 0) {
      onClose();
      setUploadingStart(false);
    }
  }, [uploadingStart, list, onClose]);

  return (
    <ModalAnimated open={open} onClose={onClose}>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Paper>
        <div className="px-5 flex flex-col">
          <div className="flex justify-between py-2 items-center">
            <div className="font-bold text-lg">
              {" "}
              {activeCrop.file ? "Crop" : "Add Photos"}
            </div>

            <div
              className="flex justify-center cursor-pointer aspect-square rounded-full hover:bg-red-500 hover:text-white items-center"
              style={{ height: 42, transition: 'all 0.2s ease' }}
              onClick={onClose}
            >
              <IoClose size={24} />
            </div>
          </div>

          <Divider className="bg-gray-200 mb-3" />

          {activeCrop.file ? (
            <>
              <CropView
                file={activeCrop.file}
                localId={activeCrop.localId}
                onCrop={({ blob, localId }) => {
                  setList((s) =>
                    s.map((i) => {
                      if (i.localId === localId) {
                        return {
                          ...i,
                          file: blob,
                        };
                      } else {
                        return i;
                      }
                    })
                  );
                  setActiveCrop({ localId: null, file: null });
                }}
                onCancel={() => {
                  setActiveCrop({ localId: null, file: null });
                }}
              />
            </>
          ) : (
            <>
              <input
                type="file"
                id="photoInput"
                accept="image/*"
                multiple
                onChange={onPik}
                max={5}
                className="absolute  opacity-0 pointer-events-none"
              />

              {list.length === 0 ? (
                <div className="photo-container-outer mt-5 mx-auto">
                  <label htmlFor="photoInput">
                    <SelectPhotos>
                      <div>
                        <Image
                          src="/images/pro.png"
                          alt="select photos"
                          height={80}
                          width={70}
                        />
                      </div>
                      <div className="txt-link">+ Select photos</div>
                    </SelectPhotos>
                  </label>

                  <ul className="flex flex-col text-left items-start gap-2 text-sm md:text-base mb-5">
                    <li>
                      <span className="inline-block translate-y-1.5">
                        <Image
                          src="/svg/green-tick-fill.svg"
                          alt="tick"
                          height={24}
                          width={24}
                        />
                      </span>{" "}
                      Include a photos that is related to your skills and
                      experience
                    </li>
                    <li>
                      <span className="inline-block translate-y-1.5">
                        <Image
                          src="/svg/green-tick-fill.svg"
                          alt="tick"
                          height={24}
                          width={24}
                        />
                      </span>{" "}
                      Use quality photos that shows how serious you are
                    </li>
                    <li>
                      <span className="inline-block translate-y-1.5">
                        <Image
                          src="/svg/green-tick-fill.svg"
                          alt="tick"
                          height={24}
                          width={24}
                        />
                      </span>{" "}
                      Great types of photos are full length, waist up & headshot
                    </li>
                    {/* <li className="txt-link cursor-pointer" onClick={() => {}}>
                      <span className="inline-block translate-y-1.5">
                        <Image
                          src="/svg/blue-tick-fill.svg"
                          alt="tick"
                          height={24}
                          width={24}
                        />
                      </span>{" "}
                      See Great Photo examples
                    </li> */}
                  </ul>
                </div>
              ) : (
                <div className="overflow-auto" style={{ maxHeight: "70vh" }}>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-2 lg:w-3/4 lg:gap-5 mx-auto">
                    {list.map((i) => {
                      return (
                        <Item
                          key={i.localId}
                          {...i}
                          onUpload={onUpload}
                          onRemove={(id) =>
                            setList((s) => s.filter((i) => i.localId !== id))
                          }
                          onCrop={(d) => {
                            const nn = list.filter((i) => i.localId === d)[0];
                            if (nn) {
                              setActiveCrop({
                                file: nn.file,
                                localId: nn.localId,
                              });
                            }
                          }}
                        />
                      );
                    })}
                  </div>
                </div>
              )}

              <Divider className="bg-gray-200 mb-2" />

              <div className="py-3 flex gap-1 flex-wrap items-stretch flex-col sm:flex-row sm:items-center sm:justify-end">
                {list.length !== 0 && !loading && (
                  <Button primary outlined icon={<RiAddFill size={24} />} >
                    <label htmlFor="photoInput" className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer">
                      Add more photos
                    </label>
                    <span>
                      Add more photos
                    </span>

                  </Button>
                )}

                {list.length > 0 && (
                  <Button
                    loading={loading}
                    primary
                    // endIcon={<HiOutlineArrowSmRight size={24} />}
                    onClick={() => {
                      setUploadingStart(true);
                      setList((s) => s.map((i) => ({ ...i, upload: true })));
                    }}
                  >
                    Done
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </Paper>
    </ModalAnimated >
  );
}

type Props = {
  open: boolean;
  onClose: () => any;
  onPhotoAdd: (p: PhotoItemOwnD) => any;
};

const Paper = styled(ModalPaper)`
  max-width: 90%;
  width: 800px;
  background: ${(p) => p.theme.paper};
  border-radius: 12px;
`;

const Divider = styled.div`
  height: 2px;
  width: 100%;
`;

const SelectPhotos = styled.div`
  width: 239.41px;
  height: 300px;
  background: ${(p: any) => p.theme.pure};
  font-weight: 500;
  border: 1.6241px dashed #c8c8cd;
  border-radius: 6.4964px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  margin-bottom: 20px;
`;
