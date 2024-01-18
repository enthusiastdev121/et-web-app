import ModalAnimated, { ModalPaper } from 'components/ModalAnimated';
import React, { useState } from 'react';
import { AiFillMinusCircle, AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import { BsPlusCircleFill } from 'react-icons/bs';
import { GoCheck } from 'react-icons/go';
import { HiPlus } from 'react-icons/hi';
import { MdEdit } from 'react-icons/md';
import styled from 'styled-components'
import { useRouter } from "next/router";
import RangeSlider from 'components/RangeSlider';
import { rgba } from 'polished';
type propType = {
  open: any,
  onClose: any,
  arrayData: any,
  active: number,
}
AddRole.defaultProps = {
  active: 1
}
function AddRole({ open, onClose, arrayData, active }: propType) {
  const [roleFor, setRoleFor] = useState<any>(Array)
  const [requiremetData, setRequiremetData] = useState<any>(RequirementsData)
  const [requiremets, setRequiremets] = useState(false)
  const [ageRange, setAgeRange] = useState([]);
  const [activeIndex, setActiveIndex] = useState(1)

  // state for main aaray 
  const [role, setRole] = useState<any>([
    {
      id: 1,
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
  ]);

  // Function hit on save and add one more talent button 
  const addObjectToArray = () => {
    const value = {
      id: role.length + 1,
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
    if (role[activeIndex - 1]?.name.trim().length > 1) {
      setRole((role: any) => [...role, value])
      setActiveIndex(s => s + 1)
    }
    else {

    }
  }

  // Function hit to update the value of the role array 
  const change = (e: any, val: any) => {
    const neww = role.map((i: any) => {
      if (i.id === activeIndex) {
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
  const saveData = () => {
    arrayData(role)
    onClose()
  }
  const isCheck = (id: any) => {
    const check = roleFor.map((i: any) => {
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
    setRoleFor(check)
    // change(check, 'roleFor')
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

  const AGE_MARKS = {
    3: "<3",

    70: "70 +",
  };
  // console.log('role----------+++', active)

  return (
    <MainContainer>
      <ModalAnimated open={open} onClose={onClose}>
        <Paper>
          <div className='text-3xl text-gray-500 absolute top-2 right-2 px-5 py-2 cursor-pointer' onClick={onClose}><AiOutlineClose /></div >
          <div className='font-semibold mb-1 '>Add roles for</div>
          <div className='font-bold text-2xl'>Back to the past and future Project</div>
          <label>This is role for</label>
          <div className='flex gap-4 add_role_item flex-wrap'>
            {roleFor.map((i: any) => {
              return (
                <div key={i.id} >
                  <div className={i.checked ? 'talent_box select' : 'talent_box'} onClick={() => { isCheck(i.id) }}>
                    <img src={i.logo} alt={i?.name} />
                    <h3>{i.title}</h3>
                    <span>{i.checked ? <GoCheck /> : <HiPlus />} </span>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="flex gap-4 role_item">
            {
              role.map((i: any, ix: any) => {
                return (
                  <button key={ix} onClick={() => { setActiveIndex(i.id) }} className={activeIndex === i.id ? 'active' : ''}>{ix + 1}</button>
                );
              })
            }
          </div>
          <label>Role Name</label>
          <input type="text" placeholder="Enter role name" onChange={e => { change(e.target.value, 'name') }} value={role[activeIndex - 1]?.name} />
          <label>Role Description</label>
          <textarea placeholder="Provide description on this project." onChange={e => { change(e.target.value, 'discription') }} value={role[activeIndex - 1].discription} />
          <div className='md:flex gap-6'>
            <div className='w-full'>
              <label>Role type</label>
              <select onChange={e => { change(e.target.value, 'type') }} value={role[activeIndex - 1].type}>
                <option value="Role type">Role type</option>
                <option value="Role type 1">Role type 1</option>
                <option value="Role type 2">Role type 2</option>
              </select>
            </div>
            <div className='w-full'>
              <label>Number of talents needed</label>
              <select onChange={e => { change(e.target.value, 'number') }} value={role[activeIndex - 1].number}>
                <option value="Number">Number of talents needed</option>
                <option value="Number1">Number of talents needed 1</option>
                <option value="Number2">Number of talents needed2</option>
              </select>
            </div>
          </div>
          <div className='w-full'>
            <label>Gender</label>
            <select onChange={e => { change(e.target.value, 'gender') }} value={role[activeIndex - 1].gender}>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className='w-full'>
            <label>Ethnicity (Optional)</label>
            <select onChange={e => { change(e.target.value, 'ethnicity') }} value={role[activeIndex - 1].ethnicity}>
              <option value="all">All</option>
              <option value="ethnicity1">Ethnicity1</option>
              <option value="ethnicity2">Ethnicity2</option>
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
                change(e, 'range')
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
              <div className='my-4'><button className='font-semibold py-2 px-6 rounded-lg add_requirement_button' onClick={() => { change(requiremetData, 'moreRequirements') }}>Add requirements</button></div>
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

          <div className='sm:flex gap-10 my-6 justify-end'>
            <button className='cancel'>Cancel</button>
            <button className='save_more' onClick={() => { addObjectToArray() }} >Save & add more talents<AiOutlinePlus /></button>
            <button className='save_button' onClick={() => { saveData() }}>Save</button>
          </div>

        </Paper>
      </ModalAnimated>
    </MainContainer>
  )
}

export default AddRole


const MainContainer = styled.section`
    margin:20px auto;
    padding:20px;
    margin-top: 40px; 
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
.add_role_item{
      color:${(p) => p.theme.primary};
}
.role_item{
  button{
    border-radius: 50%;
    background-color: ${(p) => rgba(p.theme.base, 0.1)};
    padding: 6px 14px;
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
    title: 'Actors & performers',
    logo: '/svg/cd/actors.svg',
    checked: false,
  },

  {
    id: 2,
    title: 'Musician',
    logo: '/svg/cd/music.svg',
    checked: false,
  },

  {
    id: 3,
    title: 'Extras',
    logo: '/svg/cd/extras.svg',
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