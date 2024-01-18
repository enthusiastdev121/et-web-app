import Button from 'components/Button';
import Checkbox from 'components/Checkbox'
import Spinner from 'components/Spinner';
import { getMarketsApi } from 'network/apis/jobs';
import React, { useEffect, useState } from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import styled from 'styled-components';





const Li = ({ list, mainArr, onChange, onBack, market1 }: any) => {
    const [activeSub, setActiveSub] = useState([]);
    const [market, setMarket] = useState('');

    if (activeSub.length > 0) {
        return (
            <Li list={activeSub} onBack={() => setActiveSub([])} mainArr={mainArr} onChange={onChange} market1={market} />
        )
    } else {
        return (
            <div>


                {onBack &&
                    <div className='flex items-center mb-2 px-4' >
                        <div onClick={() => {
                            if (onBack) {
                                onBack()
                            }
                        }} className='aspect-square cursor-pointer rounded-full flex items-center justify-center bg-gray-200 mr-3' style={{ height: 32 }} ><HiOutlineChevronLeft />

                        </div>

                        <div className='flex items-center font-semibold' >
                            {market || market1}
                        </div>


                    </div>
                }
                <div>
                    {list.map(i => {
                        return (
                            <div className='flex items-center gap-2 px-4 py-2 hover:bg-gray-100 cursor-pointer' key={i.id} >
                                <Checkbox size={26} checked={mainArr.includes(i.id)} onChange={() => onChange(i.id)} />
                                <div className='flex justify-between flex-1' onClick={() => {
                                    setActiveSub(i.child);
                                    setMarket(i?.name);
                                }}>
                                    {i?.name}
                                    {i.child?.length > 0 &&
                                        <HiOutlineChevronRight />}
                                </div>

                            </div>
                        )

                    })}
                </div>



            </div>
        )
    }

}


export default function MarketSelectPopup({ initialList, onApply }: any) {

    const [ll, setLl] = useState<any>([])
    const [mainArr, setMainArr] = useState(initialList.length > 0 ? initialList : []);
    const [loading, setLoading] = useState(false);


    const fomatNode = (i: any) => {

        return {
            name: i.market,
            id: i.market_id,
            parentId: i.parent_id,
            child: i.child.length > 0 ? i.child.map(i2 => fomatNode(i2)) : [],
        }

    }


    useEffect(() => {
        const ff = async () => {
            try {

                setLoading(true);
                const res = await getMarketsApi({});
                setLl(res.data.map(i => fomatNode(i)))
                setLoading(false);
            }
            catch (err) {
                setLoading(false);
                console.log("ERR", err);
            }
        }
        ff();

    }, []);



    return (
        <Root className='flex flex-col shadow-md sm:w-[420px] w-[320px] rounded-md'>

            <Header className='flex px-4 py-2 items-center justify-between'>
                <div className='font-semibold'>

                    Choose Location
                </div>
                <div className='flex gap-2 ml-6' >
                    <Button size='small' className='' onClick={() => { onApply([]) }} >
                        Clear
                    </Button>
                    <Button size='small' primary className='' onClick={() => { onApply(mainArr) }}>
                        Apply
                    </Button>
                </div>
            </Header>

            {loading && <div className='py-5 justify-center flex items-center' ><div className='flex flex-col items-center gap-3' ><div className='opacity-50' >Loading Markets...</div> <Spinner primary /></div> </div>}

            <div className='overflow-auto flex-1' >


                <Li list={ll} mainArr={mainArr} onChange={id => {
                    setMainArr(s => s.includes(id) ? s.filter(i2 => i2 !== id) : [...s, id])
                }} />
            </div>
        </Root>
    )
}


const Root = styled.div`
max-height: 400px;
background: ${p => p.theme.paper};
`;
const Header = styled.div``;



