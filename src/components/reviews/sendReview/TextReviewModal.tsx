import Button from "components/Button";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import toast from "react-hot-toast";
import { BsStarFill } from "react-icons/bs";
import { FaArrowLeft } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Container } from "./styles";

export default function TextReviewModal({ handleClose, setModalContent }: any) {
  const [rating, setRating] = useState(0);

  return <Container>
    <IoMdClose className="cursor-pointer text-2xl absolute top-3 right-3" onClick={handleClose} />

    <div className="flex justify-center items-center pb-4 px-8">
      <h2>Write a review</h2>
    </div>

    <div className="flex flex-col gap-5 text-center">
      <small>How would you rate Explore Talent?</small>
      <div className="flex gap-2 align-center justify-center text-3xl">
        {
          [...Array(5)].map((star, index) => {
            index += 1;
            return (
              <BsStarFill
                key={index}
                style={{ color: index <= rating ? "#FFB543" : "#C5C5C5", cursor: "pointer" }}
                onClick={() => setRating(index)}
              />
            )
          })
        }
      </div>

      <div>
        <label
          htmlFor="text-review"
          className="font-semibold text-xs block text-left max-w-[520px] mx-auto mb-2"
        >Review</label>
        <textarea
          id="text-review"
          placeholder="What can you say about Explore Talent?"
          className="border rounded w-full max-w-[520px] h-[146px] p-3 text-sm"
        ></textarea>
      </div>

      <div className="md:w-60 md:mx-auto">
        <Button
      fullWidth
          primary
          style={{ borderRadius: 5 }}
          onClick={() => {
            handleClose()
            toast.custom((t) => (
              <div className="bg-primary py-5 px-10 text-white text-center rounded-lg flex items-center justify-center gap-4">
                <div className="hidden md:block">
                  <Image src="/images/confetti-gp-2.png" alt="confetti" width={61} height={63} />
                </div>
                <div>
                  <h4 className="font-bold">Review sent successfully!</h4>
                  <p className="mt-3">Thank you for sending your review, It is now under approval</p>
                </div>
                <div className="hidden md:block">
                  <Image src="/images/confetti-gp-1.png" alt="confetti" width={61} height={63} />
                </div>
              </div>
            ))
          }}
        >Sumbit review</Button>
      </div>

      <small className="my-5">
        By submiting this review you agree to <Link href="/about/agreement"><a target="_blank" className="txt-primary">Terms and Privacy Policy</a></Link>
      </small>
    </div>
  </Container>;
}
