import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

import { PrimaryBtn, SecondaryBtn } from "../../../styles/Btn.styled";

export default function CreateProfile() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 padding">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <Image
          src="/images/profile.png"
          height={476}
          width={446}
          alt="Success stories of ExploreTalent"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.3 }}
        viewport={{ once: true, amount: 0.8 }}
      >
        <h2 className="font-bold text-3xl lg:text-5xl">
          Create a stunning profile on Explore Talent
        </h2>
        <p className="text-xl lg:text-3xl my-8">
          Design your own portfolio with photos & videos to showcase your talent
          and catch the eye of casting professionals.
        </p>
        <div className="flex flex-wrap">
          <Link href="/" passHref>
            <PrimaryBtn className="btn mr-5 mb-3">
              Create your free profile
            </PrimaryBtn>
          </Link>
          <Link href="/" passHref>
            <SecondaryBtn className="btn mb-3">See Plan & Pricing</SecondaryBtn>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
