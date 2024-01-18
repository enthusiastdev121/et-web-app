import { ToogleContainer } from '@/styles/Btn.styled';
import { H1 } from '@/styles/Typography.styled';
import BackToTop from 'components/BackToTop';
import Advertisement from 'components/UpgradeToPro';
import CommunityBuzz from 'containers/CommunityBuzz';
import SuccessStories from 'containers/SuccessStories';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { ContestItemD } from 'types/contest';
import { Container } from './styles';
import UpcomingCard from './UpcomingCard';

export default function UpcomingContest({ list }: any) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(false)
  }, [list])

  return (
    <Container className="padding-small">
      <BackToTop />
      <main
        className="lg:flex gap-10"
        style={{ maxWidth: "1530px", margin: "0 auto" }}
      >
        <div className="left">
          <div className="flex flex-col md:flex-row justify-between items-center gap-5 title-padding mb-10">
            <H1>Upcoming Contests</H1>
            <h6 className='notify-button flex items-center gap-2'> <span className='notify-text'> Notify me if new contest starts </span>
              <ToogleContainer>
                <label className="switch">
                  <input type="checkbox" className="checkbox" />
                  <span className="toggle-thumb"></span>
                </label>
              </ToogleContainer>
            </h6>
          </div>

          <div>
            {loading &&
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                {[1, 2, 3, 4, 5].map((i) => {
                  return (
                    <div key={i}>
                      <Skeleton
                        style={{
                          height: 370,
                          width: 270,
                          marginRight: 4,
                        }}
                      />

                      <div>
                        <Skeleton
                          style={{
                            height: 20,
                            width: 50,
                            marginBottom: 4,
                          }}
                        />
                      </div>
                      <div>
                        <Skeleton
                          style={{
                            height: 20,
                            width: 270,
                            marginBottom: 4,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            }
            {!loading &&
              <>
                {list.map((i: ContestItemD) => {
                  return <UpcomingCard {...i} key={i.id} />;
                })}
              </>
            }
          </div>
        </div>

        <aside className="right">
          <Advertisement />


          <div className="mb-5">
            <CommunityBuzz />
          </div>
          <div>
            <SuccessStories />
          </div>
        </aside>
      </main>
    </Container>
  )
}
