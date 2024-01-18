import Link from "next/link";
import { useRouter } from "next/router";
import { SignupCard } from "@/styles/Card.styled";
import styled from "styled-components";

// import toast from "react-hot-toast";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TranslatedText from "components/TranslatedText";

const AGES = [
  {
    id: 1,
    min: 0,
    max: 5,
  },
  {
    id: 2,
    min: 6,
    max: 12,
  },
  {
    id: 3,
    min: 13,
    max: 17,
  },
  {
    id: 4,
    min: 18,
    max: 29,
  },
  {
    id: 5,
    min: 30,
    max: 39,
  },
  {
    id: 6,
    min: 40,
    max: 49,
  },
  {
    id: 7,
    min: 50,
    max: 59,
  },
  {
    id: 8,
    min: 60,
    max: 120,
  },
];

export default function AgeGroup({ setData, data, setIsChild, height }) {
  const router = useRouter();

  return (
    <Root className="padding text-center min-h-screen lg:flex items-center justify-center" style={{ minHeight: height }}>
      <div className="">
        <ToastContainer
          style={{
            textAlign: "left",
            color: "red",
          }}
          className="toast"
        />
        <h1 className="text-4xl sm:text-5xl font-bold mb-10">
          <TranslatedText> Select your age range</TranslatedText>
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {AGES.map((i) => {
            return (
              <div key={i.id}>
                <SignupCard
                  active={data?.ageRange === i.id}
                  onClick={() => {
                    setData((data) => ({ ...data, ageRange: i.id }));
                    setIsChild(i.id < 3 ? true : false);

                    if (i.id < 3) {
                      document.getElementById("dobOne").classList.remove("hidden");
                      router.push("#dobOne");
                    } else {
                      document.getElementById("height").classList.remove("hidden");
                      router.push("#height");
                    }
                  }}
                >
                  <>
                    {i.min === 60 ? (
                      <> {i.min}+</>
                    ) : (
                      <>
                        {i.min}-{i.max}
                      </>
                    )}
                  </>
                </SignupCard>
              </div>
            );
          })}
        </div>
      </div>
    </Root>
  );
}

const Root = styled.div`
  .Toastify__toast,
  .Toastify__toast-theme--light,
  .Toastify__toast--error {
    background: hsl(358, 100%, 97%);
    color: red;
  }

  .Toastify__toast {
    box-shadow: 0 1px 10px 0 rgb(0 0 0 / 0%), 0 2px 15px 0 rgb(0 0 0 / 5%);
  }
`;

// i.id < 3 &&
//   toast.error(
//     `Only Parent / Guardian can create and use a profile for a child under 13.

//     Please continue only if you are the parent.`,
//     {
//       icon: false,
//       position: "top-center",
//       autoClose: 10000,
//     }
//   );
// toast(
//   "Only Parent / Guardian can create and use a profile for a child under 13. \n\nPlease continue only if you are the parent.",
//   {
//     duration: 12000,
//     style: {
//       background: "rgba(255, 0, 0, 0.1)",
//       color: "red",
//     },
//   }
// );
