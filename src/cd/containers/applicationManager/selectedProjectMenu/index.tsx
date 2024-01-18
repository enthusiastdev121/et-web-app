import RoleList from 'cd/components/applicationManager/RoleList';
import { CalendarAdd } from 'iconsax-react';
import { rgba } from 'polished';
import React from 'react'
import { BiPlus } from 'react-icons/bi';
import { BsThreeDots } from 'react-icons/bs'
import { MdOutlineDone } from 'react-icons/md';
import styled from 'styled-components';

function SelectedProject() {
  return (
    <Leftsection>
      <div className='flex justify-between first_section'>
        <div className='font-bold'>Project selected</div>
        <button className='icon'><BsThreeDots /></button>
      </div>
      <div className='small_card'>
        <img src='/cdImages/img.png' alt='search' className='rounded ' />
        <div className='font-bold'>Back to the past and future Project</div>
        <MdOutlineDone className='text-3xl' />
      </div>
      <div className='flex justify-between '>
        <div className='flex gap-2 items-center'>
          <div className='font-bold'>Role</div>
          <div className='count'>6</div>
        </div>
        <button className='icon'><BiPlus /></button>
      </div>
      <RoleList/>
      <div className='last_section'>
        <div>Create a schedule</div>
        <CalendarAdd size="32" variant="Bold"/> 
      </div>
    </Leftsection>
  )
}

export default SelectedProject
const Leftsection = styled.section`
  color: ${(props) => props.theme.base};
.count{
  color: ${(p) => p.theme.base};
  background: ${(p) => rgba(p.theme.base, 0.05)};
  border-radius: 100px;
  padding: 5px 12px;
  font-weight: 600;
  font-size: 15px;
}
.icon{
  background: ${(p) => rgba(p.theme.base, 0.05)};
  font-size: 20px;
  padding: 8px 10px;
  border-radius: 6px;
  align-self: center;
}
 .small_card{
  align-items: center;
  display: flex;
  padding: 10px 15px;
  border-radius: 5px;
  margin: 1rem 0px;
  color: ${(props) => props.theme.base};
  background: ${(p: any) => p.theme.pure}; 
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  gap:10px;
 }
 
 .last_section{
  align-items: center;
  display: flex;
  padding: 15px 15px;
  border-radius: 5px;
  margin: 1rem 0px;
  background: ${(p: any) => p.theme.pure}; 
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  justify-content: space-between;
  color: ${p => rgba(p.theme.base, 0.7)};
 }
`;