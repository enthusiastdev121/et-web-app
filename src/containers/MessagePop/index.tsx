import styled from "styled-components"

export default function MessagePop() {
    return (
        <Root>
            <div>You recieved a message</div>

        </Root>
    )
}

const Root = styled.div`
    position: absolute;
    top: 90vh;
    left: 2.5rem;
    padding: 1.25rem;
    border-radius: 4px;
    color: #fff;
    background-color: ${p => p.theme.primary};
    display: flex;
    align-items: center;
    justify-content: center;
`