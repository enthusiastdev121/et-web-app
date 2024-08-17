import styled, { useTheme } from "styled-components"
export function PrimaryBtn(p: any) {
    const theme = useTheme()
    return (
        <PrimaryBtnSection theme={theme} onClick={p.function}>{p.children}</PrimaryBtnSection>
    )
}
const PrimaryBtnSection = styled.button`
    background:${p => p.theme.primary};
    color:${p => p.theme.pure};
    display: flex;
    align-items: center;
    gap: 6px;
    padding: 10px 22px;
    border-radius: 6px;
    font-weight: 600;
`
// Users have requested the ability to search data within tables 7
