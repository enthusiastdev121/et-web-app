import { countryRegion } from '@/utils/constants/country-region';
import Button from 'components/Button';
import Checkbox from 'components/Checkbox';
import { rgba } from 'polished';
import React, { useState } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import styled from 'styled-components';
import Popup from 'reactjs-popup';



export default function CountryRegionSelect({ onApply, initialList }: any) {
    const [subIndex, setSubIndex] = useState(-1);
    const [list, setList] = useState(initialList.length > 0 ? initialList : countryRegion);
    const [search, setSearch] = useState('');



    const onAp = () => {

        onApply(list)

    }


    return (
        <Root className=' shadow-md sm:w-[420px] w-[320px]'>
            <Paper className='py-2 flex flex-col' >


                <Header className=' px-4' >

                    <div className='flex justify-between items-center' >


                        <div className='flex items-center'>

                            {subIndex !== -1 && <div onClick={() => setSubIndex(-1)} className='aspect-square cursor-pointer rounded-full flex items-center justify-center bg-gray-200 mr-3' style={{ height: 38 }} ><HiOutlineChevronLeft /></div>}

                            <div className='font-semibold' >{subIndex === -1 ? 'Countries' : countryRegion[subIndex].label}</div>

                        </div>
                        {subIndex === -1 ?

                            <div className='flex gap-2 ml-6' >
                                <Button size='small' className='' onClick={() => onApply([])} >
                                    Clear
                                </Button>
                                <Button size='small' primary className='' onClick={onAp}>
                                    Apply
                                </Button>
                            </div>
                            : <div></div>}

                    </div>


                    <input value={search} onChange={e => setSearch(e.target.value)} css={`background:${p => rgba(p.theme.base, 0.09)}`} className='rounded-full w-full mt-2 px-3 py-1' placeholder='Search' />

                </Header>
                <List className=' py-2'>


                    <div className=''>

                        {subIndex === -1 ?

                            list.map((i, ind) => {

                                console.log("PP", i.label)

                                if (!i.label?.toLowerCase().includes(search.toLocaleLowerCase())) {
                                    return <></>
                                }

                                return (
                                    <Item className='py-2 px-4 gap-2 flex items-center' key={i.label} >
                                        <div className='gap-2 flex items-center'>


                                            <Checkbox size={28} checked={i.checked} onChange={() => {

                                                setList(s => {

                                                    return s.map(i2 => {
                                                        if (

                                                            i2.value === i.value
                                                        ) {
                                                            return { ...i2, checked: !i2.checked, children: i2.children.map(i3 => ({ ...i3, checked: !i2.checked })) }

                                                        }
                                                        else {
                                                            return i2
                                                        }
                                                    })

                                                })

                                            }} />


                                        </div>
                                        <div className='flex flex-1 justify-between' onClick={() => setSubIndex(ind)} >
                                            {i.label}
                                            <HiOutlineChevronRight />
                                        </div>
                                    </Item>
                                )

                            }) :
                            list[subIndex].children.map(i => {
                                return (
                                    <Item className='py-2 px-4 gap-2 flex items-center justify-between' key={i.label} >
                                        <div className='gap-2 flex items-center'>


                                            <Checkbox size={28} checked={i.checked} onChange={() => {
                                                setList(s => {
                                                    const nnList = [...s];
                                                    const nnItem = nnList[subIndex];
                                                    return s.map(i2 => {

                                                        if (i2.value === nnItem.value) {

                                                            const nnChild = i2.children.map(i3 => {

                                                                if (i3.value === i.value) {

                                                                    return {
                                                                        ...i3,
                                                                        checked: !i3.checked
                                                                    }
                                                                }
                                                                else {
                                                                    return i3
                                                                }
                                                            })

                                                            return {
                                                                ...i2,
                                                                children: nnChild,
                                                                checked: nnChild.some(i => i.checked),

                                                            }

                                                        } else {
                                                            return i2;
                                                        }

                                                    })



                                                })
                                            }} />
                                            {i.label}
                                        </div>
                                        <div>
                                            <HiOutlineChevronRight />
                                        </div>
                                    </Item>
                                )

                            })}

                    </div>
                </List>


            </Paper>



        </Root>
    )
}

const Root = styled.div`
/* top:100%;
left:0; */

z-index: 20;
border-radius: 12px;
overflow: hidden;
`;
const Header = styled.div`
padding-bottom: 4px;
`;
const Paper = styled.div`
background-color:${p => p.theme.paper};
max-height: 320px;

`;
const List = styled.div`
overflow: auto;
flex:1;
`;
const Item = styled.div`
cursor: pointer;
&:hover{
    background: ${p => rgba(p.theme.base, 0.12)};
}
`;
