import { H1, H2, H3, H4, Body1 } from "@/styles/Typography.styled";
import { Breadcrumb, Form } from "./TalentDirectoryCategoryLsit.styled";
import Search from "./Search";
import { useEffect, useState } from "react";
import { getSearchTalentCategoryApi } from "network/apis/searchTatent";
import { useAuth } from "context/AuthContext";
import { useRouter } from "next/router";
import Skeleton from "react-loading-skeleton";
import Link from "next/link";

export default function TalentDirectoryCategorySubList({ talentData, getLoading }: any) {
  const route = useRouter()
  const { token, user }: any = useAuth();
  const [categorySub, setCategorySub] = useState([])
  const [orderValue, setOrderValue] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [categoryChild, setCategoryChild] = useState<any[]>([])
  const [categorySubLoading, setCategorySubLoading] = useState(true)
  useEffect(() => {
    if (parseInt(talentData?.categories)) {
      setCategorySubLoading(true)
      const getSearchTalentCategory = async () => {
        const res = await getSearchTalentCategoryApi(token);
        setCategorySub(res.data.filter((x: any) => x.id == parseInt(talentData?.categories))[0]?.subcategories);
        setCategoryName(res.data.filter((x: any) => x.id == parseInt(talentData?.categories))[0]?.name);
        if (res) {
          setCategorySubLoading(false)
        }
      };
      getSearchTalentCategory();
    }
  }, [talentData?.categories]);

  useEffect(() => {
    if (categoryChild.length >= 0) {
      getLoading(true)
      if (route.asPath.split("?").length == 2) {
        const Filter = route.asPath.split("?")[1].split("&");
        let newString: any[] = [];
        for (const item of Filter) {
          switch (item.split("=")[0]) {
            case "subcategories":
              newString.push("subcategories=" + [...categoryChild])
              break;
            default:
              newString.push(item)
              break;
          }
        }
        if (Filter.filter((y: any) => y.split("=")[0] == "subcategories").length > 0) {
          route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + newString.filter((x: any) => x != "").join("&"))
        } else {
          route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + route.asPath.split("?")[1] + "&subcategories=" + categoryChild.map(item => item)
            .filter((value, index, self) => self.indexOf(value) === index));
        }
      } else {
        route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?subcategories=" + categoryChild.map(item => item)
          .filter((value, index, self) => self.indexOf(value) === index));
      }
    }
  }, [categoryChild])

  return (
    <div>
      <Breadcrumb>
        <nav className="rounded-md w-full breadcrumb ">
          <ol className="list-reset flex flex-wrap">
            <li className="cursor-pointer"><Link href="/search-talent/all-search-talent/1"><div className="text-color-primary hover:text-color-primary">Find Talent</div></Link></li>
            <li><span className="text-gray-500 mx-2">/</span></li>
            <li className="cursor-pointer"><Link href="/search-talent/all-search-talent/1"><div className="text-color-primary hover:text-color-primary">Search Talent</div></Link></li>
            <li><span className="text-gray-500 mx-2">/</span></li>
            <li className="text-gray-500">{categoryName}</li>
          </ol>
        </nav>
      </Breadcrumb>

      <div className="flex flex-col md:flex-row justify-between items-center gap-5 mt-5">
        <H1 className="txt-base">{categoryName}</H1>
      </div>

      {categorySubLoading &&

        <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
          {[1].map((i) => {
            return (
              <div key={i}>
                <Skeleton style={{ height: 100, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                <Skeleton style={{ height: 80, width: "20%", borderRadius: 6, marginBottom: 4 }} />
              </div>
            );
          })}
        </div>

      }
      {!categorySubLoading &&
        <Form className="my-10 grid grid-cols-2 lg:grid-cols-3 md:text-base">
          <>
            {categorySub && categorySub.map((item: any) => (
              <>
                {/* {categoryChild.length == 0 && */}
                <>
                  <div className="p-5 xl:p-3 2xl:p-5 border-t border-r border-l border-b text-center md:text-left cursor-pointer">
                    <input
                      type="checkbox"
                      name="jobs"
                      id={item.id}
                      value={item.id}
                      className="form-input opacity-0 cursor-pointer"
                      onChange={(e) => {
                        debugger;
                        let data = categoryChild.filter(x => x == e.target.value)
                        if (data.length > 0) {
                          let newData = categoryChild.filter(x => x != e.target.value)
                          setCategoryChild(newData)
                        } else {
                          setCategoryChild([...categoryChild, e.target.value])
                        }
                      }}
                    />
                    <label htmlFor={item.id} className="form-label select-none cursor-pointer txt-base">
                      {item?.name}
                      <span className="ml-2 md:ml-5 txt-primary">{item.talent_category_count}</span>
                    </label>
                  </div>
                </>

              </>
            ))}
          </>

        </Form>
      }


      <Search talentData={talentData} getLoading={getLoading} />

      <div className="flex justify-between items-center my-10 xs:px-0 px-4">
        <div className="text-xl txt-base">{talentData?.total_size} talents found</div>
        <select className="border-2 rounded-3xl bg-transparent py-2 px-5 text-sm txt-base bg-pure"
          value={orderValue} onChange={(e) => {
            getLoading(true)
            setOrderValue(e.target.value)

            if (route.asPath.split("?").length == 2) {
              const Filter = route.asPath.split("?")[1].split("&");
              let newString: any[] = [];
              for (const item of Filter) {
                switch (item.split("=")[0]) {
                  case "orderby":
                    newString.push("orderby=" + e.target.value)
                    break;
                  default:
                    newString.push(item)
                    break;
                }
              }
              if (Filter.filter((y: any) => y.split("=")[0] == "orderby").length > 0) {
                route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + newString.filter((x: any) => x != "").join("&"))
              } else {
                route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?" + route.asPath.split("?")[1] + "&orderby=" + e.target.value);
              }
            } else {
              route.push('/search-talent/all-search-talent-sub/' + parseInt(talentData.page_no) + "?orderby=" + e.target.value);
            }

          }}>
          <option value="">All</option>
          <option value="best_match">Best match</option>
          <option value="newest">Newest</option>
        </select>
      </div>

    </div>
  );
}
