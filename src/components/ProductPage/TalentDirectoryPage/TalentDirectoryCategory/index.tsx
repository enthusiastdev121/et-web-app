import { H1, H2, H3, H4, Body1 } from "@/styles/Typography.styled";
import { Form } from "./TalentDirectoryCategoryLsit.styled";
import Search from "./Search";
import { useEffect, useState } from "react";
import { getSearchTalentApi, getSearchTalentCategoryApi } from "network/apis/searchTatent";
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import Modal from "components/Modal";
import { sub } from "date-fns";
import { IoClose } from "react-icons/io5";
import styled from "styled-components";
import { rgba } from "polished";
import Button from "components/Button";
import { FiArrowRight } from "react-icons/fi";
import { FaArrowRight } from "react-icons/fa";

export default function TalentDirectoryCategoryList({
  talentData,
  getLoading,
  filterData, setFilterData, onReset, ageRange, setAgeRange, total, orderValue, setOrderValue,
}: any) {
  const route = useRouter();
  const { token, user }: any = useAuth();
  const [category, setCategory] = useState([]);
  const [categoryLoading, setCategoryLoading] = useState(true);

  const [openSubCatModal, setOpenSubCatModal] = useState(false);
  const [subCategories, setSubCategories] = useState({
    parent: "",
    parentId: 0,
    subCategories: []
  })
  const [selectedSubCategories, setSelectedSubCategories] = useState([])

  // const [filterData,setFilterData] = useState({
  //   gender:"",
  //   worldWide:"",
  //   ethnicity:""
  // })

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
    // getSearchTalentCategory();
  }, []);

  const GoToSub = (id: any) => {
    route.push(
      "/search-talent/all-search-talent-sub/" + 1 + "?categories=" + id
    );
  };

  useEffect(() => {
    applyAgeFilter()
  }, [])

  const applyAgeFilter = async () => {
    try {
      var res = await fetch(`/search-talent/all-search-talent/`)
    } catch (err) {
      console.log("Err", err);
    }
  }
  return (
    <div>

      {/* <Search talentData={talentData} getLoading={getLoading} filterData={filterData} setFilterData={setFilterData} onReset={onReset}
        ageRange={ageRange}
        setAgeRange={setAgeRange} /> */}

      <div className="flex justify-between items-center my-5 xs:px-0 px-4">
        <div className="text-xl txt-base"></div>
        <Select
          className="border-2 rounded-3xl bg-transparent py-2 px-5 text-sm "
          value={orderValue}
          onChange={(e) => {
            setOrderValue(e.target.value);
          }}
        >
          <option value="newest">Newest</option>
          <option value="recently_active">Recently Active</option>
          <option value="best_match">Best match</option>
        </Select>
      </div>
    </div>
  );
}

const Select = styled.select`
  appearance: none;
  background-image: url("/images/Icon.svg");
  background-repeat: no-repeat;
  background-position: right 1rem center;
  background-size: 0.7em;
`

const SubCatItem = styled.div`
`



{/* <>
      
   

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
          {subCategories.subCategories.length > 0 ?
            openSubCatModal && <Modal handleClose={() => setOpenSubCatModal(false)}>
              <div className="bg-pure rounded-lg" style={{ minWidth: 300, width: '90vw', maxWidth: 550 }}>
                <div className="flex justify-between border-b-2 py-5 px-10 font-bold text-xl">
                  <div>{subCategories?.parent}</div>
                  <div onClick={() => setOpenSubCatModal(false)} className="cursor-pointer text-2xl"><IoClose /></div>
                </div>

                <div className="py-5">
                  {subCategories?.subCategories?.map(subCategory => (
                    <div
                      key={subCategory?.id}
                      className={selectedSubCategories.includes(subCategory.id) ? "py-2 px-10 cursor-pointer font-semibold txt-primary" : "py-2 px-10 cursor-pointer font-semibold"}
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

                <div className="flex pb-5 px-10">
                  <Button primary onClick={() => {
                    route.push(
                      `/search-talent/all-search-talent/${1}?categories=[${subCategories?.parentId}]?subcategories=[${selectedSubCategories}]`
                    );
                    setOpenSubCatModal(false)
                  }}>Done <FaArrowRight className="ml-1" /></Button>
                </div>
              </div>
            </Modal>
            : null

          }


          <Form className="my-10 grid grid-cols-2 lg:grid-cols-3 md:text-base">
            <>
              {category &&
                category?.map((item: any) => (
                  <>
                    <>
                      <div className="p-5 xl:p-3 2xl:p-5 border-t border-r border-l border-b text-center md:text-left cursor-pointer">
                        <input
                          type="checkbox"
                          name="jobs"
                          id={item.id}
                          value={item.id}
                          className="form-input opacity-0 cursor-pointer"
                        // onChange={(e) => {
                        //   GoToSub(e.target.value);
                        // let data = categoryChild.filter(x => x == )
                        // if (data.length > 0) {
                        //   let newData = categoryChild.filter(x => x != e.target.value)
                        //   setCategoryChild(newData)
                        // } else {
                        //   setCategoryChild([...categoryChild, e.target.value])
                        // }
                        // }}
                        />
                        <label
                          htmlFor={item.id}
                          className="form-label select-none cursor-pointer"
                          onClick={() => {
                            setSubCategories({
                              parent: item.name,
                              parentId: item.id,
                              subCategories: item.subcategories,
                            })
                            setOpenSubCatModal(true)
                          }}
                        >
                          {item.name}
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

      </> */}

// ---------------------------------------


// if (route.asPath.split("?").length == 2) {
          //   const Filter = route.asPath.split("?")[1].split("&");
          //   let newString: any[] = [];
          //   for (const item of Filter) {
          //     switch (item.split("=")[0]) {
          //       case "orderby":
          //         newString.push("orderby=" + e.target.value);
          //         break;
          //       default:
          //         newString.push(item);
          //         break;
          //     }
          //   }
          //   if (
          //     Filter.filter((y: any) => y.split("=")[0] == "orderby").length >
          //     0
          //   ) {
          //     route.push(
          //       "/search-talent/all-search-talent/" +
          //       parseInt(talentData.page_no) +
          //       "?" +
          //       newString.filter((x: any) => x != "").join("&")
          //     );
          //   } else {
          //     route.push(
          //       "/search-talent/all-search-talent/" +
          //       parseInt(talentData.page_no) +
          //       "?" +
          //       route.asPath.split("?")[1] +
          //       "&orderby=" +
          //       e.target.value
          //     );
          //   }
          // } else {
          //   route.push(
          //     "/search-talent/all-search-talent/" +
          //     parseInt(talentData.page_no) +
          //     "?orderby=" +
          //     e.target.value
          //   );
          // }