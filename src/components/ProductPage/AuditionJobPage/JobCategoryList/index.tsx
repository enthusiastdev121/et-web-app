import { H1, H2, H3, H4, Body1 } from "@/styles/Typography.styled";
import { PrimaryBtnLight, PrimaryLight } from "@/styles/Btn.styled";
import { Content, Header, Jobs, Root } from "./JobCategoryLsit.styled";
import Search from "./Search";
import { useEffect, useState } from "react";
import {
  categories,
  categoriesKeys,
  interest,
} from "@/utils/constants/profile";
import { useHost } from "context/HostContext";
import { getSearchTalentCategoryApi } from "network/apis/searchTatent";
import { useAuth } from "context/AuthContext";
import Skeleton from "react-loading-skeleton";
import Modal from "components/Modal";
import Button from "components/Button";
import { useRouter } from "next/router";
import styled from "styled-components";
import { IoClose } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

export default function JobCategoryList({ setSelected, selected }: any) {
  const route = useRouter();
  const { token } = useAuth();
  const [category, setCategory] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);
  const [orderValue, setOrderValue] = useState("newest");
  const [openSubCatModal, setOpenSubCatModal] = useState(false);
  const [subCategories, setSubCategories] = useState({
    parent: "",
    parentId: 0,
    subCategories: []
  })
  const [selectedSubCategories, setSelectedSubCategories] = useState([])

  useEffect(() => {
    const getSearchTalentCategory = async () => {
      try {
        setCategoryLoading(true);
        const res = await getSearchTalentCategoryApi(token);
        setCategory(res?.data);
        setCategoryLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
    getSearchTalentCategory();
  }, []);

  return (
    <>
      {categoryLoading && (
        <div
          style={{
            flexDirection: "column",
            display: "flex",
            padding: "10px 10px",
            gap: 20,
          }}
        >
          {[1].map((i) => {
            return (
              <div key={i}>
                <Skeleton
                  style={{
                    height: 100,
                    width: "100%",
                    borderRadius: 8,
                    marginBottom: 4,
                  }}
                />
                <Skeleton
                  style={{
                    height: 80,
                    width: "20%",
                    borderRadius: 6,
                    marginBottom: 4,
                  }}
                />
              </div>
            );
          })}
        </div>
      )}
      {!categoryLoading && (
        <>
          {openSubCatModal && <Modal handleClose={() => setOpenSubCatModal(false)}>
            <div className="bg-pure rounded-lg" style={{ minWidth: 300, width: '90vw', maxWidth: 550 }}>
              {/* header */}
              <div className="flex justify-between border-b-2 py-5 px-10 font-bold text-xl">
                <div>{subCategories?.parent}</div>
                <div onClick={() => setOpenSubCatModal(false)} className="cursor-pointer text-2xl"><IoClose /></div>
              </div>

              {/* body */}
              <div className="py-5 grid md:grid-cols-2">
                {subCategories?.subCategories?.map(subCategory => (
                  <div
                    key={subCategory?.id}
                    className={selectedSubCategories.includes(subCategory.id) ? "py-2 px-10 cursor-pointer txt-primary" : "py-2 px-10 cursor-pointer"}
                    onClick={() => {
                      selectedSubCategories.includes(subCategory.id) ?
                        setSelectedSubCategories(selectedSubCategories.filter(i => i !== subCategory.id))
                        :
                        setSelectedSubCategories([...selectedSubCategories, subCategory?.id])
                    }}
                  >
                    {subCategory?.name}
                  </div>
                ))}
              </div>

              {/* footer */}
              <div className="flex pb-5 px-10">
                <Button primary onClick={() => {
                  setOpenSubCatModal(false)
                }}>Done <FaArrowRight className="ml-1" /></Button>
              </div>
            </div>
          </Modal>}

          <Form className="my-10 grid grid-cols-2 lg:grid-cols-3 md:text-base">
            <>
              {category &&
                category.map((item: any) => (
                  <>
                    <>
                      <div className="p-5 xl:p-3 2xl:p-5 border-t border-r border-l border-b text-center md:text-left cursor-pointer">
                        <input
                          type="checkbox"
                          name="jobs"
                          id={item.id}
                          value={item.id}
                          className="form-input opacity-0 cursor-pointer"
                        />
                        <label
                          htmlFor={item.id}
                          className=" cursor-pointer"
                          onClick={() => {
                            setSubCategories({
                              parent: item?.name,
                              parentId: item.id,
                              subCategories: item.subcategories,
                            })
                            setOpenSubCatModal(true)
                          }}
                        >
                          {item?.name}
                          <span className="ml-2 md:ml-5 blue-text">
                            {item.talent_category_count}
                          </span>
                        </label>
                      </div>
                    </>
                  </>
                ))}
            </>
          </Form>
        </>
      )}
    </>
  )

}

const Form = styled.form`
  .form-label {
    font-size: 14px;

    @media (min-width: 1680px) {
      font-size: 19px;
    }
  }

  @media (min-width: 1050px) {
    & > div {
      border-bottom: none;
    }

    & > div :first-child {
      border-top: none;
    }

    & > div :nth-child(2) {
      border-top: none;
    }

    & > div :nth-child(3) {
      border-top: none;
    }

    & > div :nth-child(3n) {
      border-right: none;
    }

    & > div :nth-child(1n) {
      border-left: none;
    }
  }

  .form-input:checked + .form-label {
    color: ${(props) => props.theme.primary};
  }

  .blue-text {
    color: ${(props) => props.theme.primary};
  }
`;