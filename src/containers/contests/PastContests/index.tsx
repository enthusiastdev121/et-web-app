import { H1 } from '@/styles/Typography.styled';
import BackToTop from 'components/BackToTop';
import Advertisement from 'components/UpgradeToPro';
import CommunityBuzz from 'containers/CommunityBuzz';
import SuccessStories from 'containers/SuccessStories';
import { useAuth } from 'context/AuthContext';
import { formatPastContestItem } from 'network/apiFormatter/contest';
import { getContestUpcomingListApi } from 'network/apis/contest';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { ContestItemD, ContestItemDPast } from 'types/contest';
import PaginationNew from './PaginationNew';
import PastCard from './PastCard';
import { Container } from './styles';

export default function PastContests() {

    const {
        token,
        auth: { authenticated },
    } = useAuth();

    const [loading, setLoading] = useState(false);
    const [pastContest, setPastContest] = useState<any>()
    const [currentPage, setCurrentPage] = useState(1);


    useEffect(() => {
        if (token) {
            setLoading(true)
            const getContenstentDetail = async () => {
                const res = await getContestUpcomingListApi({ perPage: 10, page: currentPage, filterBy: 'past', token: token });
                setPastContest(res);
                if (res) {
                    setLoading(false)
                }
            };
            getContenstentDetail()
        }
    }, [token])

    const currentTableData = async (page: any) => {
        setLoading(true)
        setCurrentPage(page)
        const res = await getContestUpcomingListApi({ perPage: 10, page: currentPage, filterBy: 'past', token: token });
        setPastContest(res);
        if (res.data) {
            setLoading(false)
        }
    };


    return (
        <Container className="padding-small">
            <BackToTop />
            <main
                className="lg:flex gap-10"
                style={{ maxWidth: "1530px", margin: "0 auto" }}
            >
                <div className="left">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-5 title-padding">
                        <H1>Past Contests</H1>


                    </div>

                    <div>

                        {loading && <div style={{ flexDirection: "column", display: "flex", padding: "10px 10px", gap: 20 }}>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
                                return (
                                    <div key={i}>
                                        <Skeleton style={{ height: 100, width: "100%", borderRadius: 8, marginBottom: 4 }} />
                                        <Skeleton style={{ height: 100, width: "70%", borderRadius: 8, marginBottom: 4 }} />
                                        <Skeleton style={{ height: 100, width: "40%", borderRadius: 8, marginBottom: 4 }} />
                                    </div>
                                );
                            })}
                        </div>}

                        {!loading &&
                            <>
                                {pastContest?.data && pastContest?.data?.map((i: any) => {
                                    const res = formatPastContestItem(i)
                                    return <PastCard {...res} key={i.id} />;
                                })}
                            </>
                        }
                        {pastContest?.total && (
                            <>
                                <PaginationNew className="pagination-bar" currentPage={currentPage} totalCount={parseInt(pastContest.total)} pageSize={10} siblingCount={2} onPageChange={(page: any) => currentTableData(page)} />
                            </>
                        )}

                    </div>
                </div>

                <aside className="right">
                    <Advertisement />


                    <div className="mb-5">
                        <CommunityBuzz />
                    </div>
                    <div>
                        <SuccessStories />
                    </div>
                </aside>
            </main>
        </Container>
    )
}
