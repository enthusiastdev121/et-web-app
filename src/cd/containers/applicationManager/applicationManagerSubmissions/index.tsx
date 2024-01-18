import UserCard from 'cd/components/applicationManager/UserCard';
import TalentProfileModal from 'cd/containers/TalentProfileModal';
import Pagination from 'components/Pagination';
import { rgba } from 'polished';
import React, { useState } from 'react'
import { AiFillAudio, AiOutlineSearch } from 'react-icons/ai';
import { BsFillGridFill, BsListCheck, BsTag } from 'react-icons/bs';
import { FaChevronDown } from 'react-icons/fa';
import { TiVideo } from 'react-icons/ti';
import styled from 'styled-components';
const Data2 = [
    {
        img: '/cdImages/user/user1.png',
        name: "Raphael Chapman",
        city: "Berverly Hills,CA",
        age: "31-35 ",
        height: "5'10",
        desc: "Back to the past and future Project",
        check: false
    },
    {
        img: '/cdImages/user/user2.png',
        name: "Leonard Garrison",
        city: "Berverly Hills,CA",
        age: "31-35 ",
        height: "5'10",
        desc: "Back to the past and future Project",
        check: false
    },
    {
        img: '/cdImages/user/user3.png',
        name: "Raphael Chapman",
        city: "Berverly Hills,CA",
        age: "31-35 ",
        height: "5'10",
        desc: "Back to the past and future Project",
        check: false
    },
    {
        img: '/cdImages/user/user4.png',
        name: "Raphael Chapman",
        city: "Berverly Hills,CA",
        age: "31-35 ",
        height: "5'10",
        desc: "Back to the past and future Project",
        check: false
    },
    {
        img: '/cdImages/user/user5.png',
        name: "Raphael Chapman",
        city: "Berverly Hills,CA",
        age: "31-35 ",
        height: "5'10",
        desc: "Back to the past and future Project",
        check: false
    },
    {
        img: '/cdImages/user/user6.png',
        name: "Leonard Garrison",
        city: "Berverly Hills,CA",
        age: "31-35 ",
        height: "5'10",
        desc: "Back to the past and future Project",
        check: false
    },
    {
        img: '/cdImages/user/user7.png',
        name: "Raphael Chapman",
        city: "Berverly Hills,CA",
        age: "31-35 ",
        height: "5'10",
        desc: "Back to the past and future Project",
        check: false
    },
    {
        img: '/cdImages/user/user8.png',
        name: "Raphael Chapman",
        city: "Berverly Hills,CA",
        age: "31-35 ",
        height: "5'10",
        desc: "Back to the past and future Project",
        check: false
    },

]
const AllTab = [
    { id: 1, name: "All" },
    { id: 2, name: "New 10" },
    { id: 3, name: "Unfiled 42" },
    { id: 4, name: "Liked 24" },
    { id: 5, name: "Dislike 12" }
]
const Tab = [
    { icon: <BsFillGridFill />, name: "Grid", id: 1 },
    { icon: <BsListCheck />, name: "List", id: 2 },
    { icon: <TiVideo />, name: "Video", id: 3 },
    { icon: <AiFillAudio />, name: "Audio", id: 4 }
]
const options = [
    {
        label: "Sort by Update",
        value: "Sort by Update",
    },
    {
        label: "Mango",
        value: "mango",
    },
    {
        label: "Banana",
        value: "banana",
    },
    {
        label: "Pineapple",
        value: "pineapple",
    },
];
function SubmissionsSection() {
    const [activeTab, setActive] = useState(0);
    const [tab, setTab] = useState(0);
    const [profileModal, setProfileModal] = useState(false)
    return (
        <>
            <Mainsection>
                <div className="flex  flex-wrap  gap-4 justify-between items-center">
                    <div className='flex gap-6 '>
                        <div className='flex gap-2 items-center'>
                            <input type="checkbox" name='check' id='check' />
                            <label htmlFor="check" className='cursor-pointer'>Select All</label>
                        </div>
                        {/* <select className='px-5 '>
                            <option>Action</option>
                            <option>Action</option>
                            <option>Action</option>
                            <option>Action</option>
                    </select> */}
                        <div className='flex  gap-2 items-center cursor-pointer'>
                            <div className=''>Actions</div>
                            <div className=''><FaChevronDown /></div>
                        </div>
                    </div>
                    <div className='flex gap-4 flex-wrap cursor-pointer'>
                        {Tab.map((i, ind) => {
                            return (
                                <div key={ind} className={`${i.id === tab ? 'page_button select ' : ' flex page_button'}`} onClick={() => { setTab(i.id) }} >
                                    <div className='icons'>{i.icon}</div>
                                    <span>{i?.name}</span>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className="flex gap-4  flex-wrap  justify-between my-4">
                    <div className='flex flex-wrap text-sm gap-5'>
                        {AllTab.map((i, ind) => {
                            return (
                                <div key={ind} className={`${i.id === activeTab ? 'tab_button select ' : 'tab_button flex  text-sm'}`} onClick={() => { setActive(i.id) }}>
                                    <button>  {i?.name} </button>
                                </div>)
                        })}
                    </div>
                    <div className='flex gap-2  items-center'>
                        <button className='tab_button'><BsTag /></button>
                        <button className='tab_button'><AiOutlineSearch /></button>
                        <select className="option_text">
                            {options.map((option, ind) => (
                                <option key={ind} value={option.value}>{option.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
                <div className='card'>
                    {Data2.map((i, ind) => {
                        return (
                            <div key={ind} className="">
                                <UserCard data={i} setPopup={() => setProfileModal(true)} />
                            </div>)
                    })}
                </div>
                <div className="flex justify-center py-6">
                    <Pagination />
                </div>
            </Mainsection>
            <TalentProfileModal open={profileModal} setPopup={() => setProfileModal(false)} />
        </>
    )
}

export default SubmissionsSection
const Mainsection = styled.section`
 color: ${(props) => props.theme.base};
.card{
    grid-template-columns: repeat(4, 1fr);
    display: grid;
    gap: 1rem;
}
@media (max-width: 1400px) {
  .card{ grid-template-columns: repeat(3, 1fr); }
  margin: auto;
}
@media (max-width: 768px) {
  .card{ grid-template-columns: repeat(2, 1fr); }
  margin: auto;
}
@media (max-width: 520px) {
  .card{ grid-template-columns: repeat(1, 1fr); }
  margin: auto;
}

.icons{
  font-size: 20px;
}
.option_text{
    width: 100%;
    padding: 4px 32px;
    border-radius: 16px;
    font-size:14px;
    color:${p => rgba(p.theme.base, 0.8)} ;
    background: ${p => p.theme.pure};
}
.page_button{
    background: ${(p) => rgba(p.theme.base, 0.05)};
    color: ${(p) => rgba(p.theme.base, 0.7)};
    font-size: 16px;
    padding: 4px 10px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 3px;
    font-size: small;
    }
    .page_button.select {
        color: ${p => p.theme.pure};
        background: ${p => p.theme.primary};
    }
.tab_button{
    background: ${(p) => rgba(p.theme.base, 0.05)};
    padding: 6px 14px;
    border-radius: 100px;
}
.tab_button{
    background: ${(p) => rgba(p.theme.base, 0.05)};
    padding: 6px 14px;
    border-radius: 100px;
    }
    .tab_button.select {
        color: ${p => p.theme.pure};
        background: ${p => p.theme.primary};
    }
`;