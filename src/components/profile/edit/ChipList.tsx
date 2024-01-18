import { darken } from "polished";
import styled from "styled-components";

const It = ({ label, onRemove }: any) => { };

export default function ChipList({ items, onRemove, onAdd, addTitle }: any) {
  return (
    <div>
      <div className="flex items-center gap-1 flex-wrap">
        {items.map((i: any) => {
          return (
            <Item key={i.id}>
              <Text>{i.label}</Text>
              <RemoveBtn onClick={() => onRemove(i.id)}>
                <RemoveIcon>X</RemoveIcon>
              </RemoveBtn>
            </Item>
          );
        })}
      </div>
      <button onClick={onAdd}>
        <AddText>{addTitle}</AddText>
      </button>
    </div>
  );
}

const Root = styled.div``;
const Items = styled.div`
  flex-direction: row;
  flex-wrap: wrap;
`;
const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 120px;
  background: ${(p) => darken(0.1, p.theme.pure)};
  width: fit-content;
  margin-right: 4px;
  margin-bottom: 4px;
  height: 30px;
`;
const Text = styled.div`
  padding: 4px 10px 4px 14px;
  /* font-size: ${(p) => p.theme.fontSize.body2}px; */
`;
const RemoveBtn = styled.div`
  /* height: 36px; */
  /* aspect-ratio: 1; */
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8a1a151;
  height: 30px;
  width: 30px;
  border-radius: 100%;
  font-size: 12px;
  cursor: pointer;
`;
const RemoveIcon = styled.div`
  font-size: 12px;
  color: ${(p) => p.theme.red};
  margin-top: 2px;
  font-weight: bold;
`;
const AddBtn = styled.div`
  margin-top: 4px;
  align-self: flex-start;
  padding: 6px 0px;
  background: ${(p) => p.theme.primary};
  border-radius: 120px;
`;
const AddText = styled.div`
  color: ${(p) => p.theme.primary};
  font-size: 14px;
`;
