import React, { useState } from 'react'
import { VideoSection } from './styles'

export default function VideoIntro() {
    const [showOpenVideo, setShowOpenVideo] = useState(false);

    const openVideo = () => {
        setShowOpenVideo(true)
    }
    return (
        <VideoSection className='xl:px-1 px-5'>
            {!showOpenVideo
                ?
                <div className='relative'>
                    <img src="/images/snoop-dogg-talento-optimised-1080-thumbnail.png" alt="" className='cover-image' />
                    <img src="/images/play-video.png" alt="" className='play-button' onClick={openVideo} />
                    <img src="/images/video-layer.png" alt="" className='layers'/>
                </div>
                :
                <video controls autoPlay>
                    <source src="/video/snoop-dogg-talento-optimised-1080.mp4" type="video/mp4" />
                </video>
            }
            <h5>Algunas palabras de</h5>
            <h3>Snoop Dogg</h3>
            <p>On its launch Morgan claimed that the paper was to be “Britain’s first nationwide newspaper for children”, though this claim was without foundation: other papers directed at young audiences have included The Boy’s Paper ( 18801882 ), The Children’s Paper ( 19191965 ), and Early Times ( launched in the latter 1980s ). Morgan was editorial director initially Stories, answerable for bringing in celebrity participation.</p>
        </VideoSection>
    )
}
