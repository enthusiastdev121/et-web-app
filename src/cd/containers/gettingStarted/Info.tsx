import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import ReactFlagsSelect from 'react-flags-select'
import Router from 'next/router'
import { RiArrowDropDownLine } from 'react-icons/ri'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import Link from 'next/link'
import { btnBackButton, btnNextActive, btnNextDisable } from './styled'


type propType = {
  auth:any
}

export default function Info( {auth}:propType) {
  
  const [btnDisable, setBtnDisable] = useState(false)
  const theme = useTheme()
  const [countryCode, setCountryCode] = useState("");
  console.log(countryCode,'looojndjksdwdn')

  const [formData,setFormData] = useState <any>({
    companyName:'',
    companyWebsite:'',
    role:'',
    country:'',
    postelCode:''
  })
  const handelCompanyName=(e:any)=>{
    setFormData({...formData, companyName: e.target.value })
  }
  const handelcompanyWebsite=(e:any)=>{
    setFormData({...formData, companyWebsite: e.target.value })
  }
  const handelRole=(e:any)=>{
    setFormData({...formData, role: e.target.value })
  }
  const handelPostelCode=(e:any)=>{
    setFormData({...formData, postelCode: e.target.value })
  }

console.log(formData,'mmmmm')

  //   useEffect(() => {
  //     if (talents.every(i => i.checked === false) === false) {
  //         setBtnDisable(false)
  //     } else {
  //         setBtnDisable(true)
  //     }
  // }, [talents])


  return (
      <FormBox theme={theme}>
        <div className='form '>
          <h4 className='mb-6'>Enter Your information</h4>

          <label>Company Name<span>*</span></label>
          <input type='text' placeholder='E.g ExploreTalent' onChange={handelCompanyName} />

          <label className='mt-6'>Company Website</label>
          <input type='text' placeholder='E.g www.company.com'  onChange={handelcompanyWebsite}/>

          <label className='mt-6'>Your job Role in the company</label>
          <Select  onChange={handelRole}>
            <option>Admin</option>
            <option>SuperAdmin</option>
            <option>Developer</option>
            <option>Developer</option>
            
          </Select>
          

          <div className='number_input'>
            <label className='mt-6'>Your contact number</label>
            <input type='number' placeholder='000 000 0000' />
          </div>

          <div className='sm:flex justify-between gap-6 '>
            <div className='w-full'>
              <label className='mt-6'>Country</label>
              <CountryPik >
                <ReactFlagsSelect
                  searchable={true}
                  selected={formData.country}
                  onSelect={(code) =>  setFormData((s:any )=> ({...s, country:code}))}
                />
                
              </CountryPik>
            </div>
            <div className='w-full'>
              <label className='mt-6'>Postal&nbsp;Code</label>
              <input type="text" placeholder="Exp.. 110065 " onChange={handelPostelCode} />
            </div>
          </div>
        </div>

        <div className='buttons flex items-center justify-between mt-5'>
          <Link href={'/cd/getting-started?keyword=organization'}>
            <a><button className={`${btnBackButton}`} ><HiOutlineArrowNarrowLeft/>Back</button></a>
          </Link>

          <Link href={'/cd/getting-started?keyword=review'}>
            <a><button onClick={()=>{auth(formData,countryCode)}}  className={btnDisable ? `${btnNextDisable}` : `${btnNextActive}`}  disabled={btnDisable}>Next <HiOutlineArrowNarrowRight /></button></a>
          </Link>
          
        </div>
      </FormBox>
  )
}
const Select = styled.select`
  margin-top: 1rem ;
  color: rgba(60, 60, 67, 0.6);
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
  border-radius: 4px;
  padding: 0.5em;
  width: 100%;
  display: block;
  filter: grayscale(1);
`;
const FormBox = styled.section`
    max-width: 800px;
    margin: auto;
    padding: 20px;
    margin-top: 40px;
  .ReactFlagsSelect  {
    background-color: #fff !important;
  }
  .form{
    label {
      font-weight: 700;
      font-size: 20px;
      display: block;
    }
    h4{
      font-size: 32px;
      font-weight:bold;
    }
    
    input {
      margin-top: 20px;
      width: 100%;
      padding: 6px 0px;
      border-bottom: 1px solid #A1A1AA;
      font-weight: 500;
      font-size: 18px;
    }
    select {
      border-bottom: 1px solid #A1A1AA;
      border-radius: 0px;
    }
    .number_input {
        width: fit-content;
    }
    input::placeholder {
      color: #A1A1AA;
      font-weight: 500;
      font-size: 18px;
    }
    button {
      padding: 10px 26px;
      background: ${(p) => p.theme.primary};
      color: ${(p) => p.theme.pure};
      margin-top: 30px;
      border-radius: 6px;
      font-weight: 600;
      font-size: 16px;
    }
    p{
      margin: 20px 0px;
    }
  }
  .buttons{
        button{
            background:#3C3C4399;
            border-radius: 4px;
            gap: 6px;
            color: ${p => p.theme.pure};
            padding: 10px 20px; 
            transition :all 0.5s;
            svg{
                font-size: 22px;
            }
        }
        button:hover {
            box-shadow: rgb(0 0 0 / 54%) 0px 4px 13px;
        }
        button.next{
            background: ${p => p.theme.primary};
        }
        button.disable{
            opacity: 0.6;
            cursor: no-drop;
        }
        button.disable:hover {
            box-shadow: none;
        }
        
    }
`

const CountryPik = styled.div`
  & #rfs-btn{
    background:${(p) => p.theme.pure};
    color:#c5c5cc;
  }
  & #rfs-btn{
    border-width: 0px 0px 1px 0px ;
    border-radius: 0px ;
    border-color: #A1A1AA;
    margin-top: 7px;
    color: #a3a3a3;
    font-family: inherit;
    font-weight: 500;
    font-size: 18px;
  }
`

