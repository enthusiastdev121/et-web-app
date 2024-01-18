import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

export default function InterestModal({
  handleClose,
  interestData,
  setData,
  addElement,
  subCategory,
}) {
  const router = useRouter();
  const { sub, label } = interestData;

  return (
    <Popup className="rounded-xl shadow-lg max-w-xl w-80v">
      <div className="flex items-center justify-between p-5 border-b-2">
        <h3 className="text-3xl">Select a Sub-category</h3>
        <div onClick={handleClose} className="cursor-pointer">
          <Image src="/svg/cross-dark.svg" alt="cross" height="15" width="15" />
        </div>
      </div>
      <div>
        <form className="py-5">
          {sub.map((s) => (
            <Option
              key={s.id}
              id={s.id}
              name={label}
              text={s.label}
              value={s.id}
              addElement={addElement}
              subCategory={subCategory}
            />
          ))}
        </form>
      </div>
    </Popup>
  );
}

function Option({ id, text, name, value, addElement, subCategory }) {
  return (
    <div className="flex py-2 px-7 cursor-pointer">
      <input
        type="checkbox"
        id={id}
        name={name}
        value={value}
        onClick={addElement}
        defaultChecked={subCategory.includes(value.toString()) && "blue-text"}
        className={`check-with-label opacity-0 `}
      />
      <label
        htmlFor={id}
        className="label-for-check select-none font-semibold text-xl -ml-3 cursor-pointer hover:text-blue-500 ease-in-out duration-300"
      >
        {text}
      </label>
      <div className="ml-auto show-tick hidden">
        <Image src="/svg/blue-tick.svg" alt="cross" height="15" width="15" />
      </div>
    </div>
  );
}

const Popup = styled.div`
  background: ${(props) => props.theme.pure};
`;
