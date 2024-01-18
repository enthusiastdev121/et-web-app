import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import styled from "styled-components";

import { fetchUser } from "@/utils/helper";

export default function HeroSection() {
  const [user, setUser] = useState({});

  // useEffect(() => {
  //   const [userInfo] = fetchUser(user);
  //   setUser(userInfo);
  // }, []);

  return (
    <Container className="padding text-white text-center">
      <div>
        <motion.h1
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-bold"
        >
          Welcome Back, {user?.displayName}
        </motion.h1>

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="my-5 matchingJobBtn py-4 px-12 font-semibold w-fit mx-auto"
        >
          View your mathing job <span>16</span>{" "}
        </motion.div>

        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className=""
        >
          Your recent{" "}
          <span>
            <Link href="/auditions">
              <a className="underline">saved searches</a>
            </Link>
          </span>{" "}
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.5 }}
          className=""
        >
          You don&apos;t have any saved searches yet
        </motion.p>

        <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="mt-5 grid gap-3 md:grid-cols-2 lg:grid-cols-4"
        >
          <select className="bg-transparent border-2 rounded-md p-3">
            <option value="" className="text-black">
              All Auditions & Job
            </option>
            <option value="" className="text-black">
              All Auditions & Job
            </option>
          </select>
          <select className="bg-transparent border-2 rounded-md p-3">
            <option value="" className="text-black">
              Worldwide
            </option>
            <option value="" className="text-black">
              Worldwide
            </option>
          </select>
          <select className="bg-transparent border-2 rounded-md p-3">
            <option value="" className="text-black">
              For Male
            </option>
            <option value="" className="text-black">
              For Male
            </option>
          </select>
          <Link href="/">
            <a className="flex items-center justify-center py-3 px-6 bg-white searchBtn rounded font-semibold">
              <BiSearch className="text-lg mr-2" />
              <span>Search Jobs</span>
            </a>
          </Link>
        </motion.div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(props) => props.theme.primary};

  .searchBtn {
    color: ${(p) => p.theme.primary};
  }

  .matchingJobBtn {
    background-color: ${(p) => p.theme.abs.darkBlue};
    border-radius: 30px;

    span {
      background-color: ${(p) => p.theme.abs.green};
      padding: 0.4em 0.5em;
      border-radius: 100%;
    }
  }
`;
