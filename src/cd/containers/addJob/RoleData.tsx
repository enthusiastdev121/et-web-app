import React, { useState } from 'react'
import { BiChevronDown } from 'react-icons/bi'
export default function RolesData({ data, remove, index, open, edit, }: propType) {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div>
            {data?.name.trim().length > 0 ?
                <div className='content_box' key={data.id}>
                    <div className='title flex justify-end items-center gap-2'>
                        <h3>{data?.name}</h3>
                        <button onClick={() => { remove(data.id) }}>Remove</button>
                        <button onClick={() => { open(true); edit(index, data.roleModel) }}>Edit</button>
                        <button onClick={() => { setIsOpen(s => !s) }}><BiChevronDown /></button>
                    </div>
                    <div className={isOpen ? 'open' : 'close'}>
                        {isOpen ?
                            <>
                                <p><span><b>Description:</b></span> {data.discription}<button>more...</button></p>
                                <p><span><b>Role type :</b></span> {data.type}</p>
                                <p><span><b>Gender : </b></span> {data.gender}</p>
                                <p><span><b>Ethnicity : </b></span> {data.ethnicity}</p>
                                <p><span><b>Age Range : </b></span>{`${data.range[0]} to ${data.range[1]} years old`}</p>
                            </> : null
                        }

                    </div>
                </div> : ''
            }



        </div>
    )
}
type propType = {
    data: any,
    remove: any,
    index: number,
    open: any,
    edit: any,

}