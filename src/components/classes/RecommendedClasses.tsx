import { useState } from "react"
import styled from "styled-components"
import ClassCardSmall from "./ClassCardSmall"

const recommendedClassesList = [
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
]

export default function RecommendedClasses() {
    // const [recommendedClassesList, setRecommendedClassesLsit] = useState([])

    return (
        <Container>
            <h2>Recommended classes</h2>

            <div className="flex flex-col gap-[25px]">
                {
                    recommendedClassesList.map(item => (
                        <div key={item.id}>
                            <ClassCardSmall item={item} width={330} />
                        </div>
                    ))
                }
            </div>
        </Container>
    )
}

const Container = styled.div`
    background: ${(p: any) => p.theme.pure}; 
    border: 1px solid #E5E7EB; 
    box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
    padding: 30px;

    h2 {
        font-weight: 600;
        margin-bottom: 20px;
    }
`