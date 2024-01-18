import CardCarousel from "containers/whitelabelHomepage/exploretalent/Caruosel"
import { useState } from "react"
import styled from "styled-components"
import { ClassCardSmallD } from "types/classes"
import ClassCardSmall from "./ClassCardSmall"

const matchedClassesList = [
    {
        id: 1,
        img: '/images/classes/rec-class-1.png',
        title: 'Professional 10 hour acting masterclass',
        cat: 'Acting',
        rating: 5.0
    },
    {
        id: 2,
        img: '/images/classes/rec-class-2.png',
        title: 'Professional 10 hour acting masterclass',
        cat: 'Acting',
        rating: 5.0
    },
    {
        id: 3,
        img: '/images/classes/rec-class-3.png',
        title: 'Professional 10 hour acting masterclass',
        cat: 'Acting',
        rating: 4.0
    },
    {
        id: 4,
        img: '/images/classes/rec-class-4.png',
        title: 'Professional 10 hour acting masterclass',
        cat: 'Acting',
        rating: 5.0
    },
    {
        id: 5,
        img: '/images/classes/rec-class-5.png',
        title: 'Professional 10 hour acting masterclass',
        cat: 'Acting',
        rating: 5.0
    },
    {
        id: 6,
        img: '/images/classes/rec-class-1.png',
        title: 'Professional 10 hour acting masterclass',
        cat: 'Acting',
        rating: 5.0
    },
    {
        id: 7,
        img: '/images/classes/rec-class-2.png',
        title: 'Professional 10 hour acting masterclass',
        cat: 'Acting',
        rating: 5.0
    },
    {
        id: 8,
        img: '/images/classes/rec-class-3.png',
        title: 'Professional 10 hour acting masterclass',
        cat: 'Acting',
        rating: 4.0
    },
    {
        id: 9,
        img: '/images/classes/rec-class-4.png',
        title: 'Professional 10 hour acting masterclass',
        cat: 'Acting',
        rating: 5.0
    },
    {
        id: 10,
        img: '/images/classes/rec-class-5.png',
        title: 'Professional 10 hour acting masterclass',
        cat: 'Acting',
        rating: 5.0
    },
]

export default function MatchedClasses() {
    // const [matchedClassesList, setMatchedClassesList] = useState<ClassCardSmallD[]>([])
    const [activeTab, setActiveTab] = useState("popular")

    return (
        <div>
            <h2>Classes that matches your preference</h2>
            <Nav>
                <NavItem
                    active={activeTab === 'popular'}
                    onClick={() => setActiveTab("popular")}
                >Most popular</NavItem>
                <NavItem
                    active={activeTab === 'new'}
                    onClick={() => setActiveTab("new")}>New</NavItem>
                <NavItem
                    active={activeTab === 'trending'}
                    onClick={() => setActiveTab("trending")}>Trending</NavItem>
            </Nav>

            {/* list */}
            <div className="mt-2 -mx-5 sm:mx-0">
                <CardCarousel ht={"0%"} bg="#000" clr="#fff">
                    {
                        matchedClassesList.map((item: ClassCardSmallD) => (
                            <div key={item.id}>
                                <ClassCardSmall item={item} width={209} />
                            </div>
                        ))
                    }
                </CardCarousel>
            </div>
        </div>
    )
}

const Nav = styled.nav`
    display: flex;
    background-color: ${p => p.theme.pure};
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    
    @media (max-width: 500px) {
        margin: 0 -20px;
    }
`

const NavItem = styled.div<{ active: boolean }>`
    padding: 10px 20px;
    font-weight: 600;
    cursor: pointer;
    border-bottom: ${p => p.active ? `2px solid ${p.theme.primary}` : 'none'};
    color: ${p => p.active ? p.theme.primary : p.theme.disable};

    @media (max-width: 500px) {
        font-size: 14px;
    }
`