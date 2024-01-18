import React from "react";

const It = ({ i, onChange }: any) => {
  return (
    <div key={i.id}>
      <input
        type="checkbox"
        checked={i.selected}
        onChange={onChange}
        className="mr-2"
        id={i.id}
      />
      <label htmlFor={i.id}>{i.label}</label>
    </div>
  );
};

const Item = React.memo(It, (p, n) => {
  return p.i.selected !== n.i.selected ? false : true;
});

function SimpleList({ items, onChange }: any) {
  return (
    <div className="grid grid-cols-2 gap-1">
      {items.map((i: any) => {
        return (
          <Item
            key={i.id}
            i={i}
            onChange={() => {
              onChange(i.id);
            }}
          />
        );
      })}
    </div>
  );
}

export default React.memo(SimpleList, (prevProps, nextProps) => {
  let eq = true;

  if (prevProps.items.length !== nextProps.items.length) {
    eq = false;
  }

  if (
    prevProps.items.filter((i: any) => i.selected).length !==
    nextProps.items.filter((i: any) => i.selected).length
  ) {
    eq = false;
  }

  return eq;
});
