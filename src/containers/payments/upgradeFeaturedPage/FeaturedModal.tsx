import { GreenBtn } from "@/styles/Btn.styled";
import Button from "components/Button";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import { Modal, Overlay } from "./styles";

export default function FeaturedModal({ open, onClose, onSuccess, onFeatured }: { open: boolean; onClose: () => any; onSuccess: () => any; onFeatured: () => any }) {
  return (
    <>
      {open && (
        <div className="fixed top-0 left-0 h-screen w-screen overflow-auto">
          <Overlay>
            <Modal>
              <span className="absolute top-3 right-3 text-xl cursor-pointer" onClick={onClose}>
                <IoClose />
              </span>

              <h1>You can now take full advantage of our Talent Community</h1>

              <div className="text-center text-sm">
                Get more exposure, get it now and have <strong>70% OFF</strong> to Feature Your Profile
              </div>

              <div className="card-container grid md:grid-cols-3 gap-5 justify-items-center">
                <div className="card">
                  <div className="vectors">
                    <Image src="/images/pay-featured-graphic-1.png" alt="svg" height={130} width={130} />
                  </div>

                  <p>Be Featured randomly on 7 areas of the website, including in homepage.</p>

                  <div className="flex flex-col items-center gap-1">
                    <button>See Example</button>
                    <span className="line"></span>
                  </div>
                </div>

                <div className="card">
                  <div className="vectors">
                    <Image src="/images/pay-featured-graphic-2.png" alt="svg" height={130} width={152} />
                  </div>

                  <p>Get Seen First in talent searches.</p>

                  <div className="flex flex-col items-center gap-1">
                    <button>See Example</button>
                    <span className="line"></span>
                  </div>
                </div>

                <div className="card">
                  <div className="vectors">
                    {" "}
                    <Image src="/images/pay-featured-graphic-3.png" alt="svg" height={130} width={118} />
                  </div>

                  <p>Your Submissions will be seen first by Casting Directors.</p>

                  <div className="flex flex-col items-center gap-1">
                    <button>See Example</button>
                    <span className="line"></span>
                  </div>
                </div>
              </div>

              <div>
                <small className="text-center block mb-1">This offer is only for today.</small>

                <div className="font-medium text-center">
                  Offer ends in: <strong>24d 42h 16m 6s</strong>{" "}
                </div>
              </div>

              <div className="text-center">
                <div>
                  Yes I Want to Feature my Profile for <span className="line-through">$39.73 / Month</span> <strong> ONLY $19.95 </strong> / Month
                </div>
                <span>Today Only</span>
              </div>

              <div className="text-center">
                <GreenBtn onClick={onFeatured} className="btn">
                  Become a Featured Talent
                </GreenBtn>
              </div>
            </Modal>
          </Overlay>
        </div>
      )}
    </>
  );
}
