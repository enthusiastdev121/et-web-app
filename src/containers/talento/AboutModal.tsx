import React from 'react'
import { UesrInfo } from './styles'

export default function AboutModal() {

    return (
        <UesrInfo className="grid lg:grid-cols-2 gap-4 xl:px-1 px-5">
            <div className='user-image'>
                <img src="/images/wallpapersden 1.png" alt=""  className='wallpaper' />
                <img src="/images/wallpaper-border.png" alt="" className='wallpaper-border'/>
            </div>
            <div className='user-info'>
                <h5>Historias de éxito de los clientes de ExploreTalent</h5>
                <h6>Diamonde Helper has appeared on Reality & Network TV shows</h6>
                <p>Diamonde Helper habla con Explore Talent. Diamonde fue descubierta para A Shot At Love con Tila Tequila al ser miembro de Explore Talent. Diamonde es una verdadera historia de "éxito de la noche a la mañana".</p>
                <button>Lee mas</button>
            </div>
        </UesrInfo>
    )
}
