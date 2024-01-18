import ModalAnimated, { ModalPaper } from 'components/ModalAnimated';
import { ArrowDown2, ArrowLeft, Calendar2, Clock, InfoCircle, Location } from 'iconsax-react';
import { rgba } from 'polished';
import { AiOutlineClose, AiOutlineQuestionCircle } from 'react-icons/ai';
import styled from 'styled-components';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { FiCheck } from 'react-icons/fi';

const animatedComponents = makeAnimated();

function PersonAudition({ open, setPopop }: any) {
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
      ]
    return (
        <ModalAnimated open={open} >
            <Paper>
                <div className='flex  justify-end gap-4'>
                    <button className='text-2xl question_button' ><AiOutlineQuestionCircle /></button>
                    <button className='text-2xl close_button' onClick={() => setPopop(false)}><AiOutlineClose /></button >
                </div>
                <div className="sm:flex gap-16 items-center ">
                    <ArrowLeft size="32" color="#65b5ff" onClick={() => setPopop(false)} />
                    <div className='font-bold  sm:text-2xl '> Create a Schedule for In-Person audition</div>
                </div>


                <div>
                    <div className='input_radio'>
                        <div className='flex items-center gap-2'>
                            <input type="radio" name="agree" value="yes" />
                            <div>Add to existing in-person audition</div>
                        </div>
                        <div className='flex items-center gap-2'><input type="radio" name="agree" value="no" />
                            <div>Add new schedule</div></div>
                    </div>
                    <div className=' title my-6'>SELECT PROJECT</div>
                    <div className='text-sm font-bold'>Select audition project</div>
                    <div className='audition_project'>
                        <div className='w-12 h-12'>
                            <img src='/cdimages/selected.png' alt='loding..' className='h-full w-full' />
                        </div>
                        <div className='font-semibold'>Back to the past and future Project</div>
                    </div>

                    <label className='sm:flex mt-6'><div className='font-bold sm:mt-0 mt-4'>Which&nbsp;Role</div> <div>(Can&nbsp;select&nbsp;multiple)</div></label>
                    <Select  closeMenuOnSelect={false}   components={animatedComponents}  defaultValue={[options[4], options[5]]}   isMulti  options={options}  />

                    <div className='font-bold mt-6'>Type of schedule</div>
                    <div className='flex flex-wrap gap-4 mt-2'>
                        <button className='type_schedule'>Audition schedule <FiCheck/></button>
                        <button className='type_schedule'>Audition schedule</button>
                    </div>

                    <hr className='my-8' />

                    <div className='my-6 title'>SET SCHEDULE</div>
                    <div className=''>Audition date & time</div>

                    <div className='sm:flex items-center gap-10 justify-between'>
                        <div className='w-full '>
                            <div className='w-full my-4'>
                                <label>Date</label>
                                <div className='timezone'>
                                    <div>September 27,2022</div>
                                    <div><Calendar2 size="25" color="#8a8584" /></div>
                                </div>
                            </div>
                            <div className='md:flex items-center gap-10 justify-between'>
                                <div className='w-full my-4'>
                                    <label>Start time</label>
                                    <div className='timezone'>
                                        <div>08:00AM</div>
                                        <div><Clock size="25" color="#8a8584" /></div>
                                    </div>
                                </div>
                                <div className='w-full my-4' >
                                    <label>End time</label>
                                    <div className='timezone'>
                                        <div>05:00 PM</div>
                                        <div><Clock size="25" color="#8a8584" /></div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full my-4'>
                                <label>Time slot duration</label>
                                <Select options={options} />
                            </div>
                        </div>
                        <div className='w-full '>
                            <div className='w-full my-4'>
                                <label>Time zone</label>
                                <div className='timezone'>
                                    <div>USA (GMT-7)</div>
                                    <div><Clock size="24" color="#8a8584" /></div>
                                </div>
                            </div>
                            <div className='md:flex items-center gap-10 justify-between'>
                                <div className='w-full my-4'>
                                    <label>Break start time</label>
                                    <div className='timezone'>
                                        <div>12:00 PM</div>
                                        <div><Clock size="24" color="#8a8584" /></div>
                                    </div>
                                </div>
                                <div className='w-full my-4'>
                                    <label>Break duration</label>
                                    <Select options={options} />
                                </div>
                            </div>
                            <div className='w-full my-4'>
                                <label>Application per time slot</label>
                                <Select options={options} />
                            </div>

                        </div>

                    </div>

                    <div className='notification text-sm'>
                        <InfoCircle size="25" color="#5a8dfc" variant="Bold" />
                        <div className=''><span>15&nbsp;minutes audition spot </span> within&nbsp;a time slot based on your settings</div>
                    </div>


                    <hr className='my-8' />
                    <div className='my-6 title'>APPLICATION PREFERENCE</div>
                    <div className='font-bold mt-6'>How applicants be added to the schedule?</div>
                    <div className='sm:flex gap-4 mt-2 '>
                        <button className='type_schedule'>Automatically add them to time slots</button>
                        <button className='type_schedule'>Manually add them</button>
                    </div>
                    <div className='font-bold mt-6'>How do you want to handle applicant reschedule requests?</div>
                    <button className='application_preference'>Give them options to choose any time slot that is vacant</button>
                    <button className='application_preference'>Manually add them to a vacant time slot and send new request</button>


                    <hr className='my-8' />
                    <div className='my-6 title'>LOCATION DETAILS</div>
                    <label className='font-bold flex mt-6'>Venue name</label>
                    <input type="text" placeholder="15 minutes" className="w-full  border p-2 rounded-md" />


                    <label className='font-bold flex mt-6'>Address 1</label>
                    <input type="text" className="w-full  border p-2 rounded-md" placeholder="165 St. Corner Lot, Upper Left, Downside circular road." />

                    <div className='sm:flex gap-4 my-6
                    
                    
                    
                    '>
                        <div className='w-full'>
                            <label className='font-bold flex '>Country</label>
                            <input type="text" placeholder="United States" className='w-full p-2 rounded-md border' />
                        </div>
                        <div className='w-full'>
                            <label className='font-bold flex '>Postal code</label>
                            <input type="text" placeholder="110065" className='w-full p-2 rounded-md border' />
                        </div>
                    </div>

                    <div className='location'><Location size="20" variant="Bold" />Truckee, California</div>
                    <hr className='my-8' />

                    <div className='flex gap-2'>
                        <div className='title'>SET SCHEDULE NAME</div>
                        <InfoCircle size="25" color="#b8babe" variant="Bold" />
                    </div>
                    <label className='font-bold flex mt-4'>Name of audition schedule</label>
                    <input type="text" className="w-full  border p-2 rounded-md" placeholder="Enter name..." />


                </div>


                <div className='sm:flex justify-end'>
                    <div className='flex gap-10 my-6 justify-end'>
                        <button className='cancel_button'>Cancel</button>
                        <button className='save_button' >Save</button>
                    </div>
                </div>
            </Paper>
        </ModalAnimated>
    )
}

export default PersonAudition
const Paper = styled(ModalPaper)`
    border-radius: 12px;
    background: ${(p) => p.theme.pure};
    padding: 2rem;
    text-align: left;
    width: 850px;
    height: 900px;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        width: 0px;
    }
    @media (max-width:500px){
        height: 800px;
}
.question_button{
        background: unset;
}
    .close_button{
        background: unset;
}
.title{
    font-weight: 700;
    color: ${(p) => rgba(p.theme.base, 0.4)};
}
.input_radio{
    display: flex;
    align-items: center;
    gap: 4rem;
    padding: 16px 10px;
    margin: 40px 0px 20px 0px;
    background: ${(p) => rgba(p.theme.base, 0.04)};
    @media (max-width:500px){
        display: flex;
        flex-direction: column;
        padding: 6px 10px;
        gap:4px;
        align-items: unset;
    }
}

.audition_project{
    display: flex;
    gap: 1rem;
    align-items: center;
    width: 100%;
    border: 1px solid ${(p) => rgba(p.theme.base, 0.04)};
    padding: 10px 8px;
    border-radius: 4px;
    background: ${(p) => rgba(p.theme.base, 0.04)};
}
 
select{
    width: 100%;
    border: 1px solid ${(p) => rgba(p.theme.base, 0.04)};
    padding: 8px;
    border-radius: 4px;
    background: ${(p) => p.theme.pure};

    option{
    background: ${(p) => rgba(p.theme.base, 0.09)};
    padding: 4px 10px;
    border: 1px solid ${(p) => rgba(p.theme.base, 0.04)};
  }
    
}
  
.type_schedule{
    display: flex;
    align-items: center;
    gap: 4px;
    background: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.pure};
    padding: 6px 10px;
    border-radius: 100px;
    margin: 6px 0px;
}

.timezone{
    display: flex;
    border-radius: 6px;
    justify-content: space-between;
    margin: 4px 0px;
    padding: 10px ;
    border: 1px solid ${(p) => rgba(p.theme.base, 0.2)};
}

.notification{
display: flex;
align-items: center;
gap: 4px;
padding: 8px 6px;
border-radius: 100px;
margin: 8px 0px;

background: ${(p) => rgba(p.theme.primary, 0.1)};
@media (max-width:500px){
        display: flex;
        flex-direction: column;
        padding: 8px 10px;
        border-radius: 10px;
    }

}
.application_preference{
    background: ${(p) => p.theme.primary};
    color: ${(p) => p.theme.pure};
    padding: 6px 10px;
    margin: 4px 0px;
    border-radius: 100px;
}

.location{
    color: ${(p) => p.theme.primary};
    display: flex;
    gap: 4px;
}
    .cancel_button{
        color: ${(p) => p.theme.primary};
    background: none;
}
    .save_button{
        margin: 10px 0px;
    background-color:${(p) => p.theme.primary};
    color: ${(p) => p.theme.pure};
    padding: 5px 18px;
    border-radius: 4px;
}

`;

