import React, { useState } from "react";
import ChipList from "./ChipList";
import ModalMultiSelect from "./ModalMultiSelect";

export default function ChipSelectField({
  items = [],
  onAdd,
  onRemove,
  allItems,
  title,
  replaceAll,
  addTitle,
}: any) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState([]);

  return (
    <>
      <ChipList
        items={items.map((i: any) => ({ label: i, id: i }))}
        onRemove={onRemove}
        onAdd={() => setOpen(true)}
        addTitle={addTitle}
      />

      {open && (
        <ModalMultiSelect
          title={title}
          open={open}
          onSave={(arr: any) => {
            replaceAll(arr);
            setOpen(false);
          }}
          onClose={() => setOpen(false)}
          items={allItems}
          selected={items}
        />
      )}
    </>
  );
}
