import styled from "styled-components";
import Layout from "components/Layout";
import AsideRight from "components/ProductPage/AuditionJobPage/AsideRight";
import JobsList from "components/ProductPage/AuditionJobPage/JobsList";
import SuccessStories from "containers/SuccessStories";
import ActingJobCategories from "components/ProductPage/AuditionJobPage/ActingJobCategories";
import BackToTop from "components/BackToTop";
import { H1 } from "@/styles/Typography.styled";
import JobCategoryList from "components/ProductPage/AuditionJobPage/JobCategoryList";
import Advertisement from "components/UpgradeToPro";
import JobCart from "components/jobs/JobCart";
import CommunityBuzz from "containers/CommunityBuzz";
import Pagination from "components/Pagination";
import { useCallback, useEffect, useRef, useState } from "react";
import { useAuth } from "context/AuthContext";
import { JobItemD } from "types/jobs";
import { addFavJobApi, removeFavJobApi, searchJobsApi } from "network/apis/jobs";
import { formatJobRes } from "network/apiFormatter/jobs";
import { WHITELABEL_NAME } from "@/utils/envProviders";

const LIMIT = 30;

export default function ActingPage() {
    const [selected, setSelected] = useState([]);
    const { token } = useAuth();
    const [list, setList] = useState<JobItemD[]>([]);
    const [loading, setLoading] = useState(true);
    const [total, setTotal] = useState<number>(0);
    const [page, setPage] = useState(1);
    const scrollPos = useRef<any>();

    const fetchAllJobs = useCallback(
        async (more = false) => {
            try {
                let res: any;

                setLoading(true);

                res = await searchJobsApi({
                    token,
                    ageMax: 100,
                    ageMin: 0,
                    categories: [1],
                    subcategories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
                    distance: null,
                    gender: "any",
                    lat: null,
                    lon: null,
                    nationwide: false,
                    page: page,
                    ethnicity: "Any",
                    perPage: LIMIT,
                });


                const data = res.data.map((i: any) => formatJobRes(i));

                setTotal(Number(res.total));

                if (more) {
                    setList((s) => [...s, ...data]);
                } else {
                    setList(data);
                }

                setLoading(false);
            } catch (err) {
                setLoading(false);
                console.log("Err", err);
            }
        },
        [page, token, page]
    );
    useEffect(() => {
        fetchAllJobs();
    }, [fetchAllJobs]);

    const onFav = (id: number) => {
        const changeFav = async (val: boolean) => {
            try {
                if (!val) {
                    const res = await removeFavJobApi({
                        token,
                        id: id,
                    });
                    console.log("FAV REMOVED", res);
                } else {
                    const res = await addFavJobApi({
                        token,
                        raw: {
                            bam_casting_id: id,
                        },
                    });
                    console.log("FAV ADDED", res);
                }
            } catch (err) {
                console.log("ERR", err);
            }
        };
        setList((s) =>
            s.map((i) => {
                if (i.id === id) {
                    changeFav(!i.favorite);
                    return {
                        ...i,
                        favorite: !i.favorite,
                    };
                } else {
                    return i;
                }
            })
        );
    };

    return (
        <Layout title={`Search for Acting Auditions and Jobs - ${WHITELABEL_NAME}`}>
            <Container className="padding-small">
                <BackToTop />
                <main className="lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
                    <div className="p-5 left">
                        <header className="flex flex-col md:flex-row justify-between items-center gap-5">
                            <H1>Search for Acting Auditions and Jobs</H1>
                        </header>

                        <div className="flex justify-between items-center my-10">
                            <div className="text-xl font-bold">{total} Jobs</div>
                        </div>

                        <div ref={scrollPos} />
                        <JobsList list={list} loading={loading} onFav={onFav} />

                        {!loading && total > LIMIT && (
                            <div className="flex justify-center py-6">
                                <Pagination
                                    current={page}
                                    total={total}
                                    pageSize={LIMIT}
                                    onChange={(e) => {
                                        scrollPos.current?.scrollIntoView();
                                        setPage(e);
                                    }}
                                />
                            </div>
                        )}
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
        </Layout>
    );
}


const Container = styled.div`
  background-color: ${(p: any) => p.theme.paper};

  .left {
    @media (min-width: 1050px) {
      width: 65%;
    }
  }
  .right {
    @media (min-width: 1050px) {
      width: 35%;
    }
  }
`;