import { ModalPaper } from "components/ModalAnimated";
import React from "react";
import { IoClose } from "react-icons/io5";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function UnfollowModalBox({
  title,
  desc,
  onClose,
  children,
}: {
  title: string;
  desc: string;
  children: any;
  onClose: () => any;
}) {
  return (
    <ModalPaper
      className="bg-white rounded-2xl overflow-hidden"
      style={{ width: 800, maxWidth: "94%" }}
    >
      <div className="px-4">
        <div className="flex justify-end mt-2">
          <div
            className="flex justify-center cursor-pointer aspect-square rounded-full hover:bg-gray-300 items-center"
            style={{ height: 42 }}
            onClick={onClose}
          >
            <IoClose size={24} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-2">
          <div className="flex items-center mb-1">
            <div className="font-semibold text-xl ml-2">{title}</div>
          </div>
          <p className="text-base opacity-60"> {desc}</p>
        </div>
        <div className="pb-3">{children}</div>
      </div>
    </ModalPaper>
  );
}
