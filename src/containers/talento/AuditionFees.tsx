import React from 'react'
import { SingleInfo, MainInfo, AuditionFeesTable, AuditionFeesTableFilter } from './styles'

export default function AuditionFees() {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <MainInfo className="grid lg:grid-cols-2 gap-4 xl:px-1 px-5">
            <AuditionFeesTable>
                <div className='title-fees-table'>
                    <h3>Audiciones y <span>trabajos destacados</span></h3>
                    <button>Ver todo</button>
                </div>

                <div className='table-fees-scroll'>
                    <table className="fees-table">
                        <thead className='table-fees-header'>
                            <tr className='table-fees-info'>
                                <th className='table-fees-left'>
                                    <div className='table-fees-left-inner'>
                                        <h5>TÍTULO / UBICACIONES</h5>
                                    </div>
                                </th>
                                <th className='table-fees-right'>
                                    <div className='table-fees-right-inner'>
                                        <h5>Velocidad</h5>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody className='table-fees-body'>
                            <tr className='table-fees-info'>
                                <td className='table-fees-left'>
                                    <div className='table-fees-left-inner'>
                                        <h5>Still Casting "Luke's Adventure" , $10</h5>
                                        <h6><span className='mr-2'><img src="/images/pin 1.svg" alt="" /></span>Nationwide</h6>
                                    </div>
                                </td>
                                <td className='table-fees-right'>
                                    <div className='table-fees-right-inner'>
                                        <h5>$10</h5>
                                    </div>
                                </td>
                            </tr>


                            <tr className='table-fees-info'>
                                <td className='table-fees-left'>
                                    <div className='table-fees-left-inner'>
                                        <h5>Still Casting "Luke's Adventure" , $10</h5>
                                        <h6><span className='mr-2'><img src="/images/pin 1.svg" alt="" /></span>Nationwide</h6>
                                    </div>
                                </td>
                                <td className='table-fees-right'>
                                    <div className='table-fees-right-inner'>
                                        <h5>$10</h5>
                                    </div>
                                </td>
                            </tr>


                            <tr className='table-fees-info'>
                                <td className='table-fees-left'>
                                    <div className='table-fees-left-inner'>
                                        <h5>Still Casting "Luke's Adventure" , $10</h5>
                                        <h6><span className='mr-2'><img src="/images/pin 1.svg" alt="" /></span>Nationwide</h6>
                                    </div>
                                </td>
                                <td className='table-fees-right'>
                                    <div className='table-fees-right-inner'>
                                        <h5>$10</h5>
                                    </div>
                                </td>
                            </tr>



                            <tr className='table-fees-info'>
                                <td className='table-fees-left'>
                                    <div className='table-fees-left-inner'>
                                        <h5>Still Casting "Luke's Adventure" , $10</h5>
                                        <h6><span className='mr-2'><img src="/images/pin 1.svg" alt="" /></span>Nationwide</h6>
                                    </div>
                                </td>
                                <td className='table-fees-right'>
                                    <div className='table-fees-right-inner'>
                                        <h5>$10</h5>
                                    </div>
                                </td>
                            </tr>


                            <tr className='table-fees-info'>
                                <td className='table-fees-left'>
                                    <div className='table-fees-left-inner'>
                                        <h5>Still Casting "Luke's Adventure" , $10</h5>
                                        <h6><span className='mr-2'><img src="/images/pin 1.svg" alt="" /></span>Nationwide</h6>
                                    </div>
                                </td>
                                <td className='table-fees-right'>
                                    <div className='table-fees-right-inner'>
                                        <h5>$10</h5>
                                    </div>
                                </td>
                            </tr>




                            <tr className='table-fees-info'>
                                <td className='table-fees-left'>
                                    <div className='table-fees-left-inner'>
                                        <h5>Still Casting "Luke's Adventure" , $10</h5>
                                        <h6><span className='mr-2'><img src="/images/pin 1.svg" alt="" /></span>Nationwide</h6>
                                    </div>
                                </td>
                                <td className='table-fees-right'>
                                    <div className='table-fees-right-inner'>
                                        <h5>$10</h5>
                                    </div>
                                </td>
                            </tr>



                            <tr className='table-fees-info'>
                                <td className='table-fees-left'>
                                    <div className='table-fees-left-inner'>
                                        <h5>Still Casting "Luke's Adventure" , $10</h5>
                                        <h6><span className='mr-2'><img src="/images/pin 1.svg" alt="" /></span>Nationwide</h6>
                                    </div>
                                </td>
                                <td className='table-fees-right'>
                                    <div className='table-fees-right-inner'>
                                        <h5>$10</h5>
                                    </div>
                                </td>
                            </tr>



                            <tr className='table-fees-info'>
                                <td className='table-fees-left'>
                                    <div className='table-fees-left-inner'>
                                        <h5>Still Casting "Luke's Adventure" , $10</h5>
                                        <h6><span className='mr-2'><img src="/images/pin 1.svg" alt="" /></span>Nationwide</h6>
                                    </div>
                                </td>
                                <td className='table-fees-right'>
                                    <div className='table-fees-right-inner'>
                                        <h5>$10</h5>
                                    </div>
                                </td>
                            </tr>



                            <tr className='table-fees-info'>
                                <td className='table-fees-left'>
                                    <div className='table-fees-left-inner'>
                                        <h5>Still Casting "Luke's Adventure" , $10</h5>
                                        <h6><span className='mr-2'><img src="/images/pin 1.svg" alt="" /></span>Nationwide</h6>
                                    </div>
                                </td>
                                <td className='table-fees-right'>
                                    <div className='table-fees-right-inner'>
                                        <h5>$10</h5>
                                    </div>
                                </td>
                            </tr>



                           

                        </tbody>
                    </table>
                </div>
            </AuditionFeesTable>
            <AuditionFeesTableFilter className='lg:mt-0 mt-5'>
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <ul
                            className="flex mb-0 list-none flex-wrap   flex-row xl:justify-between tab-rows"
                            role="tablist"
                        >
                            <li className="-mb-px mr-2 last:mr-0 flex-auto lg:mt-0 mt-2 text-center">
                                <a
                                    className={
                                        "xl:text-md text-sm font-bold uppercase xl:px-5 px-2 py-2 shadow-lg rounded block leading-normal " +
                                        (openTab === 1
                                            ? "text-white bg-danger font" + "-500  border-danger"
                                            : "text-white text-" + "-500 bg-transparent border-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(1);
                                    }}
                                    data-toggle="tab"
                                    href="#link1"
                                    role="tablist"
                                >
                                    Acting
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 lg:mt-0 mt-2 flex-auto text-center">
                                <a
                                    className={
                                        "xl:text-md text-sm font-bold uppercase xl:px-5 px-2 py-2 shadow-lg rounded block leading-normal " +
                                        (openTab === 2
                                            ? "text-white bg-danger font" + "-500  border-danger"
                                            : "text-white text-" + "-500 bg-transparent border-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(2);
                                    }}
                                    data-toggle="tab"
                                    href="#link2"
                                    role="tablist"
                                >
                                    Modeling
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 lg:mt-0 mt-2 flex-auto text-center">
                                <a
                                    className={
                                        "xl:text-md text-sm font-bold uppercase xl:px-5 px-2 py-2 shadow-lg rounded block leading-normal " +
                                        (openTab === 3
                                            ? "text-white bg-danger font" + "-500  border-danger"
                                            : "text-white text-" + "-500 bg-transparent border-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(3);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    Musicians
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 lg:mt-0 mt-2 flex-auto text-center">
                                <a
                                    className={
                                        "xl:text-md text-sm font-bold uppercase xl:px-5 px-2 py-2 shadow-lg rounded block leading-normal " +
                                        (openTab === 4
                                            ? "text-white bg-danger font" + "-500  border-danger"
                                            : "text-white text-" + "-500 bg-transparent border-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(4);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    Dance
                                </a>
                            </li>
                            <li className="-mb-px mr-2 last:mr-0 lg:mt-0 mt-2 flex-auto text-center">
                                <a
                                    className={
                                        "xl:text-md text-sm font-bold uppercase xl:px-5 px-2 py-2 shadow-lg rounded block leading-normal " +
                                        (openTab === 5
                                            ? "text-white bg-danger font" + "-500  border-danger"
                                            : "text-white text-" + "-500 bg-transparent border-white")
                                    }
                                    onClick={e => {
                                        e.preventDefault();
                                        setOpenTab(5);
                                    }}
                                    data-toggle="tab"
                                    href="#link3"
                                    role="tablist"
                                >
                                    Crew
                                </a>
                            </li>
                        </ul>
                        <div className="relative flex flex-col">
                            <div className="flex-auto">
                                <div className="tab-content tab-space">
                                    <div className={openTab === 1 ? "block" : "hidden"} id="link1">
                                        <div className='table-fees-scroll'>
                                            <table className="fees-table">
                                                <thead className='table-fees-header'>
                                                    <tr className='table-fees-info'>
                                                        <th className='table-fees-left'>
                                                            <div className='table-fees-left-inner'>
                                                                <h5>TÍTULO</h5>
                                                            </div>
                                                        </th>
                                                        <th className='table-fees-left-two'>
                                                            <div className='table-fees-left-inner'>
                                                                <h5>LOCALIZACIÓN</h5>
                                                            </div>
                                                        </th>
                                                        <th className='table-fees-right-two'>
                                                            <div className='table-fees-right-inner'>
                                                                <h5>TIPO</h5>
                                                            </div>
                                                        </th>
                                                        <th className='table-fees-right'>
                                                            <div className='table-fees-right-inner'>
                                                                <h5>EXPIRA</h5>
                                                            </div>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className='table-fees-body'>
                                                    <tr className='table-fees-info'>
                                                        <td className='table-fees-left'>
                                                            <div className='table-fees-left-inner'>
                                                                <h5>Still Casting "Luke's Adventure" , $10</h5>
                                                            </div>
                                                        </td>
                                                        <td className='table-fees-left-two'>
                                                            <div className='table-fees-left-inner'>
                                                                <h5>Still Casting "Luke's Adventure" , $10</h5>
                                                            </div>
                                                        </td>
                                                        <td className='table-fees-right-two'>
                                                            <div className='table-fees-right-inner'>
                                                                <h5>$10</h5>
                                                            </div>
                                                        </td>
                                                        <td className='table-fees-right'>
                                                            <div className='table-fees-right-inner'>
                                                                <h5>$10</h5>
                                                            </div>
                                                        </td>
                                                    </tr>







                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </AuditionFeesTableFilter>
        </MainInfo>
    )
}
