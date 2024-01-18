import React from 'react'
import { SingleInfo, MainInfo, AuditionFeesTable, AuditionFeesTableFilter } from './styles'

export default function AuditionFeesTwo() {
    const [openTab, setOpenTab] = React.useState(1);
    return (
        <MainInfo className="grid lg:grid-cols-2 gap-4 xl:px-1 px-5">
            <AuditionFeesTable>
                <div className='title-fees-table'>
                    <h3>Featured Modeling Jobs</h3>
                    <button>View All</button>
                </div>
                <div style={{overflowX:"auto"}}>
                    <table>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                            <th>Points</th>
                        </tr>
                        <tr>
                            <td>Jill</td>
                            <td>Smith</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                            <td>50</td>
                        </tr>
                        <tr>
                            <td>Eve</td>
                            <td>Jackson</td>
                            <td>94</td>
                            <td>94</td>
                            <td>94</td>
                            <td>94</td>
                            <td>94</td>
                            <td>94</td>
                            <td>94</td>
                            <td>94</td>
                            <td>94</td>
                            <td>94</td>
                        </tr>
                        <tr>
                            <td>Adam</td>
                            <td>Johnson</td>
                            <td>67</td>
                            <td>67</td>
                            <td>67</td>
                            <td>67</td>
                            <td>67</td>
                            <td>67</td>
                            <td>67</td>
                            <td>67</td>
                            <td>67</td>
                            <td>67</td>
                        </tr>
                    </table>
                </div>

            </AuditionFeesTable>
            <AuditionFeesTableFilter className='lg:mt-0 mt-5'>
                <div className="flex flex-wrap">
                    <div className="w-full">
                        <ul
                            className="flex mb-0 list-none flex-wrap  flex-row xl:justify-between tab-rows"
                            role="tablist"
                        >
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
                            <li className="-mb-px mr-2 last:mr-0 flex-auto text-center">
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
