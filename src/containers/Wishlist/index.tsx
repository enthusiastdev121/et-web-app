import BackToTop from "components/BackToTop"
import ClassListing from "components/classes/ClassListing"
import CommonAside from "components/classes/CommonAside"
import Pagination from "components/Pagination"
import { useState } from "react"
import { IoSearch } from "react-icons/io5"
import styled from "styled-components"
import { ClassCardBigD } from "types/classes"


const list: ClassCardBigD[] = [
    {
        id: 1,
        img: '/images/classes/all-class-1.png',
        title: 'The captivating actor - a comprehensive guide',
        cat: 'Acting',
        rating: 5.0,
        desc: 'With Actor and YouTube Mc Arthur - How To Improve Your Chances of Success in Your Craf',
        updatedAt: 'August 21',
        duration: 1,
        lecturesCount: 6,
        difficultyLevel: "Beginner",
        price: 59.00,
        isFav: true,
        tags: ["New"],
    },
    {
        id: 2,
        img: '/images/classes/all-class-2.png',
        title: 'The captivating actor - a comprehensive guide',
        cat: 'Acting',
        rating: 4.0,
        desc: 'Your project will look better the moment it sounds better! Learn to use lavaliers correctly as well as tools for the job and turn it into a incredible, best successful career you will ever have in industry of...',
        updatedAt: 'August 21',
        duration: 1,
        lecturesCount: 6,
        difficultyLevel: "Beginner",
        price: 199.00,
        isFav: true,
        tags: ["Best seller"],
    },
    {
        id: 3,
        img: '/images/classes/all-class-3.png',
        title: 'The captivating actor - a comprehensive guide',
        cat: 'Acting',
        rating: 5.0,
        desc: 'With Actor and YouTube Mc Arthur - How To Improve Your Chances of Success in Your Craf',
        updatedAt: 'August 21',
        duration: 1,
        lecturesCount: 6,
        difficultyLevel: "Beginner",
        price: 19.00,
        isFav: true,
        tags: ["Highest rated"],
    },
    {
        id: 4,
        img: '/images/classes/all-class-4.png',
        title: 'The captivating actor - a comprehensive guide',
        cat: 'Acting',
        rating: 5.0,
        desc: 'With Actor and YouTube Mc Arthur - How To Improve Your Chances of Success in Your Craf',
        updatedAt: 'August 21',
        duration: 1,
        lecturesCount: 6,
        difficultyLevel: "Beginner",
        price: 199.00,
        isFav: true,
        tags: [],
    },
    {
        id: 5,
        img: '/images/classes/all-class-5.png',
        title: 'The captivating actor - a comprehensive guide',
        cat: 'Acting',
        rating: 5.0,
        desc: 'With Actor and YouTube Mc Arthur - How To Improve Your Chances of Success in Your Craf',
        updatedAt: 'August 21',
        duration: 1,
        lecturesCount: 6,
        difficultyLevel: "Beginner",
        price: 59.00,
        isFav: true,
        tags: [],
    },
]

const LIMIT = 5;

export default function Wishlist() {
    // const [list, setList] = useState([])
    const [page, setPage] = useState(1)

    return (
        <Root className="py-5 px-5 sm:py-10 sm:px-10v xl:px-[10vw] 2xl:px-[5vw] 3xl:px-0 lg:flex justify-between items-start gap-[40px]"
            style={{ width: "100%", maxWidth: "1530px", margin: "0 auto" }}>
            <BackToTop />

            <main className="max-w-[1100px] lg:w-[70%]">
                {/* Header */}
                <header className="md:flex items-end justify-between mb-[30px]">
                    <div>
                        <h1>Wishlist</h1>
                    </div>

                    <div className="mt-3 md:mt-0 relative h-[40px]">
                        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 z-10" style={{ color: 'rgba(60, 60, 67, 0.6)' }} />
                        <MainSearch type="text" placeholder="Search class..." />
                    </div>
                </header>

                <ClassListing list={list} />

                {/* pagination */}
                <div className="flex justify-center py-6">
                    <Pagination
                        current={Number(1)}
                        total={20}
                        pageSize={LIMIT}
                        onChange={(e) => {
                            if (20 > list.length) {
                                setPage(page + 1)
                            }
                        }}
                    />
                </div>
            </main>

            <CommonAside />
        </Root>

    )
}

const Root = styled.div`
    color: ${p => p.theme.base};

    h1 {
        font-weight: 700;
        font-size: 32px;
        line-height: 39px;
        margin-bottom: 10px;
    }

    h2 {
        font-weight: 700;
        font-size: 18px;
        line-height: 22px;
        margin-bottom: 12px;
    }
`

const MainSearch = styled.input`
    background: #E5E7EB;
    border: 1px solid #E5E7EB;
    border-radius: 100px;
    height: 100%;
    padding: 0 2em;
`