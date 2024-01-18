import { formatPlayerDuration, getVideoUploadDate } from "@/utils/helper";
import { VIDEO_PROCESSING_TIMEOUT } from "../../../utils/constants";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { VideoItemD, VideoItemOwnD } from "types/profile";
import VideoPlayer from "../VideoPlayer";
import { VideoCardContainer } from "./styles";
import { FaPlay } from "react-icons/fa";
import { MdDelete, MdModeEdit, MdOutlineMoreVert } from "react-icons/md";
import { GrList } from "react-icons/gr";
import { HiFolderDownload } from "react-icons/hi";
import ClickAwayListener from "react-click-away-listener";
import VideoUpdateModal from "../modals/VideoUpdateModal";
import DeleteVideoModal from "../modals/DeleteVideoModal";
import VideoPlayerModal from "components/VideoPlayerModal";

export default function VideoCard(props: Props) {
  const { title, desc, onDelete, editable = false, onUpdate } = props;
  const [loading, setLoading] = useState(false);
  const [rendering, setRendering] = useState(true);
  // const [rendering, setRendering] = useState(false);
  const [showThumb, setShowThumb] = useState(true);
  const [count, setCount] = useState(0);
  const [editOpen, setEditOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [options, setOptions] = useState(false);
  const [fullVideo, setFullVideo] = useState(false);

  useEffect(() => {
    let timer: any;
    if (count > 0) {
      setShowThumb(false);
      timer = setTimeout(() => {
        setShowThumb(true);
      }, 1000 * VIDEO_PROCESSING_TIMEOUT);
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [count]);

  const optionItemClass =
    "flex gap-1 items-center px-2 py-3 cursor-pointer hover:bg-gray-300";

  return (
    <div className=" w-full ">
      <div className="aspect-video bg-black rounded-md overflow-hidden">
        {rendering && (
          <div className="relative h-full flex items-center justify-center">
            <div className="absolute h-full w-full left-0 top-0 z-10">
              <Skeleton
                height="100%"
                width="100%"
                baseColor="#000"
                highlightColor="rgba(255,255,255,0.17)"
              />
            </div>

            <div className="text-white relative z-20">Processing video</div>
          </div>
        )}

        {showThumb && (
          <>
            <div className="relative h-full w-full flex items-center justify-center">
              <img
                src={props.thumb}
                style={{ height: "100%", width: "100%", objectFit: "contain" }}
                onError={(err) => {
                  console.log("Errr", err);
                  setCount((s) => s + 1);
                }}
                onLoad={() => {
                  console.log("LOAD");
                  setRendering(false);
                  setCount(0);
                }}
              />

              {!rendering && (
                <>
                  <div
                    className="absolute z-10 bg-black bg-opacity-60 hover:scale-125 transition-all cursor-pointer p-2 rounded-full h-12 aspect-square flex justify-center items-center text-lg "
                    onClick={() => setFullVideo(true)}
                  >
                    <div className="-mr-1">
                      <FaPlay className="text-white" />
                    </div>
                  </div>

                  {editable && (
                    <div
                      className="absolute z-10 top-2 right-2 bg-blue-600 hover:bg-blue-700 text-white items-center gap-1 px-3 py-1  transition-all cursor-pointer rounded-full flex"
                      onClick={() => setOptions(true)}
                    >
                      <div className="mr-1">
                        <MdModeEdit size={17} className="text-white" />
                      </div>
                      <div className="text-base">Edit</div>
                    </div>
                  )}

                  {options && (
                    <ClickAwayListener onClickAway={() => setOptions(false)}>
                      <div className="absolute top-2 right-2 rounded-md bg-white z-10 overflow-hidden">
                        <div
                          className={optionItemClass}
                          onClick={() => setEditOpen(true)}
                        >
                          <div className="">
                            <GrList size={18} />
                          </div>
                          <div className="text-sm">Edit Details</div>
                        </div>
                        <div
                          className={optionItemClass}
                          onClick={() => setDeleteOpen(true)}
                        >
                          <div className={""}>
                            <MdDelete size={18} />
                          </div>
                          <div className="text-sm">Delete</div>
                        </div>
                        <a
                          href={props.uri}
                          download
                          className={optionItemClass}
                        >
                          <div className="">
                            <HiFolderDownload size={18} />
                          </div>
                          <div className="text-sm">Download</div>
                        </a>
                      </div>
                    </ClickAwayListener>
                  )}

                  <div className="absolute bottom-2 right-2  bg-black bg-opacity-50 text-white rounded-md text-sm ">
                    {formatPlayerDuration(props.duration)}
                  </div>
                </>
              )}
            </div>
          </>
        )}
      </div>

      <div className="mt-2">
        <div className="font-semibold text-base">{title}</div>
        <div className="text-sm">{desc}</div>
      </div>
      <VideoUpdateModal
        open={editOpen}
        onClose={() => setEditOpen(false)}
        onUpdate={(d) => {
          if (onUpdate) {
            setEditOpen(false);
            onUpdate(d);
          }
        }}
        uri={props.uri}
        thumb={props.thumb}
        title={props.title}
        desc={props.desc}
        id={props.id}
      />

      <DeleteVideoModal
        uri={props.uri}
        thumb={props.thumb}
        id={props.id}
        open={deleteOpen}
        title={props.title}
        desc={props.desc}
        onClose={() => setDeleteOpen(false)}
        onDelete={(id) => {
          if (onDelete) {
            onDelete(id);
          }
        }}
      />

      <VideoPlayerModal
        uri={props.uri}
        open={fullVideo}
        onClose={() => setFullVideo(false)}
      />
    </div>
  );
}

type Props = VideoItemD & {
  onDelete?: (id: number) => any;
  onUpdate?: (d: VideoItemOwnD) => any;
  editable?: boolean;
};
