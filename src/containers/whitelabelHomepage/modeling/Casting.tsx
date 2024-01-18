import React from 'react'
import { CastingSection, TestimonialContent, UesrInfo } from './styles'

export default function Casting() {

    return (
        <CastingSection className="grid lg:grid-cols-2 gap-4 xl:px-1 px-5">
            <div>
            </div>
            <div className='girls-info '>
                <h5>Create a stunning profile on Modeling.net</h5>
                <h6>Design your own portfolio with photos & videos to showcase your talent and catch the eye of casting professionals.</h6>
                <div className='md:flex grid button-box'>
                    <button className='info-btn'>Create your free profile</button>
                    <button className='cancle-btn md:mt-0 mt-4'>See Plan & Pricing</button>
                </div>
            </div>
        </CastingSection>
    )
}
