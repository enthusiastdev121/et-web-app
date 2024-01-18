import Link from 'next/link'
import React from 'react'
import { TalentPartsSection, Heading, UesrInfo, FooterLinkSection } from './styles'

export default function FooterLink() {

    return (
        <>

            <FooterLinkSection className="grid lg:grid-cols-4 md:grid-cols-2 lg:gap-10 gap-4 xl:px-1 px-5">

                <div className='link-section lg:mt-0 mt-2'>
                    <h5>Audiciones y trabajos</h5>
                    <Link href="">
                        Audiciones de actuación</Link>
                        <Link href="">Modelado de audiciones</Link>
                        <Link href=""> Audiciones de baile</Link>
                        <Link href="">Audiciones de música</Link>
                        <Link href="">Audiciones de tripulación</Link>
                        <Link href="">Todas las audiciones/trabajos
                    </Link>
                </div>

                <div className='link-section lg:mt-0 mt-2'>
                    <h5>Vídeos</h5>
                   
                        <Link href="">Testimonios en video</Link>
                        <Link href="">Más videos</Link>
                        <Link href="">Consejos de músicos de hip hop</Link>
                        <Link href="">Taller de actuación</Link>
                        <Link href="">Vídeos de famosos</Link>
                        <Link href="">Vídeos de famosos</Link>

                       
                </div>

                <div className='link-section lg:mt-0 mt-2'>
                    <h5>Encuentra talento</h5>
                   
                        <Link href="">Buscar Modelos y Actores</Link>
                        <Link href="">Buscar músicos</Link>
                        <Link href="">Talentos destacados</Link>
                        <Link href="">Concursantes destacados</Link>
                        <Link href="">Vea quién acaba de unirse a ET</Link>
                        <Link href="">quién está en línea</Link>
                        <Link href="">Fuente de actividad de talento</Link>
                        <Link href="">Todos los talentos</Link>

                       
                </div>


                <div className='link-section lg:mt-0 mt-2'>
                    <h5>Acerca de Explorar Talento</h5>
                   
                        <Link href="">Sobre nosotros</Link>
                        <Link href="">Preguntas más frecuentes</Link>
                        <Link href="">Afiliados/Publicidad</Link>
                        <Link href="">Testimonios</Link>

                    <h5 className='mt-5'>Más sobre Explorar Talento</h5>
                    <Link href="">Artículos</Link>
                    <Link href="">Noticias</Link>
                    <Link href="">Enlaces</Link>
              

                       
                </div>

            </FooterLinkSection>
        </>
    )
}
