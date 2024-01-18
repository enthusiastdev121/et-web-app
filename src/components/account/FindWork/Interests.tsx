import { AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

import { PrimaryBtn, TertiaryBtn } from "@/styles/Btn.styled";
import InterestModal from "./InterestModal";
import Modal from "../Modal";
import { categoriesKeys, interest } from "../../../utils/constants/profile";
import Button from "components/Button";
import InterestItem from "./InterestItem";
import Image from "next/image";


export default function Interests({ setData, onFinish, data, isChild }: any) {
  const [showModal, setShowModal] = useState<boolean>(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);
  const [interestData, setInterestData] = useState<Category>({
    id: 0,
    label: "",
    sub: [],
  });
  const { id } = interestData;
  const [subCategory, setSubCategory] = useState<Category[]>([]);
  const [category, setCategory] = useState<SubCategory[]>([]);
  const [loading, setLoading] = useState(false)

  const [list, setList] = useState<any[]>([]);
  useEffect(() => {
    const dem = Object.keys(interest).map((i) => {
      return {
        ...interest[i],
        selected: false,
        sub: interest[i].sub.map((i2: any, index: number) => {
          return {
            ...i2,
            selected: false,
          };
        }),
      };
    });
    setList(dem);

    return () => { };
  }, []);

  useEffect(() => {
    setData((data: any) => ({
      ...data,
      interests: {
        category: category,
        subCategory: subCategory,
      },
    }));
  }, [category, subCategory]);


  useEffect(() => {
    setData((data: any) => ({
      ...data,
      interests: list,
    }));
  }, [list]);

  const addElement = (e: any) => {
    document.getElementById(e.target?.name)?.classList.remove("deselect");
    document.getElementById(e.target?.name)?.classList.add("selected");

    setCategory((category: any) => (category.includes(id) ? [...category] : [...category, id]));

    if (subCategory.includes(e.target.value)) {
      setSubCategory(subCategory.filter((item) => item !== e.target.value));
    } else {
      e.target.className = "check-with-label opacity-0";
      setSubCategory((subCategory) => [...subCategory, e.target.value]);
    }
  };

  const selectJob = (e: any) => {
    setInterestData(interest[e.target.value]);

    const arr = interest[e.target.value].sub;

    let selected = false;
    arr.forEach((item: any) => {
      if (subCategory.includes(item.id.toString()) === true) {
        selected = true;
      }
    });
    e.target.className = selected ? "selected bg-primary" : "deselect";

    open();
  };

  const selectSingleJob = (e: any) => {
    if (category.includes(interest[e.target.value].id)) {
      e.target.className = "deselect";
      setCategory(category.filter((item) => item !== interest[e.target.value].id));
    } else {
      e.target.className = "selected bg-primary";
      setCategory((category) => [...category, interest[e.target.value].id]);
    }
  };

  return (
    <div className="padding text-center min-h-screen flex flex-col items-center justify-center" style={{ minHeight: "100vh" }}>
      <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
        {showModal && (
          <Modal handleClose={close}>
            <InterestModal interestData={interestData} setData={setData} handleClose={close} addElement={addElement} subCategory={subCategory} />
          </Modal>
        )}
      </AnimatePresence>

      <h1 className="text-3xl md:text-5xl font-bold mb-10">{isChild ? "Select Jobs your child is interested in" : "Jobs I'm interested in"}</h1>

      {/* <div>
        {Object.values(categoriesKeys).map((key, index) => {
          if (key === "photography" || key === "survival") {
            return (
              <button key={index} onClick={selectSingleJob} value={key} className="deselect" id={interest[key].label}>
                {interest[key].label}
              </button>
            );
          } else {
            return (
              <button key={index} onClick={selectJob} value={key} className="deselect" id={interest[key].label}>
                {interest[key].label}
              </button>
            );
          }
        })}
      </div> */}

      <div className="flex flex-wrap gap-5 relative justify-center items-center" style={{ maxWidth: 600 }}>
        {list.map((i) => (
          <>
            <InterestItem
              key={i.id}
              {...i}
              setList={setList}
            />
          </>
        ))}
      </div>

      {/* <div className="mt-10">
        <Link href="#username" passHref>
          <PrimaryBtn
            className="btn"
            onClick={() => {
              document.getElementById("username").classList.remove("hidden");
            }}
          >
            Continue{" "}
            <Image
              src="/svg/arrow-right.svg"
              height={10}
              width={20}
              alt="arrow right"
            />
          </PrimaryBtn>
        </Link>
      </div> */}

      <div className="mt-10">
        {/* <Link href="#headshot" passHref> */}
        <Button primary loading={loading} onClick={onFinish}>
          Finish <span className="text-2xl -mt-1">&rarr;</span>
        </Button>
        {/* </Link> */}
        {/* <Link href="#headshot" passHref>
          <button className="btn cursor-pointer lg:text-xl font-semibold text-base">Cancel</button>
        </Link> */}
      </div>
    </div>
  );
}

//TYPES
type SubCategory = {
  categoryId: number;
  id: number;
  label: string;
};
type Category = {
  id: number;
  label: string;
  sub: SubCategory[];
};
type InterestData = {
  categoryId: number;
  id: number;
  label: string;
};
