import React, { useEffect, useState } from 'react';
import styled, { useTheme } from "styled-components"
import { FaPlus } from 'react-icons/fa'
import { rgba } from 'polished';
import ModalAnimated, { ModalPaper } from 'components/ModalAnimated';
import { AiFillMinusCircle, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { BsPlusCircleFill } from 'react-icons/bs';
import { GoCheck } from 'react-icons/go';
import { HiPlus } from 'react-icons/hi';
import { MdEdit } from 'react-icons/md';
import RangeSlider from 'components/RangeSlider';
import RolesData from './RoleData';
import { addJobRoleApi } from 'network/apis/cd/job';
import { useAuth } from 'context/AuthContext';
import { interestArray } from '@/utils/constants/profile';
export default function Roles({ getData, onChange, roleId }: propTypes) {
    const [open, setOpen] = useState(false)
    const theme = useTheme()
    const [roleFor, setRoleFor] = useState<any>(Array)
    const [requiremetData, setRequiremetData] = useState<any>(RequirementsData)
    const [requiremets, setRequiremets] = useState(false)
    const [ageRange, setAgeRange] = useState([0, 0]);
    const [activeIndex, setActiveIndex] = useState(0)
    const [activeRole, setActiveRole] = useState('Acting')
    const [activeId, setActiveId] = useState(0)
    const { token } = useAuth()
    // Add Role component code
    const [role, setRole] = useState<any>([
        {
            id: 1,
            roleId: 0,
            roleModel: 'Acting',
            name: '',
            discription: '',
            number: '',
            type: '',
            gender: '',
            ethnicity: '',
            range: [],
            roleFor: [],
            moreRequirements: [],
        },
    ]);
    // Function hit on save and add one more talent button 
    const addObjectToArray = (check: any) => {
        hitJobPostApi(check)
        setActiveIndex(role[role.length - 1].id + 1)
    }
    const onActiveRole = (i: any) => {
        if (i.length > 0) {
            if (role.some((s: any) => s.roleModel === i)) {
                const active = role.filter((s: any) => s.roleModel === i)
                setActiveRole(i)
                setActiveIndex(active[0]?.id)
            } else {
                const value = {
                    id: role[role.length - 1].id + 1,
                    roleId: 0,
                    roleModel: i,
                    name: '',
                    discription: '',
                    number: '',
                    type: '',
                    gender: '',
                    ethnicity: '',
                    range: [],
                    roleFor: [],
                    moreRequirements: [],
                }
                setRole((role: any) => [...role, value])
                const active = role.filter((s: any) => s.roleModel === i)
                setActiveRole(i)
                setActiveIndex(role[role.length - 1].id + 1)
                // setActiveIndex(active[0]?.id)
            }
        } else {
            setActiveIndex(role[0]?.id)
        }
    }
    // Function hit to update the value of the role array 
    const change = (e: any, val: any, id: any) => {
        const neww = role.map((i: any, ix: any) => {
            if (i.id === id) {
                return {
                    // ...i, [val]: e.target.value
                    ...i, [val]: e
                }
            } else {
                return {
                    ...i
                }
            }
        })
        setRole(neww)
    }
    // Function hit on save button
    const saveData = (check: any) => {
        setOpen(s => false);
        hitJobPostApi(check)
        // onChange(role.filter((s: any) => s.name.trim().length > 0))
    }
    const hitJobPostApi = async (check: any) => {
        try {
            const formate = role.filter((s: any) => s.roleModel == activeRole && s.id == activeIndex)
            console.log('///////activeIndex////////', formate, formate[0]?.name, activeIndex, activeRole)
            const getCategoryId = roleFor.filter((s: any) => s.label === activeRole)
            const data = {
                status: 0,
                number_of_people: formate[0]?.number,
                name: formate[0]?.name,
                des: formate[0]?.discription,
                gender_male: formate[0]?.gender === 'male' ? 1 : 0,
                gender_female: formate[0]?.gender === 'female' ? 1 : 0,
                age_min: formate[0]?.range[0],
                age_max: formate[0]?.range[1],
                ethnicity_african: formate[0]?.ethnicity === 'african' ? 1 : 0,
                ethnicity_african_am: formate[0]?.ethnicity === 'african_am' ? 1 : 0,
                ethnicity_asian: formate[0]?.ethnicity === 'asian' ? 1 : 0,
                role_categories: [
                    {
                        category_id: getCategoryId.map((item: any) => { return item['id'] }).toString(),
                        // category_id: 3,
                        subcategory_id: [0, 0]
                    }
                ]
            }
            const res = await addJobRoleApi({ token, raw: data });
            changeId(res.role_id, check)
        }
        catch (err) {
            console.log('Error ....', err)
        }
    }
    const changeId = (Id: any, check: any) => {
        // console.log('------check------', check)
        const value = {
            id: role[role.length - 1].id + 1,
            roleId: 0,
            roleModel: activeRole,
            name: '',
            discription: '',
            number: '',
            type: '',
            gender: '',
            ethnicity: '',
            range: [],
            roleFor: [],
            moreRequirements: [],
        }
        const newRole = role.map((r: any) => {
            if (r.id === activeIndex) {
                return {
                    ...r, roleId: Id
                }
            }
            else {
                return {
                    ...r
                }
            }
        })
        if (check === 'add') {
            setRole([...newRole, value])
            onChange([...newRole, value])
        }
        if (check === 'save') {
            setRole([...newRole])
            onChange([...newRole])
            // send RoleId to parent 
            const newId = role.map((r: any) => {
                if (r.id === activeIndex) {
                    return {
                        roleId: Id
                    }
                }
                else {
                    return {
                        roleId: r.roleId
                    }
                }
            })
            roleId(newId.map((item: any) => { return item['roleId'] }))
        } else {

        }
    }
    // Function to remove array object from main array 
    const remove = (id: number) => {
        const newAry = (i: any) => {
            return (i.id != id)
        }
        setRole((s: any) => s.filter(newAry))
        setActiveIndex(0)
    }
    const activeRequiremets = (id: any) => {
        const check = requiremetData.map((i: any) => {
            if (i.id === id) {
                return {
                    ...i, checked: !i.checked
                }
            } else {
                return {
                    ...i
                }
            }
        })
        setRequiremetData(check)
    }
    // Add More 
    const addMore = () => {
        setOpen(true)
        setActiveRole(roleFor[0].label)
        setActiveIndex(1)
    }
    // set active role 
    const AGE_MARKS = {
        3: "<3",
        70: "70 +",
    };
    useEffect(() => {
        if (getData[0]) {
            setRole(getData)
        }
    }, [getData])
    return (
        <MainSection theme={theme}>
            <div className='flex justify-between items-center'>
                <h2>Roles</h2>
                {role.length > 0 && role[0]?.name.length > 1 ? <button className="PrimaryBtn" style={{ margin: '0px' }} onClick={addMore}>Add<FaPlus /></button> : ''}
            </div>
            {role.length > 0 && role[0]?.name.length > 1 ?
                <div>
                    <div className='role_model'>
                        <div className='mt-5 flex gap-4 add_role_item flex-wrap'>
                            {roleFor.map((i: any) => {
                                return (
                                    <div key={i.id} >
                                        <div className={activeRole === i.label ? 'talent_box' : 'talent_box'} >
                                            <img src={i.cdIcon} alt={i.label} />
                                            <h3>{i.label}</h3>
                                            <span>{i.checked ? <GoCheck /> : <HiPlus />} </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    {role?.map((i: any, ix: any) => {
                        return (
                            <>
                                <RolesData data={i} index={i.id} remove={(id: any) => { remove(id) }} open={() => { setOpen(true) }} edit={
                                    (ix: any, role: any) => {
                                        setActiveIndex(ix);
                                        setActiveRole(role)
                                    }} />
                            </>
                        )
                    })}
                </div> :
                <div className='role_box'>
                    <div>
                        <img src='/images/role-boy.png' />
                        <h2>Add roles that you’re looking for.</h2>
                        <p>You need to add atleast one role for this project.</p>
                    </div>
                    <button className='PrimaryBtn' onClick={() => { setOpen(true); onActiveRole('') }}>Add role <FaPlus /></button>
                </div>
            }
            {/* Add Role component code  */}
            <AddRoleSection>
                <ModalAnimated open={open}>
                    <Paper>
                        <div className='text-3xl text-gray-500 absolute top-2 right-2 px-5 py-2 cursor-pointer' onClick={() => setOpen(false)}><AiOutlineClose /></div >
                        <div className='font-semibold mb-1 '>Add roles for</div>
                        <div className='font-bold text-2xl'>Back to the past and future Project</div>
                        <label>This is role for</label>
                        <div className='flex gap-4 add_role_item flex-wrap'>
                            {roleFor.map((i: any) => {
                                return (
                                    <div key={i.id} >
                                        <div className={activeRole === i.label ? 'talent_box select' : 'talent_box'} onClick={() => { onActiveRole(i.label) }}>
                                            <img src={i.cdIcon} alt={i.label} />
                                            <h3>{i.label}</h3>
                                            <span>{i.checked ? <GoCheck /> : <HiPlus />} </span>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                        <div className="flex gap-4 role_item">
                            {
                                role.filter((r: any) => r.roleModel === activeRole)?.map((i: any, ix: any) => {
                                    return (
                                        <button key={ix} onClick={() => { setActiveIndex(i.id) }} className={activeIndex === i.id ? 'active' : ''}>
                                            {ix + 1}
                                        </button>
                                    );

                                })
                            }
                        </div>
                        {role.map((i: any, ix: number) => {
                            if (i.roleModel === activeRole) {
                                return (
                                    <div key={ix} className={activeIndex === i.id ? 'popup_model active' : 'popup_model'}>
                                        <label>Role Name</label>
                                        <input type="text" placeholder="Enter role name" onChange={e => { change(e.target.value, 'name', i.id) }} value={i?.name} />
                                        <label>Role Description</label>
                                        <textarea placeholder="Provide description on this project." onChange={e => { change(e.target.value, 'discription', i.id) }} value={i.discription} />
                                        <div className='md:flex gap-6'>
                                            <div className='w-full'>
                                                <label>Role type</label>
                                                <select onChange={e => { change(e.target.value, 'type', i.id) }} value={role[activeIndex]?.type}>
                                                    <option value="Role type">Role type</option>
                                                    <option value="Role type 1">Role type 1</option>
                                                    <option value="Role type 2">Role type 2</option>
                                                </select>
                                            </div>
                                            <div className='w-full'>
                                                <label>Number of talents needed</label>
                                                <select onChange={e => { change(e.target.value, 'number', i.id) }} value={role[activeIndex]?.number}>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className='w-full'>
                                            <label>Gender</label>
                                            <select onChange={e => { change(e.target.value, 'gender', i.id) }} value={role[activeIndex]?.gender}>
                                                <option value="male">Male</option>
                                                <option value="female">Female</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                        <div className='w-full'>
                                            <label>Ethnicity (Optional)</label>
                                            <select onChange={e => { change(e.target.value, 'ethnicity', i.id) }} value={role[activeIndex]?.ethnicity}>
                                                <option value="all">All</option>
                                                <option value="african">African</option>
                                                <option value="african_am">African Am</option>
                                                <option value="asian">Asian</option>
                                            </select>
                                        </div>
                                        <label>Age Range from<span> {ageRange.length === 0 ? 'Not yet set' : `${ageRange[0]} to ${ageRange[1]} years old`}  </span></label>
                                        <div className='hour_slider'>
                                            <RangeSlider
                                                range
                                                min={3}
                                                max={70}
                                                defaultValue={[3, 45]}
                                                value={ageRange}
                                                label=" "
                                                onChange={(e: any) => {
                                                    setAgeRange(e);
                                                    change(e, 'range', i.id)
                                                    // onChange({ perDayHr: e })
                                                }}
                                                marks={AGE_MARKS}
                                            />
                                        </div>
                                        <button className='font-bold flex items-center my-6 gap-3 add_requirement' onClick={() => setRequiremets(s => !s)}>
                                            <span className='text-2xl'>{requiremets ? <AiFillMinusCircle /> : <BsPlusCircleFill />} </span><span>{requiremets ? 'Hide & remove more requirements' : 'Add more requirements'}     </span>
                                        </button>
                                        {requiremets ?
                                            <>
                                                <div className='my-4 font-semibold'>select requirements to add</div>
                                                <div className='flex gap-4 add_role_item flex-wrap'>
                                                    {requiremetData.map((i: any) => {
                                                        return (
                                                            <div key={i.id} >
                                                                <div className={i.checked ? 'talent_box select' : 'talent_box'} onClick={() => { activeRequiremets(i.id) }}>
                                                                    <span>{i.checked ? <GoCheck /> : <HiPlus />} </span>
                                                                    <div>{i?.name}</div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                                <div className='my-4'><button className='font-semibold py-2 px-6 rounded-lg add_requirement_button' onClick={() => { change(requiremetData, 'moreRequirements', i.id) }}>Add requirements</button></div>
                                            </>
                                            :
                                            null
                                        }
                                        <div className='my-4 font-bold'>Payment information</div>
                                        <div className='flex'>
                                            <div className='hr_line'></div>
                                            <div className='pays_total'>
                                                <div className='my-2'>
                                                    <span className='font-semibold'>Pays:</span> $100.00 to $500.00 (Flat Rate)
                                                </div>
                                                <div className='my-2'>
                                                    <span className='font-semibold'>Total:</span> $100.00 to $500.00 for an estimated 5 hours of work
                                                </div>
                                            </div>
                                        </div>
                                        <button className='edit_button'>
                                            <div><MdEdit /></div>
                                            <div>Edit payment for this role only</div>
                                        </button>
                                    </div>
                                )
                            } {

                            }
                        })}
                        <div className='sm:flex gap-10 my-6 justify-end'>
                            <button className='cancel'>Cancel</button>
                            <button className='save_more' onClick={() => { addObjectToArray('add') }} >Save & add more talents<AiOutlinePlus /></button>
                            <button className='save_button' onClick={() => { saveData('save') }}>Save</button>
                        </div>

                    </Paper>
                </ModalAnimated>
            </AddRoleSection>
            {/* Add Role component code  */}
        </MainSection >
    )
}
type propTypes = {
    getData: any,
    onChange: any,
    roleId: any,

}
const MainSection = styled.section`
    box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
    border-radius: 8px;
    .PrimaryBtn{
            background:${p => p.theme.primary};
            color:${p => p.theme.pure};
            display: flex;
            align-items: center;
            margin: 15px auto;
            gap: 6px;
            padding: 10px 22px;
            border-radius: 6px;
            font-weight: 600;
            transition:all 0.5s;
            &:hover{
                box-shadow: rgb(0 0 0 / 30%) 0px 4px 38px, rgb(0 0 0 / 22%) 0px 8px 12px;
            }
        }
    .role_box > div{
        text-align: center;
        img{
            margin:auto;
            border: 0.333333px solid #ECECEC;
            border-radius: 8px;
            box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
        }
        h2{
            margin: 6px 0px;
        }
        button{
            margin-top:20px;
        }
       
    }
    .content_box{
        background: ${p => rgba(p.theme.base, 0.1)};
        padding: 10px 14px;
        border-radius: 5px;
        margin: 10px 0px;
        .title{
            h3{
                margin-right:auto;
                font-weight: 600;
                font-size: 16px;
            }
            svg {
                font-size: 30px;
            }
        }
        button{
            font-weight: 600;
            font-size: 14px;
            color: ${p => p.theme.primary}
        }
        p{
            font-weight: 400;
            font-size: 14px;
        }
    }
    .popup_model{
        display:none;
    }
    .popup_model.active{
        display:block;
    }
    .talent_box{
    display: flex;
    align-items: center;
    gap: 6px;
    background: #EFEFF0;
    border-radius: 50px;
    padding: 10px 20px;
    cursor: pointer;
    img {
        width: 22px;
    }
    h3{
        font-weight: 600;
    }
}
.talent_box.select{
    background: ${p => p.theme.primary};
    color: ${p => p.theme.pure};
}
`
// Add Role component code
const AddRoleSection = styled.section`
    margin:20px auto;
    padding:20px;
    margin-top: 40px; 

.add_role_item{
      color:${(p) => p.theme.primary};
}
.role_item{
  button{
    border-radius: 50%;
    background-color: ${(p) => rgba(p.theme.base, 0.1)};
    width: 40px;
    height: 40px;
    margin: 12px 0px;
    color: ${(p) => p.theme.base};
    font-weight:600;
  }
  button.active{
    background-color: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.pure};
  }
}
.button-color{
        background-color:${(p) => p.theme.paper};
        display: flex;
        gap: 3px;
        border-radius: 20px;
        padding: 6px 12px;
        align-items: center;

}
img.image_icon{
            width: 20px;
}
.add_requirement{
      color: ${(p) => p.theme.primary};
}
.add_requirement_button{
      background: ${(p) => p.theme.primary};
      color: ${(p) => p.theme.pure};
}
.hr_line{
      width: 3px;
      background-color: #F97316;
}
.pays_total{
      width: 100%;
      background-color: #FFEDD5;
      padding: 10px;
}
.edit_button{ 
        margin: 10px 0px;
        max-height: 40px;
        display: flex;
        gap: 6px;
        align-items: center;
        background-color:${(p) => p.theme.paper};
        padding: 8px 12px;
        border-radius: 5px;
        color: ${(p) => p.theme.primary};
}
.cancel{
    color: ${(p) => p.theme.primary};
}
.save_button{
      margin: 10px 0px;
      background-color:${(p) => p.theme.primary};
      color: ${(p) => p.theme.pure};
      padding: 5px 18px;
      border-radius: 4px;
}
.save_more{
      display: flex;
      margin: 10px 0px;
      gap: 3px;
      align-items: center;
      border:1px solid ${(p) => p.theme.primary};
      color: ${(p) => p.theme.primary};
      padding: 5px 18px;
      border-radius: 4px;

}

/*  */
 /*  */
  hr {
    margin: 30px 0px;
  }
  label{
    font-weight: 700;
    font-size: 14px;
    display:block;
    margin: 10px 0px;
    span{
      font-weight:600;
      color:${p => p.theme.primary};
    }
  }
  input ,textarea , select{
    width: 100%;
    border: 1px solid #A1A1AA;
    padding: 8px;
    border-radius: 4px;
  }
  textarea{
    height:120px;
  }
  .hour_slider .flex.justify-between.items-center.text-sm.text-gray-500 {
      display: none;
  }
 `
const Paper = styled(ModalPaper)`
    width: 800px;
    overflow-y: scroll;
    height: 96vh;
    border-radius: 12px;
    background: ${(p) => p.theme.pure};
    padding: 2rem;
    box-shadow: 0px 0px 15px rgba(9, 42, 81, 0.09), 0px 2px 12px 4px rgba(9, 42, 81, 0.15);
    ::-webkit-scrollbar {
  width: 0px;
}
`;
const Array = [
    {
        id: 1,
        label: 'Acting',
        cdIcon: '/svg/cd/actors.svg',
        checked: false,
    },
    {
        id: 2,
        label: 'Extras',
        cdIcon: '/svg/cd/model.svg',
        checked: false,
    },
    {
        id: 3,
        label: 'Modelling',
        cdIcon: '/svg/cd/music.svg',
        checked: false,
    },
    {
        id: 4,
        label: 'Influencer',
        cdIcon: '/svg/cd/dancer.svg',
        checked: false,
    },
    {
        id: 5,
        label: 'Presenter',
        cdIcon: '/svg/cd/extras.svg',
        checked: false,
    },
    {
        id: 6,
        label: 'Musician',
        cdIcon: '/svg/cd/Influencers.svg',
        checked: false,
    },
    {
        id: 7,
        label: 'Photography',
        cdIcon: '/svg/cd/Crews.svg',
        checked: false,
    },
    {
        id: 8,
        label: 'TV & Reality',
        cdIcon: '/svg/cd/Presenters.svg',
        checked: false,
    },
    {
        id: 9,
        label: 'Dancing',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 10,
        label: 'Film & Stage Crew',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 11,
        label: 'Hair, Makeup, & Styling',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 12,
        label: 'Survival Jobs',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 13,
        label: 'Modeling',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 14,
        label: 'Performing',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 15,
        label: 'Professional',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 16,
        label: 'Support',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 17,
        label: 'Technology',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
    {
        id: 18,
        label: 'Other',
        cdIcon: '/svg/cd/Others.svg',
        checked: false,
    },
]
const RequirementsData = [
    {
        id: 1,
        name: "Height Range",
        checked: true,
    },
    {
        id: 2,
        name: "Body Type",
        checked: false,
    },
    {
        id: 3,
        name: "Hair Color",
        checked: false,
    },
    {
        id: 4,
        name: "Body Type",
        checked: false,
    },
    {
        id: 5,
        name: "Custom",
        checked: false,
    },
]
// Add Role component code




