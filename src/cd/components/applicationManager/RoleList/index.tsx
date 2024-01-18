import { rgba } from 'polished'
import React, { useState } from 'react'
import styled from 'styled-components'
const DATA = [
    { id: 1, name: "All", count: 36 },
    { id: 2, name: "Teens", count: 123 },
    { id: 3, name: "Harrisom Bunchman", count: 9 },
    { id: 4, name: "Classmates of kennedy", count: 9 },
    { id: 5, name: "Crew", count: 3 },
    { id: 6, name: "Mark Griffin", count: 5 },
    { id: 7, name: "Mark Gibson", count: 0 },
    { id: 8, name: "No roles assigned", count: 2 }]
function RoleList() {
    return (
        <RoleSection>
            {DATA.map((i, ind) => {
                return (
                    <div key={ind} className="active_tab">
                        <div className="flex justify-between px-4 py-3">
                            <div>{i?.name}</div>
                            <div>{i?.count}</div>
                        </div>
                        <hr />
                    </div>
                )
            })}
        </RoleSection>
    )
}

export default RoleList

const RoleSection = styled.section`
    border-radius: 10px;
    color: ${p => rgba(p.theme.base, 0.7)};
    margin: 1rem 0px;
    background: ${(p: any) => p.theme.pure}; 
    box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
    justify-content: space-between;
    .active_tab:hover{
        background: ${p => rgba(p.theme.base, 0.1)};
    }
   `
