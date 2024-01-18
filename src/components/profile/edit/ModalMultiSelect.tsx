import { PrimaryBtn, PrimaryBtnSingle } from "@/styles/Btn.styled";
import { THEME } from "@/utils/constants/theme";
import { iconBtnCommon } from "components/Styles";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import SimpleList from "./SimpleList";

const It = ({ label, id, selected, onChange }: any) => {
  return (
    <ListItem onClick={() => onChange(id)}>
      <input checked={selected} onChange={() => onChange(id)} />
      <label>{label}</label>
    </ListItem>
  );
};

const Item = React.memo(It, (n, p) => {
  let eq = true;
  if (n.selected !== p.selected || n.label !== p.label) {
    eq = false;
  }
  return eq;
});

export default function ModalMultiSelect({
  open,
  title = "Select Languages",
  items = [],
  selected = [],
  onClose,
  onSave,
}: any) {
  const [mod, setMod] = useState([]);

  useEffect(() => {
    if (open) {
      const nn = items.map((i: any, ind: number) => {
        return {
          label: i,
          id: i,
          selected: selected.includes(i),
        };
      });
      setMod(nn);
    }
  }, [items, selected, open]);

  const onClick = (id: any) => {
    setMod((s: any) =>
      s.map((i: any) => (i.id === id ? { ...i, selected: !i.selected } : i))
    );
  };

  const renderItem = ({ item }: any) => {
    return <Item {...item} onChange={onClick} />;
  };

  return (
    <Container className="mt-5 ">
      <div>
        <div>
          <div className="flex items-center justify-between">
            <h4 className="font-semibold">{title}</h4>
            <CloseBtn
              onClick={() => {
                onSave(
                  mod.filter((i: any) => i.selected).map((i: any) => i.label)
                );
                onClose();
              }}
            >
              <IoClose size={THEME.iconSize.root} />
            </CloseBtn>
          </div>
          <div className="my-4">
            <SimpleList
              items={mod}
              onChange={(id: any) =>
                setMod((s: any) =>
                  s.map((i: any) =>
                    i.id === id ? { ...i, selected: !i.selected } : i
                  )
                )
              }
            />
            <div>{renderItem}</div>
          </div>

          <footer>
            <PrimaryBtnSingle
              className="btn"
              onClick={() => {
                onSave(
                  mod.filter((i: any) => i.selected).map((i: any) => i.label)
                );
              }}
            >
              Done <span className="text-xl">&rarr;</span>
            </PrimaryBtnSingle>
          </footer>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background: ${(p) => p.theme.pure};
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 10px 20px;
`;

const ListItem = styled.div`
  flex-direction: row;
  padding: 8px 0px;
  align-items: center;
`;

const CloseBtn = styled.div`
  ${iconBtnCommon};
  color: #ccc;

  &:hover {
    color: #000;
  }
`;
