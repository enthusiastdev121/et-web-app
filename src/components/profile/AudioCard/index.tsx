import { formatPlayerDuration } from "@/utils/helper";
import React, { useRef, useState } from "react";
import { IoPlay } from "react-icons/io5";
import styled from "styled-components";
import { AudioItemD, AudioItemOwnD } from "types/profile";
import { Range } from "react-range";
import Spinner from "components/Spinner";
import { BsPauseFill } from "react-icons/bs";
import { MdDelete, MdModeEdit } from "react-icons/md";
import ClickAwayListener from "react-click-away-listener";
import { GrList } from "react-icons/gr";
import { HiFolderDownload, HiPencil } from "react-icons/hi";
import DeleteAudioModal from "../modals/DeleteAudioModal";
import AudioUpdateModal from "../modals/AudioUpdateModal";

export default function AudioCard(props: Props) {
  const { own = false, edit = false, onDelete, onUpdate } = props;
  const [playing, setPlaying] = useState(false);
  const [loading, setLoading] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(props.duration || 0);
  const audioRef = useRef<any>();
  const [options, setOptions] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [editOpen, setEditOpen] = useState(false);

  const optionItemClass =
    "flex gap-1 items-center px-2 py-3 cursor-pointer hover:bg-gray-300";

  return (
    <div className="flex justify-between gap-3">
      <div className="flex gap-2 flex-1 items-center">
        <div
          style={{}}
          onClick={() => setPlaying((s) => !s)}
          className="aspect-square sm:h-20 h-16 rounded-full overflow-hidden bg-primary-clr flex items-center cursor-pointer justify-center text-white "
        >
          {playing ? (
            loading ? (
              <Spinner />
            ) : (
              <BsPauseFill size={32} />
            )
          ) : (
            <IoPlay size={32} />
          )}
        </div>

        <div className="flex flex-col flex-1">
          <div className="font-semibold text-lg">{props.title}</div>

          <div className="flex flex-col">
            {!playing ? (
              <div className="">
                <span className="font-semibold text-base">
                  {formatPlayerDuration(props.duration)}
                </span>
                <span className="text-base opacity-70"> • {props.desc}</span>
              </div>
            ) : (
              <div>
                <SliderContainer className="w-full">
                  {/* <Range
              step={0.1}
              min={0}
              max={100}
              values={[current]}
              onChange={(values) => setCurrent(values[0])}
              renderTrack={({ props, children }) => (
                <Track className={`${props.className} bg-gray-200`} {...props}>
                  {children}
                </Track>
              )}
              renderMark={({ props, children }) => (
                <Track2 className={`${props.className} bg-blue-600`} {...props}>
                  {children}
                </Track2>
              )}
              renderThumb={({ props }) => <div {...props} className="h-5 aspect-square rounded-full overflow-hidden bg-blue-600" />}
            /> */}

                  <input
                    type="range"
                    className="accent-blue-500"
                    min={0}
                    max={duration}
                    value={current}
                    onChange={(e) => {
                      audioRef.current.currentTime = Number(e.target.value);
                    }}
                  />
                  <div className="flex justify-between text-sm">
                    <div>{formatPlayerDuration(current)}</div>
                    <div>{formatPlayerDuration(duration)}</div>
                  </div>
                </SliderContainer>
                <audio
                  onEnded={() => {
                    setPlaying(false);
                    setCurrent(0);
                  }}
                  ref={audioRef}
                  src={props.uri}
                  autoPlay
                  onTimeUpdate={(e) => {
                    setCurrent(e.target?.currentTime);
                  }}
                  onLoadStart={() => {
                    setLoading(true);
                  }}
                  onCanPlay={() => {
                    setLoading(false);
                  }}
                  onLoadedMetadata={(e) => {
                    setDuration(e.target.duration || 0);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="relative self-center">
        {edit && (
          <button className="edit-btn-2" onClick={() => setOptions(true)}>
            <HiPencil style={{ display: "inline" }} /> Edit
          </button>
        )}

        {options && (
          <ClickAwayListener onClickAway={() => setOptions(false)}>
            <div className="absolute top-full right-0 shadow-md rounded-md bg-white z-10 overflow-hidden">
              <div
                className={optionItemClass}
                onClick={() => setEditOpen(true)}
              >
                <div className="">
                  <GrList size={18} />
                </div>
                <div className="text-sm whitespace-nowrap">Edit Details</div>
              </div>
              <div
                className={optionItemClass}
                onClick={() => setDeleteOpen(true)}
              >
                <div className={""}>
                  <MdDelete size={18} />
                </div>
                <div className="text-sm whitespace-nowrap">Delete</div>
              </div>
              <a href={props.uri} download className={optionItemClass}>
                <div className="">
                  <HiFolderDownload size={18} />
                </div>
                <div className="text-sm whitespace-nowrap">Download</div>
              </a>
            </div>
          </ClickAwayListener>
        )}

        {own && edit && (
          <>
            <DeleteAudioModal
              id={props.id}
              title={props.title}
              desc={props.desc}
              open={deleteOpen}
              onClose={() => setDeleteOpen(false)}
              uri={props.uri}
              duration={props.duration}
              onDelete={(id) => {
                if (onDelete) {
                  setDeleteOpen(false);
                  onDelete(id);
                }
              }}
            />
            <AudioUpdateModal
              open={editOpen}
              onClose={() => setEditOpen(false)}
              uri={props.uri}
              id={props.id}
              title={props.title}
              desc={props.desc}
              duration={props.duration}
              onUpdate={(d) => {
                if (onUpdate) {
                  onUpdate(d);
                  setEditOpen(false);
                }
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}

type PropsLocal = {};
type PropsApi = AudioItemD & {};

type Props = AudioItemD & {
  own?: boolean;
  edit?: boolean;
  onDelete?: (id: number) => any;
  onUpdate?: (d: AudioItemOwnD) => any;
};

const SliderContainer = styled.div`
  input {
    width: 100%;
  }
`;
const Track = styled.div`
  width: 100%;
  height: 12px;
  border-radius: 120px;
`;
const Track2 = styled.div`
  height: 12px;
  border-radius: 120px;
`;
