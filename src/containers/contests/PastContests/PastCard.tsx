
import { useRouter } from 'next/router';
import React from 'react'
import { ContestItemD, ContestItemDPast } from 'types/contest';
import { Card } from './styles';

export default function PastCard(props: ContestItemDPast) {
  const { name, id, desc, pic, endTime, createdAt, rules, contest_media } = props;
  const route = useRouter()

  const goToWinnerPage = (contest_id: number) => {
    route.push("/contests/past-winner/" + contest_id)
  }

  return (

    <Card>
      <div className='inner-card mt-5 lg:mb-0 mb-5'>
        <div className='cover-image'>
          <img src={pic || ""} alt="" />
        </div>
        <div className='px-5 xl:w-5/5 about-contest'>
          <h4>{name}</h4>
          <p>{desc}</p>
          <div className='xl:flex grid justify-between'>
            <div>

              <h6 className='flex items-center text-red-500'><span><img src="/images/Clock.png" alt="clock" /></span>&nbsp;&nbsp;This contest has Ended</h6>
              {
                contest_media.length > 0 &&
                <>
                  <button onClick={() => { goToWinnerPage(id) }}>View contest result</button>
                </>
              }
            </div>

            <div className='winner-list'>

              {
                contest_media &&
                contest_media?.slice(0, 3).map((item: any, index: number) => (

                  <>
                    {index == 0 &&
                      <div className='first-winner'>
                        <div className="relative w-fit">
                          <img src="/images/Crown2.png" alt="crown" className='crown-image' />
                          <img src={item.bam_talentci.profile_picture_path} alt="" className='user-image' />
                          <h6>1</h6>
                        </div>
                        <a href={`/${item.bam_talentci.talentlogin}`}>
                          <p>{item.bam_talentci.fname} {item.bam_talentci.lname !== null && " " + item.bam_talentci.lname}</p>
                        </a>
                      </div>

                    }
                    {index == 1 &&
                      <div className='second-winner'>
                        <a href={`/${item.bam_talentci.talentlogin}`}>
                          <img src={item.bam_talentci.profile_picture_path} alt="" className='user-image' />
                        </a>
                        <h6>2</h6>
                        <p>{item.bam_talentci.fname} {item.bam_talentci.lname !== null && " " + item.bam_talentci.lname}</p>
                      </div>
                    }
                    {index == 2 &&
                      <div className='third-winner'>

                        <img src={item.bam_talentci.profile_picture_path} alt="" className='user-image' />
                        <h6>3</h6>
                        <p>{item.bam_talentci.fname} {item.bam_talentci.lname !== null && " " + item.bam_talentci.lname}</p>
                      </div>
                    }


                  </>

                ))
              }


            </div>
          </div>
        </div>
      </div>
    </Card>



  )
}
