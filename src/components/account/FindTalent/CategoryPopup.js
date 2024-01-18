import { useRouter } from "next/router";
import Image from "next/image";
import styled from "styled-components";

export default function CategoryPopup({ handleClose }) {
  const router = useRouter();

  return (
    <Popup className="rounded-xl shadow-lg max-w-xl w-80v">
      <div className="flex items-center justify-between p-5 border-b-2">
        <h3 className="text-3xl">Select a Category</h3>
        <div onClick={handleClose} className="cursor-pointer">
          <Image src="/svg/cross-dark.svg" alt="cross" height="15" width="15" />
        </div>
      </div>
      <div>
        <form className="py-5">
          <Option
            router={router}
            handleClose={handleClose}
            id="feature-film"
            name="feature-film"
            text="Actor for feature films"
          />
          <Option
            router={router}
            handleClose={handleClose}
            id="online-content"
            name="online-content"
            text="Actor for online content"
          />
          <Option
            router={router}
            handleClose={handleClose}
            id="short-film"
            name="short-film"
            text="Actor for Short films"
          />
          <Option
            router={router}
            handleClose={handleClose}
            id="tv-series"
            name="tv-series"
            text="Actor for TV Series"
          />
          <Option
            router={router}
            handleClose={handleClose}
            id="event"
            name="event"
            text="Event Actors"
          />
          <Option
            router={router}
            handleClose={handleClose}
            id="abc"
            name="abc"
            text="Actor for feature films"
          />
          <Option
            router={router}
            handleClose={handleClose}
            id="def"
            name="def"
            text="Actor for online content"
          />
          <Option
            router={router}
            handleClose={handleClose}
            id="gh"
            name="gh"
            text="Actor for Short films"
          />
          <Option
            router={router}
            handleClose={handleClose}
            id="ij"
            name="ij"
            text="Actor for TV Series"
          />
          <Option
            router={router}
            handleClose={handleClose}
            id="k"
            name="k"
            text="Event Actors"
          />
        </form>
      </div>
    </Popup>
  );
}

function Option({ id, text, name, router, handleClose }) {
  return (
    <div
      className="flex py-2 px-7 cursor-pointer"
      onClick={() => {
        router.push("#looking");
        document.getElementById("looking").classList.remove("hidden");
        handleClose();
      }}
    >
      <input
        type="checkbox"
        id={id}
        name={name}
        className="check-with-label opacity-0"
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
