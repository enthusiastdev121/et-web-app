import React from 'react'
import { TestimonialContent, UesrInfo } from './styles'

export default function Testimonial() {

    return (
        <TestimonialContent className="grid lg:grid-cols-3 gap-4 xl:px-1 px-5">
            <div className='single-testimonial'>
                <div className='testimonial-inner'>
                    <img src="/images/quote 1.png" alt="" className='quote-images' />
                    <p>¡Tantos castings en 4 días! ¡¡¡Guau!!! Estoy tan feliz que solo he estado con Explore Talent alrededor de 4 días y ya he conseguido que los directores de casting se pongan en contacto conmigo...</p>
                </div>
                <div className='avtar-name'>
                    <img src="/images/girl-test.png" alt="" />
                    <h5>Chloe Terry</h5>
                    <h6>Actor</h6>
                </div>
            </div>

            <div className='single-testimonial'>
                <div className='testimonial-inner'>
                    <img src="/images/quote 1.png" alt="" className='quote-images' />
                    <p>¡Tantos castings en 4 días! ¡¡¡Guau!!! Estoy tan feliz que solo he estado con Explore Talent alrededor de 4 días y ya he conseguido que los directores de casting se pongan en contacto conmigo...</p>
                </div>
                <div className='avtar-name'>
                    <img src="/images/girl-test.png" alt="" />
                    <h5>Chloe Terry</h5>
                    <h6>Actor</h6>
                </div>
            </div>

            <div className='single-testimonial'>
                <div className='testimonial-inner'>
                    <img src="/images/quote 1.png" alt="" className='quote-images' />
                    <p>¡Tantos castings en 4 días! ¡¡¡Guau!!! Estoy tan feliz que solo he estado con Explore Talent alrededor de 4 días y ya he conseguido que los directores de casting se pongan en contacto conmigo...</p>
                </div>
                <div className='avtar-name'>
                    <img src="/images/girl-test.png" alt="" />
                    <h5>Chloe Terry</h5>
                    <h6>Actor</h6>
                </div>
            </div>
        </TestimonialContent>
    )
}
