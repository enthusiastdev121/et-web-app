import React from 'react'
import { TalentPartsSection, Heading, UesrInfo } from './styles'

export default function TalentParts() {

    return (
        <div className='xl:px-1 px-5'>
        <Heading>
            <h4>Featured Talent</h4>
        </Heading>
        <TalentPartsSection className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2  gap-4 ">

            
            <div className='relative modal-with-image'>
                <img src="/images/feature-1.png" alt="" />
                
            </div>


            <div className='relative modal-with-image'>
                <img src="/images/feature-2.png" alt="" />
                
            </div>


            <div className='relative modal-with-image'>
                <img src="/images/feature-3.png" alt="" />
              
            </div>


            <div className='relative modal-with-image'>
                <img src="/images/feature-4.png" alt="" />
               
            </div>


            <div className='relative modal-with-image'>
                <img src="/images/feature-5.png" alt="" />
               
            </div>
           


        </TalentPartsSection>
        </div>
    )
}
