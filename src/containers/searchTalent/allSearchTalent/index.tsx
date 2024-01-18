import styled from "styled-components";

import SuccessStories from "../../SuccessStories";
import { useAuth } from "context/AuthContext";
import BackToTop from "components/BackToTop";
import TalentDirectoryCategoryList from "components/ProductPage/TalentDirectoryPage/TalentDirectoryCategory";
import Advertisement from "components/UpgradeToPro";
import JobCart from "components/jobs/JobCart";
import CommunityBuzz from "containers/CommunityBuzz";
import TalentSearchList from "components/ProductPage/TalentDirectoryPage/TalentSearchList";
import { useCallback, useEffect, useRef, useState } from "react";
import { getSearchTalentApi } from "network/apis/searchTatent";
import { LIMIT, TALENTLIMIT } from "@/utils/constants";
import { useRouter } from "next/router";
import Pagination from "components/Pagination";
import { debounce } from "lodash";
import { H1 } from "@/styles/Typography.styled";
import Button from "components/Button";
import { rgba } from "polished";
import { BsCheck } from "react-icons/bs";
import { WHITELABEL } from "@/utils/envProviders";
export default function AllSearchTalent({ res }: any) {
  const [list, setList] = useState<any[]>([]);
  const [filterApplied, setFilterApplied] = useState(false);
  const [filterData, setFilterData] = useState({
    gender: "",
    ethnicity: "",
    search: null,
    states: [],
    countries: [],
  })
  const [Loading, setLoading] = useState(false);
  const [page, setPage] = useState();
  const [reset, setReset] = useState(false);
  const [total, setTotal] = useState<number>(99999);
  const [ageRange, setAgeRange] = useState([0, 100]);

  const updateRef = useRef(ageRange);


  /**
   * SERVER DATA
   */

  useEffect(() => {

    if (res?.data) {
      setList(res.data);

      setPage(res?.current_page)

    }
  }, [res])



  // You can do it using cleanup function and boolean

  // const { auth: { authenticated }, } = useAuth();

  // const getLoadingNew = (loadingData: any) => {
  //   setLoading(loadingData);
  // };

  // useEffect(() => {
  //   setLoading(false);
  // }, [data]);

  const routerData = useRouter()

  const activePage = routerData.query.pageno;

  const [orderValue, setOrderValue] = useState("newest");
  const prevOrderValueRef = useRef(orderValue);

  useEffect(() => {
    let active = true;
    const applyFilter = async () => {
      // updateRef.current +1;
      let minValue = new Date().getFullYear() - ageRange[0]
      let maxValue = new Date().getFullYear() - ageRange[1]
      try {
        setLoading(true);
        const res = await getSearchTalentApi({
          page: Number(activePage),
          gender: filterData.gender ?? "",
          ethnicity: filterData.ethnicity ?? "",
          search: filterData.search ?? "",
          perPage: TALENTLIMIT ?? 28,
          // dobMax: minValue,
          // dobMin: maxValue,
          order: orderValue,
          state: filterData.states,
          country: filterData.countries,
        })
        if (active) {
          setList(res.data)
          setTotal(Number(res.total || 9999))
          setLoading(false)
          console.log("CONSOLE LOG IS ACTIVE...");
        }
      } catch (err) {
        setLoading(false)
        console.log("Err", err);
      }
    };

    // console.log(filterData.gender || filterData.ethnicity || filterData.countries?.length > 0 || filterData.states?.length > 0 || ageRange[0] !== 0 || ageRange[1] !== 100 || reset, "filters")
    console.log("Previous Value", prevOrderValueRef.current)
    console.log("Order Value", orderValue)
    if (prevOrderValueRef.current !== orderValue) {
      applyFilter();
      prevOrderValueRef.current = orderValue; // Update the ref with the current value
    }
    else if (filterData.gender || filterData.ethnicity || filterData.countries?.length > 0 || filterData.states?.length > 0 || ageRange[0] !== 0 || ageRange[1] !== 100 || reset || filterData.search !== null) {

      if (reset) {

        setReset(false);
      }

      applyFilter()
    }

    return () => {
      active = false
    }
  }, [filterData, ageRange, reset, orderValue, activePage]);



  // useEffect(() => {
  //   if (reset) {
  //     console.log("filterData ==",filterData);      

  //   }
  // }, [reset]);


  const onReset = () => {
    setReset(true);
    setFilterData({
      gender: "",
      ethnicity: "",
      search: "",
      states: [],
      countries: [],
    })
    setAgeRange([0, 100])
  }
  return (
    <Container className="padding-small">
      <BackToTop />
      <main className="lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }} >
        <div className="left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 mb-4">
            <H1>Find Local Actors & Talent for Hire</H1>
          </div>

          <CardBox className="py-3 px-4 mb-6" >
            <div>
              <h4 className="text-lg font-semibold mb-2" >
                Get access to our entire talent database.
              </h4>

              <p className="text-base" >Only a portion of talent can be searched here. Place a listing to access all talent.</p>

              <div className="items text-sm flex gap-3 opacity-70 mt-3 mb-4 flex-wrap" >

                {['Quickly receive quality applications', 'Save time using our casting tools', 'Easily hire the best talent'].map(i => {
                  return (<div className="item flex gap-1 items-center " key={i} >
                    <BsCheck size={24} />
                    {i}
                  </div>)

                })}

              </div>

              <div>
                <a href="https://cd.exploretalent.com/" target='_blank' rel="noreferrer" >
                  <Button size="small" primary>List an audition or job</Button>
                </a>
              </div>

            </div>
          </CardBox>

          <TalentDirectoryCategoryList getLoading={"dmeo"} filterData={filterData} setFilterData={setFilterData}
            onReset={onReset}
            ageRange={ageRange}
            setAgeRange={setAgeRange}
            total={total}
            orderValue={orderValue}
            setOrderValue={setOrderValue}
          />
          <TalentSearchList talentData={list} Loading={Loading} page={page} setPage={setPage} limit={TALENTLIMIT} total={total}
          />
          <div className="flex justify-center py-6">

            <Pagination
              current={Number(activePage)}
              total={total}
              pageSize={TALENTLIMIT}
              onChange={(e) => {
                if (total > list.length) {
                  routerData.push(`/search-talent/all-search-talent/${e}`)
                }
              }}
            />
          </div>
        </div>

        <aside className="right">
          <Advertisement />
          <div className="mb-5">
            <JobCart />
          </div>
          <div className="mb-5">
            <CommunityBuzz />
          </div>
          <div>
            <SuccessStories />
          </div>
        </aside>
      </main>
    </Container>
  );
}

const Container = styled.div`
  background-color: ${(p: any) => p.theme.paper};
  color: ${(p: any) => p.theme.base};

  .left {
    @media (min-width: 1050px) {
      width: 66.66%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 30%;
    }
  }
`;



const CardBox = styled.div`

background: ${p => rgba(p.theme.primary, 0.08)};
border-radius: 12px;

h4{
  

}
p{

}
.items{

}
.item{

}


`;













// import styled from "styled-components";

// import SuccessStories from "../../SuccessStories";
// import { useAuth } from "context/AuthContext";
// // import CommunityBuzz from "containers/CommunityBuzz";
// // import Advertisement from "components/UpgradeToPro";
// import BackToTop from "components/BackToTop";
// import TalentDirectoryCategoryList from "components/ProductPage/TalentDirectoryPage/TalentDirectoryCategory";
// import Advertisement from "components/UpgradeToPro";
// import JobCart from "components/jobs/JobCart";
// import CommunityBuzz from "containers/CommunityBuzz";
// import TalentSearchList from "components/ProductPage/TalentDirectoryPage/TalentSearchList";
// import { useCallback, useEffect, useRef, useState } from "react";
// import { getSearchTalentApi } from "network/apis/searchTatent";
// import { LIMIT, TALENTLIMIT } from "@/utils/constants";
// import { useRouter } from "next/router";
// import Pagination from "components/Pagination";

// export default function AllSearchTalent() {
//   const [list, setList] = useState<any[]>([]);
//   const [filterApplied, setFilterApplied] = useState(false);
//   const [filterData, setFilterData] = useState({
//     gender: "",
//     ethnicity: "",
//     search: "",
//   })
//   const [Loading, setLoading] = useState(false);
//   const [page, setPage] = useState();
//   const [reset, setReset] = useState(false);
//   const [total, setTotal] = useState<number>(0);
//   const [ageRange, setAgeRange] = useState([0, 100]);

//   const updateRef = useRef(ageRange)

//   // You can do it using cleanup function and boolean

//   // const { auth: { authenticated }, } = useAuth();

//   // const getLoadingNew = (loadingData: any) => {
//   //   setLoading(loadingData);
//   // };

//   // useEffect(() => {
//   //   setLoading(false);
//   // }, [data]);

//   const routerData = useRouter()

//   const activePage = routerData.query.pageno;



//   // LIST WITH FILTER (getSearchTalentApi)

//   // const applyFilter = useCallback(async () => {

//   //   // updateRef.current +1;
//   //   let minValue = new Date().getFullYear() - ageRange[0]
//   //   let maxValue = new Date().getFullYear() - ageRange[1]

//   //   //   let minValue = 1900;
// let maxValue = WHITELABEL === "talento" ? new Date().getFullYear() - 18 : 2050;
//   //   // console.log("Min Max ageRange---",minValue,maxValue);

//   //   try {
//   //     setLoading(true);
//   //     const res = await getSearchTalentApi({
//   //       page: Number(activePage),
//   //       gender: filterData.gender ?? "",
//   //       ethnicity: filterData.ethnicity ?? "",
//   //       search: filterData.search ?? "",
//   //       perPage: TALENTLIMIT ?? 28,
//   //         dobMax: minValue,
//   //          dobMin: maxValue,

//   //       // dobMax: ageRange[1] ,
//   //       // dobMin: ageRange[0]
//   //     })
//   //     // if (res.lenght > 1) {
//   //     //   setLoading(false)
//   //     // }
//   //     setList(res.data)

//   //     setTotal(Number(res.total||9999))
//   //     console.log("total no of data---", res.data.length);
//   //     console.log("FIRST ELEMENT---", list[0]);

//   //     setLoading(false)
//   //   } catch (err) {
//   //     setLoading(false)
//   //     console.log("Err", err);
//   //   }
//   // }, [filterData, page, ageRange, activePage,]);


//   useEffect(() => {
//     let active = true;
//     const applyFilter = async () => {
//       // updateRef.current +1;
//       let minValue = new Date().getFullYear() - ageRange[0]
//       let maxValue = new Date().getFullYear() - ageRange[1]

//       //   let minValue = 1900;
let maxValue = WHITELABEL === "talento" ? new Date().getFullYear() - 18 : 2050;
//       // console.log("Min Max ageRange---",minValue,maxValue);

//       try {
//         setLoading(true);
//         const res = await getSearchTalentApi({
//           page: Number(activePage),
//           gender: filterData.gender ?? "",
//           ethnicity: filterData.ethnicity ?? "",
//           search: filterData.search ?? "",
//           perPage: TALENTLIMIT ?? 28,
//           dobMax: minValue,
//           dobMin: maxValue,
//           // dobMax: ageRange[1] ,
//           // dobMin: ageRange[0]
//         })
//         // if (res.lenght > 1) {
//         //   setLoading(false)
//         // }
//         if (active) {
//           setList(res.data)
//           setTotal(Number(res.total || 9999))
//           setLoading(false)
//           console.log("CONSOLE LOG IS ACTIVE");
//         }
//       } catch (err) {
//         setLoading(false)
//         console.log("Err", err);
//       }
//     };

//     applyFilter()
//     console.log("active---", active);
//     return () => {
//       active = false
//     }
//   }, [filterData, page, ageRange, activePage]);


//   useEffect(() => {
//     if (reset) {
//       console.log("reset----");
//       setFilterData({
//         gender: "",
//         ethnicity: "",
//         search: "",
//       })
//       setAgeRange([10, 40]);
//     }
//   }, [reset]);
//   const onReset = () => {
//     setReset(true)
//   }
//   return (
//     <Container className="padding-small">
//       <BackToTop />
//       <main className="lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }} >
//         <div className="left">
//           <TalentDirectoryCategoryList getLoading={"dmeo"} filterData={filterData} setFilterData={setFilterData}
//             onReset={onReset}
//             ageRange={ageRange}
//             setAgeRange={setAgeRange}
//             total={total}
//           />
//           <TalentSearchList talentData={list} Loading={Loading} page={page} setPage={setPage} limit={TALENTLIMIT} total={total}
//           />
//           <div className="flex justify-center py-6">
//             <Pagination
//               current={Number(activePage)}
//               total={total}
//               pageSize={TALENTLIMIT}
//               onChange={(e) => {
//                 if (total > list.length) {
//                   routerData.push(`/search-talent/all-search-talent/${e}`)
//                 }
//               }}
//             />

//           </div>
//         </div>
//         <aside className="right">
//           <Advertisement />
//           <div className="mb-5">
//             <JobCart />
//           </div>
//           <div className="mb-5">
//             <CommunityBuzz />
//           </div>
//           <div>
//             <SuccessStories />
//           </div>
//         </aside>
//       </main>
//     </Container>
//   );
// }

// const Container = styled.div`
//   background-color: ${(p: any) => p.theme.paper};
//   color: ${(p: any) => p.theme.base};

//   .left {
//     @media (min-width: 1050px) {
//       width: 66.66%;
//     }
//   }
//   .right {
//     @media (min-width: 1050px) {
//       width: 30%;
//     }
//   }
// `;
