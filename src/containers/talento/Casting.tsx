import React from 'react'
import { CastingSection, TestimonialContent, UesrInfo } from './styles'

export default function Casting() {

    return (
        <CastingSection className="grid lg:grid-cols-2 gap-4 xl:px-1 px-5">
            <div>
            </div>
            <div className='girls-info '>
                <h5>Crea un perfil impresionante en Explore Talent</h5>
                <h6>Diseñe su propio portafolio con fotos y videos para mostrar su talento y llamar la atención de los profesionales del casting.</h6>
                <div className='md:flex grid button-box'>
                    <button className='info-btn'>Crea tu perfil gratis</button>
                    <button className='cancle-btn md:mt-0 mt-4'>Ver plan y precios</button>
                </div>
            </div>
        </CastingSection>
    )
}
