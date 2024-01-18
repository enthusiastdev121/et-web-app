import { TALENTLIMIT } from "@/utils/constants";
import BackToTop from "components/BackToTop";
import JobCart from "components/jobs/JobCart";
import Pagination from "components/ProductPage/FollowTalentDirectoryPage/FollowTalentSearchList/Pagination";
import FollowTalentCard from "components/Talent/FollowTalentCard";
import Advertisement from "components/UpgradeToPro";
import CommunityBuzz from "containers/CommunityBuzz";
import SuccessStories from "containers/SuccessStories";
import { useAuth } from "context/AuthContext";
import { formatFriendRequest } from "network/apiFormatter/talent";
import { acceptFriendRequestApi, declineFriendRequestApi, getConnectionRequestsApi } from "network/apis/talent";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import styled from "styled-components";
import { FriendRequestD } from "types/talents";
import ConnectionCard from "./ConnectionCard";

export default function ConnectionRequests() {
    const { token } = useAuth()
    const [loading, setLoading] = useState(false)
    const [connections, setConnections] = useState<FriendRequestD[]>([])
    const [currentPage, setCurrentPage] = useState(1);
    const paginate = (pageNumber: any) => setCurrentPage(pageNumber);
    const [totalSize, setTotalSize] = useState(0);
    const [lastPage, setLastPage] = useState(1);

    useEffect(() => {
        if (!token) {
            return;
        }

        const fetchRequests = async () => {
            try {
                setLoading(true);
                const res = await getConnectionRequestsApi({ token, page: currentPage, perPage: TALENTLIMIT, })
                const formattedRes = res?.data?.map((item: any) => (
                    formatFriendRequest(item)
                ))
                setConnections(formattedRes)
                setTotalSize(res.total)
                setLastPage(res.last_page)
                setLoading(false)
            } catch (err) {
                console.log(err);
                setLoading(false)
            }
        }
        fetchRequests()
    }, [token, currentPage])

    return (
        <Container className="padding-small">
            <BackToTop />
            <main className="lg:flex gap-10" style={{ maxWidth: "1530px", margin: "0 auto" }}>
                <div className="left">
                    <h1 className="font-bold text-2xl mb-10">Connection Requests</h1>

                    <div className="grid md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-5">
                        {
                            loading ?

                                [1, 2, 3].map((i) => {
                                    return (
                                        <div key={i}>
                                            <Skeleton style={{
                                                width: '100%',
                                                borderRadius: 8,
                                                minHeight: 400,
                                                height: '100%'
                                            }} />
                                        </div>
                                    );
                                })

                                :
                                connections.map(connection => (
                                    <ConnectionCard
                                        key={connection?.id}
                                        profile_picture_path={connection?.pic}
                                        name={connection?.name}
                                        talentnum={connection?.talentnum}
                                        setConnections={setConnections}
                                        talentlogin={connection?.talentlogin}
                                    />
                                ))
                        }
                    </div>

                    {lastPage > 1 && <Pagination postsPerPage={TALENTLIMIT} totalPosts={totalSize} paginate={paginate} />}
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
        width: 87.07%;
    }
}
.right {
    @media (min-width: 1050px) {
        width: 30%;
    }
}
`;



{/* <FollowTalentCard 
key={index} 
profile_picture_path={res.profile_picture_path} 
name={res.name} 
is_follower={res.is_follower} 
is_following={res.is_following} 
profile_id={res.profile_id} 
refressTO={refressTo} /> */}