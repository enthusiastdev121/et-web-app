import Image from "next/image";
import { IoMdClose } from "react-icons/io";
import { Container } from "./styles";

export default function OptionsModal({ handleClose, setModalContent }: Props) {
  return (
    <Container>
      <IoMdClose
        className="absolute top-3 right-3 text-xl cursor-pointer"
        onClick={handleClose}
      />

      <div className="flex flex-col gap-3 text-center">
        <h2>How would you rate Explore Talent?</h2>
        <p className="text-sm">Select how would you rate us.</p>

        <div className="flex flex-col md:flex-row justify-center gap-3 text-sm font-medium mt-5">
          <div
            className="flex flex-row md:flex-col gap-3 cursor-pointer justify-center text-left md:text-center items-center"
            onClick={() => setModalContent({ modalName: "message" })}
          >
            <div>
              <Image
                src="/svg/written-review.svg"
                alt="pen"
                height={80}
                width={80}
              />
            </div>
            <div>
              Send a <br />
              Written review
            </div>
          </div>


          <hr
          className=" md:hidden"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))",
              margin: "0 2em",
              width: "80%",
              height: 1,
            }}
          />
          <hr
          className="hidden md:block"
            style={{
              background:
                "linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0))",
              margin: "0 2em",
              width: 1,
              height: 84,
            }}
          />

           <div
            className="flex flex-row md:flex-col gap-3 cursor-pointer justify-center text-left md:text-center items-center"
            onClick={() => setModalContent({ modalName: "video-options" })}
          >
            <div>
              <Image
                src="/svg/video-review.svg"
                alt="video"
                height={80}
                width={80}
              />
            </div>
            <div>
              Send a <br />
              video review
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

type Props = {
  handleClose: () => any;
  setModalContent: any;
};
