import Link from "next/link";
import styled from "styled-components";

export default function CelebAdvice({ name, videos, mainPhotos, about, quotes, photos, otherCelebs }: Props) {
    return <Root className="padding-small">
        <h1>Exclusive Celebrity Interviews & Advice</h1>

        <div>
            <h2 className="text-2xl font-bold my-5">{name}</h2>

            {/* media */}
            <div className="flex flex-col sm:flex-row gap-5 mb-10">
                {
                    videos.map((i: any) => (
                        <div key={i.id}>
                            <ReviewCard name={i?.name}
                                uri={i.uri} />
                        </div>
                    ))
                }
                {
                    mainPhotos.map((i: any, index: number) => (
                        <div key={index}>
                            <img src={i} alt={name} />
                        </div>
                    ))
                }
            </div>

            {/* about and quotes */}
            <div className="flex flex-col lg:flex-row gap-10">
                <div>
                    <h2 className="text-xl font-bold mb-2">About {name}</h2>
                    <div>{about.map((i: any, index: number) => (
                        <p key={index} className="mb-3" style={{ fontSize: 15 }}>{i}</p>
                    ))}</div>
                </div>
                <div>
                    <h2 className="text-xl font-bold mb-2">A few words from {name}</h2>
                    <div>{quotes.map((i: any, index: number) => (
                        <p key={index} className="mb-3" style={{ fontSize: 15 }}>{i}</p>
                    ))}</div>
                </div>
            </div>

            {/* photos */}
            <div className="my-10 ">
                <h2 className="text-xl font-bold mb-2">Photos</h2>
                <div className="flex gap-5 flex-wrap">
                    {
                        photos.map((i: any, index: number) => (
                            <div key={index}>
                                <img src={i} alt={name} className="photos" />
                            </div>
                        ))
                    }
                </div>
            </div>

            {/* other celebs */}
            <div className="my-10 ">
                <h2 className="text-xl font-bold mb-2">Other Celebrities</h2>
                <div className="flex gap-5">
                    {
                        otherCelebs.map((celeb: any, index: number) => (
                            <div key={index}>
                                <Link href={celeb.link}>
                                    <a className="txt-link hover:text-blue-600 ease-in duration-200">{celeb.title}</a>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </Root>
}

const ReviewCard = ({
    uri,
}: any) => {

    return (
        <Card>
            <div className="video-container">
                <iframe className='video'
                    title='Youtube player'
                    sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
                    src={`https://youtube.com/embed/${uri}?autoplay=0`}>
                </iframe>
            </div>

        </Card>
    );
};


// Styles
const Root = styled.div`
 @media (max-width: 500px) {
    padding: 0 20px !important;
 }

 .photos {
     width: 124px;
     height: 170px;
     object-fit: cover;
     object-position: top;
 }
`

const Card = styled.div`
  background: #ffffff;
  box-shadow: 0px -3px 15px rgba(0, 0, 0, 0.1), 0px 4px 4px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
  max-width: 530px;
  position: relative;
  font-size: 15px;

  img {
    border-radius: 100%;
    object-fit: cover;
    object-position: top;
    height: 49px;
    width: 49px;
  }

  h3 {
    font-weight: 700;
    font-size: 16px;
    line-height: 100%;
    color: #414042;
  }

  .stars-container {
    .star {
      color: #c5c5c5;
    }
    .star-filled {
      color: #ffb543;
    }
    font-size: 20px;
  }

  .video-container {
    
    background-color: #000;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
  }

  .video {
    height: 250px;
    max-width: 480px;
    width: 100%;
  }

  .play {
    color: #fff;
    font-size: 50px;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .thumbnail-bg {
      height: 100%;
      min-width: 300px;
      background-color: #000;
  }

  .thumbnail {
    width: fit-content;
    height: 100%;
    border-radius: 0;
  }
`;

// Types
type Props = {
    name: string;
    videos: any;
    mainPhotos: any;
    about: any;
    quotes: any;
    photos: any;
    otherCelebs: any;
}
