import { useAuth } from "context/AuthContext";
import { useProfileStore } from "context/ProfileStore";
import { useRouter } from "next/router";
import { FaStar } from "react-icons/fa"
import { IoBriefcase, IoPerson, IoRibbon } from "react-icons/io5"
import { MdPersonPin, MdReviews } from "react-icons/md"
import styled from "styled-components"

export default function BottomNav() {
    const router = useRouter();
    const { profile } = useProfileStore();
    const {
        auth: { authenticated },
    } = useAuth();

    return (
        <Root>
            <Nav>
                <NavItem
                    active={router.pathname.includes("auditions") ? true : false}
                    onClick={() => router.push('/auditions/all-jobs')}
                >
                    <IoBriefcase />
                    <span>Jobs</span>
                </NavItem>
                <NavItem
                    active={router.pathname.includes("search-talent") ? true : false}
                    onClick={() => router.push('/search-talent/all-search-talent/1')}
                >
                    <MdPersonPin />
                    <span>Talents</span>
                </NavItem>
                <NavItem
                    active={router.pathname.includes("explore") ? true : false}
                    onClick={() => router.push('/explore')}
                >
                    <FaStar />
                    <span>Explore</span>
                </NavItem>
                <NavItem
                    active={router.pathname.includes("reviews") ? true : false}
                    onClick={() => router.push('/reviews/all')}
                >
                    <MdReviews />
                    <span>Review</span>
                </NavItem>

                {
                    authenticated &&
                    <NavItem
                        active={router.pathname.includes(profile?.talentlogin) ? true : false}
                        onClick={() => router.push("/" + profile?.talentlogin)}
                    >
                        <IoPerson />
                        <span>Profile</span>
                    </NavItem>}
            </Nav>
        </Root>
    )
}

const Root = styled.div`
    background: ${p => p.theme.pure};
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 13px 10vw;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100vw;
    z-index: 45;
    box-shadow: 2px 0px 4px rgba(0, 0, 0, 0.08);
    
    @media (min-width: 1050px) {
        display: none;
    }
    `

const Nav = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    `

const NavItem = styled.li<{ active: boolean }>`
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    cursor: pointer;
    color: ${p => p.active ? p.theme.primary : p.theme.disable};
    font-size: 26px;
    
    span {
        font-weight: 600;
        font-size: 12px;
        line-height: 22px;
    }

    &:hover {
        color: ${p => p.theme.primary};
        transition: all 0.3s ease;
    }
`