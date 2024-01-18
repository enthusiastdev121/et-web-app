import Link from 'next/link'
import React from 'react'
import { TalentPartsSection, Heading, UesrInfo, FooterLinkSection, FooterLinkExtra } from './styles'

export default function ExtraFooter() {

    return (
        <>

            <FooterLinkExtra className='xl:px-1 px-5'>

                <div className='grid md:grid-cols-2 gap-10'>
                    <div>
                        <h5>Encuentra audiciones de actuación por ciudad:</h5>
                        <h6>Audiciones de actuación en Nueva York, Audiciones de actuación Los Ángeles,
                            Audiciones de actuación en Chicago, Audiciones de actuación en Atlanta,
                            Audiciones de actuación en Miami</h6>
                    </div>
                    <div>
                        <h5>Encuentra trabajos de Modelaje por ciudad:</h5>
                        <h6>Trabajos de modelo en Nueva York, Trabajos de modelo en Los Ángeles,
                            Trabajos de modelo en Chicago, Trabajos de modelo en Atlanta</h6>
                    </div>
                </div>

                <div className='info-footer'>
                    <p>
                        Talento.com no es una agencia de empleo ni una agencia de modelos. No garantizamos empleo, trabajos o reservas. Explore Talent solo proporciona exposición en Internet, recursos y herramientas para que pueda combinar su talento con audiciones y directores de casting. Si tiene alguna pregunta, comuníquese con nuestro departamento de Servicio al Cliente al (702) 553-2700. Aquí está nuestro Acuerdo de usuario, Política de privacidad y Política de privacidad para niños.
                    </p>
                    <p>
                        ExploreTalent.com es el líder mundial en audiciones de modelado actoral. Estamos ofreciendo miles de llamadas de casting y audiciones. Obtenga más recursos de casting, audiciones y agentes de talentos que todos los demás sitios combinados. ¿Pasa horas y no encuentra los trabajos de actuación y trabajo de modelo que necesita? Encuentra Reality TV Shows Casting Llama a las audiciones de modelaje Audiciones de actuación, trabajos de modelaje, trabajos de actuación, todo en un solo lugar. Deja de pasar horas buscando casting y audiciones. Preséntate a castings, audiciones: recibe una llamada cuando los directores de casting te quieran.
                    </p>
                </div>

                <div className='extra-footer-link'>
                    <Link href="">Acerca de Talento.com</Link>
                    <Link href="">Recorrido   </Link>
                    <Link href="">Casa   </Link>
                    <Link href="">Política de privacidad </Link>
                    <Link href="">Audiciones de actuación</Link>
                    <Link href=""> Términos de Uso</Link>
                    <Link href="">Artículos   </Link>
                    <Link href="">Comunidad</Link>
                    <Link href="">Conviértase</Link>
                    <Link href=""> Contacta con nosotros </Link>
                    <Link href=""> Descargo </Link>
                    <Link href="">DMCA</Link>
                    <Link href="">Uso justo</Link>
                    <Link href="">Mapa del sitio</Link>

                    <div className='footer-credits'>
                        <Link href="#">
                            <img src="/images/talento-images/talento-logo-2.png" alt="" className='logo'/>
                        </Link>
                        <p>© Talento.com</p>
                        <Link href="#">
                            <img src="/images/secure-logo.svg" alt="" className='secure-logo'/>
                        </Link>
                    </div>
                </div>





            </FooterLinkExtra>
        </>
    )
}
