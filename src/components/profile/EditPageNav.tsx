import Button from "components/Button";
import { useRouter } from "next/router";
import React from "react";
import { BsArrowLeftShort } from "react-icons/bs";

export default function EditPageNav({ onSave, title, onBack, saveLoading = false }: { onBack?: () => any; onSave: () => any; title: string; saveLoading?: boolean }) {
  const router = useRouter();

  return (
    <div>
      <div className="flex justify-between">
        <BsArrowLeftShort
          className="text-3xl arrow"
          onClick={() => {
            if (onBack) {
              onBack();
            } else {
              router.back();
            }
          }}
        />
        <h1 className="text-xl lg:text-2xl font-bold">Edit Modeling</h1>
        <Button link primary>
          Save
        </Button>
      </div>
    </div>
  );
}
