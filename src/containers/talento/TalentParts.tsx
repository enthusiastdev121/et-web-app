import React from 'react'
import { TalentPartsSection, Heading, UesrInfo } from './styles'

export default function TalentParts() {

    return (
        <div className='xl:px-1 px-5'>
        <Heading>
            <h4>Talento destacado</h4>
        </Heading>
        <TalentPartsSection className="grid lg:grid-cols-4 grid-cols-2 lg:gap-10 gap-4 ">

            

            <img src="/images/young-girl.png" alt="" />
            <img src="/images/dakota-johnson-wallpaper-14 1.png" alt="" />
            <img src="/images/Sara-Carbonero 1.png" alt="" />
            <img src="/images/eugenia-silva-harpersagosto-eugenia-silva-1023398473 1.png" alt="" />

        </TalentPartsSection>
        </div>
    )
}
