import { Send } from "iconsax-react"
import { darken } from "polished"
import styled from "styled-components"

export default function SendBtn({ onClick }) {
    return (
        <BtnContainer>
            <Send
                variant="Bold"
                className="cursor-pointer"
                onClick={onClick}
            />
        </BtnContainer>
    )
}

const BtnContainer = styled.div`
    position: absolute;
    top: 50%;
    right: 20px; 
    transform: translateY(-50%);
    background-color: ${p => p.theme.primary};
    height: 50px;
    width: 50px;
    border-radius: 100%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (max-width: 500px) {
        right: 10px;
    }

    &:hover {
        background-color: ${p => darken(0.05, p.theme.primary)};
        transition: all 0.2s ease;
    }
`