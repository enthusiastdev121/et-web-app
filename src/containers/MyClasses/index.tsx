import BackToTop from "components/BackToTop"
import CommonAside from "components/classes/CommonAside"
import MyClassFilters from "components/classes/MyClassFilters"
import OwnClassCard from "components/classes/OwnClassCard"
import Pagination from "components/Pagination"
import { useEffect, useState } from "react"
import { IoSearch } from "react-icons/io5"
import styled from "styled-components"
import { OwnClassCardD } from "types/classes"

const LIST: OwnClassCardD[] = [
    {
        id: 1,
        title: "Acting 101 - How to get started in acting career",
        desc: "The basic of acting industry, how to get started by Shawn mendez",
        progress: 70,
        thumbnail: '/images/classes/all-class-1.png',
        status: 2,
        fav: false,
    },
    {
        id: 2,
        title: "Acting 101 - How to get started in acting career",
        desc: "The basic of acting industry, how to get started by Shawn mendez",
        progress: 40,
        thumbnail: '/images/classes/all-class-2.png',
        status: 4,
        fav: false,
    },
    {
        id: 3,
        title: "Acting 101 - How to get started in acting career",
        desc: "The basic of acting industry, how to get started by Shawn mendez",
        progress: 0,
        thumbnail: '/images/classes/all-class-3.png',
        status: 1,
        fav: false,
    },
    {
        id: 4,
        title: "Acting 101 - How to get started in acting career",
        desc: "The basic of acting industry, how to get started by Shawn mendez",
        progress: 100,
        thumbnail: '/images/classes/all-class-4.png',
        status: 3,
        fav: false,
    },
    {
        id: 5,
        title: "Acting 101 - How to get started in acting career",
        desc: "The basic of acting industry, how to get started by Shawn mendez",
        progress: 70,
        thumbnail: '/images/classes/all-class-1.png',
        status: 2,
        fav: true,
    },
    {
        id: 6,
        title: "Acting 101 - How to get started in acting career",
        desc: "The basic of acting industry, how to get started by Shawn mendez",
        progress: 40,
        thumbnail: '/images/classes/all-class-1.png',
        status: 4,
        fav: false,
    },
    {
        id: 7,
        title: "Acting 101 - How to get started in acting career",
        desc: "The basic of acting industry, how to get started by Shawn mendez",
        progress: 0,
        thumbnail: '/images/classes/all-class-3.png',
        status: 1,
        fav: false,
    },
    {
        id: 8,
        title: "Acting 101 - How to get started in acting career",
        desc: "The basic of acting industry, how to get started by Shawn mendez",
        progress: 100,
        thumbnail: '/images/classes/all-class-2.png',
        status: 3,
        fav: false,
    },
    {
        id: 9,
        title: "Acting 101 - How to get started in acting career",
        desc: "The basic of acting industry, how to get started by Shawn mendez",
        progress: 70,
        thumbnail: '/images/classes/all-class-2.png',
        status: 2,
        fav: true,
    },
    {
        id: 10,
        title: "Acting 101 - How to get started in acting career",
        desc: "The basic of acting industry, how to get started by Shawn mendez",
        progress: 40,
        thumbnail: '/images/classes/all-class-4.png',
        status: 4,
        fav: false,
    },
    {
        id: 11,
        title: "Acting 101 - How to get started in acting career",
        desc: "The basic of acting industry, how to get started by Shawn mendez",
        progress: 0,
        thumbnail: '/images/classes/all-class-3.png',
        status: 1,
        fav: false,
    },
    {
        id: 12,
        title: "Acting 101 - How to get started in acting career",
        desc: "The basic of acting industry, how to get started by Shawn mendez",
        progress: 100,
        thumbnail: '/images/classes/all-class-1.png',
        status: 3,
        fav: false,
    },
]

const LIMIT = 5;

export default function MyClasses() {
    const [list, setList] = useState<OwnClassCardD[]>([])
    const [page, setPage] = useState(1)
    const [activeTab, setActiveTab] = useState('all')

    const openAll = () => setList(LIST.filter(i => i.status === 1 || i.status === 2))
    const openFavorites = () => setList(LIST.filter(i => i.fav === true))
    const openArchived = () => setList(LIST.filter(i => i.status === 4))

    useEffect(() => {
        setList(LIST.filter(i => i.status === 1 || i.status === 2))
    }, [])

    return (
        <Root className="py-5 px-5 sm:py-10 sm:px-10v xl:px-[10vw] 2xl:px-[5vw] 3xl:px-0 lg:flex justify-between items-start gap-[40px]"
            style={{ width: "100%", maxWidth: "1530px", margin: "0 auto" }}>
            <BackToTop />

            <main className="max-w-[1100px] lg:w-[70%]">
                {/* Header */}
                <header className="md:flex items-center justify-between mb-[20px]">
                    <div>
                        <h1>My Classes</h1>
                    </div>

                    <div className="mt-3 md:mt-0 relative h-[40px]">
                        <IoSearch className="absolute left-3 top-1/2 -translate-y-1/2 z-10" style={{ color: 'rgba(60, 60, 67, 0.6)' }} />
                        <MainSearch type="text" placeholder="Search class..." />
                    </div>
                </header>

                {/* NAV */}
                <nav className="flex gap-3">
                    <Tab
                        active={activeTab === 'all'}
                        onClick={() => {
                            setActiveTab('all')
                            openAll()
                        }}
                    >All Classes</Tab>
                    <Tab
                        active={activeTab === 'fav'}
                        onClick={() => {
                            setActiveTab('fav')
                            openFavorites()
                        }}
                    >Favorites</Tab>
                    <Tab
                        active={activeTab === 'archive'}
                        onClick={() => {
                            setActiveTab('archive')
                            openArchived()
                        }}
                    >Archived</Tab>
                </nav>

                {/* Fiters and sort */}
                <MyClassFilters />

                {/* Main listing */}
                <div className="mt-6 grid md:grid-cols-2 2xl:grid-cols-3 gap-[30px]">
                    {
                        list.map((item: OwnClassCardD) => (
                            <OwnClassCard key={item.id} item={item} />
                        ))
                    }
                </div>

                {/* pagination */}
                <div className="flex justify-center py-10">
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

const Tab = styled.div<{ active: boolean }>`
    background: ${p => p.active ? p.theme.primary : p.theme.pure};
    color: ${p => p.active ? '#fff' : p.theme.base};
    border: 1px solid #E5E7EB;
    border-radius: 100px;
    padding: 12px 15px;
    font-size: 14px;
    font-weight: 500;
    cursor: pointer;
`