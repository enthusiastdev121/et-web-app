import { formatDate, formatTime, getMonth } from "@/utils/helper";
import Link from "next/link";
import { darken } from "polished";
import { useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import { MdDelete, MdFileDownload } from "react-icons/md";
import styled from "styled-components";
import { DocumentItemD, DocumentItemOwnD } from "types/profile";
import DeleteDocModal from "../modals/DeleteDocModal";

export default function DocCard({
  uri,
  id,
  name,
  size,
  createdAt,
  edit = false,
  own = false,
  onDelete,
}: DocumentItemOwnD & {
  edit?: boolean;
  own?: boolean;
  onDelete: (id: number) => any;
}) {
  const [deleteOpen, setDeleteOpen] = useState(false);

  function formatBytes(bytes: any, decimals = 0) {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + sizes[i];
  }

  return (
    <div className="py-5 flex items-center flex-wrap gap-4 md:gap-5 rounded-md transition-all w-full px-2 md:px-2">
      <Icon>
        <IoDocumentText className="text-xl md:text-3xl" />
      </Icon>

      <Content className="flex-1">
        <Link href={uri} passHref>
          <h3 className="font-semibold text-sm md:text-base">{name}</h3>
        </Link>
        <div className="text-sm">
          <span className="mr-2">{formatBytes(size)}</span>
          <span>{formatDate(createdAt)}</span>
        </div>
      </Content>
      <div className="actions flex gap-2">
        <a href={uri} download>
          <Icon2 className="sm:p-3 p-2 rounded-full cursor-pointer text-white aspect-square">
            <MdFileDownload size={26} />
          </Icon2>
        </a>
        {edit && (
          <div
            className="sm:p-3 p-2 rounded-full cursor-pointer hover:bg-red-200 bg-red-100 text-red-500 aspect-square"
            onClick={() => setDeleteOpen(true)}
          >
            <MdDelete size={26} />
          </div>
        )}
      </div>

      {edit && (
        <DeleteDocModal
          open={deleteOpen}
          onClose={() => setDeleteOpen(false)}
          {...{ id, name, size, createdAt, uri }}
          onDelete={(id) => {
            if (onDelete) {
              setDeleteOpen(false);
              onDelete(id);
            }
          }}
        />
      )}
    </div>
  );
}

const Icon = styled.div`
  background: ${(p: any) => p.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  border-radius: 10px;
  color: #fff;
`;

const Icon2 = styled.div`
  background: ${(p: any) => p.theme.primary}; 
  transition: all 0.2s ease;

  &:hover {
    background: ${(p: any) => darken(0.1, p.theme.primary)}; 
  }
`;

const Content = styled.div``;
