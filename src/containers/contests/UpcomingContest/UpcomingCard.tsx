
import { differenceInHours, format } from 'date-fns';
import React, { useEffect, useState } from 'react'
import Skeleton from 'react-loading-skeleton';
import { ContestItemD } from 'types/contest';
import { Card } from './styles';

export default function UpcomingCard(props: ContestItemD) {
  const { name, id, desc, pic, endTime, createdAt, rules } = props;
  const [localEnd, setLocalEnd] = useState(new Date());
  const [isActive, setIsActive] = useState(true);


  useEffect(() => {
    let int: any;
    if (differenceInHours(new Date(endTime * 1000), new Date()) < 0) {
      setIsActive(false);
    }

    int = setInterval(() => {
      setLocalEnd(new Date());
    }, 1000);

    return () => {
      if (int) {
        clearInterval(int);
      }
    };
  }, [localEnd]);

  return (

    <Card>
      <div className='inner-card mt-5 lg:mb-0 mb-5'>
        <div className='cover-image'>
          <img src={pic || ""} alt="" />
        </div>
        <div className='px-5 xl:w-5/5 about-contest'>
          <h4>{name}</h4>
          <p>{desc}</p>
          <h6><span>Opening in:</span>&nbsp;&nbsp;
            {Math.round(differenceInHours(new Date(endTime * 1000), new Date()) / 60)}d &nbsp;
            {(differenceInHours(new Date(endTime * 1000), new Date())) - (Math.round(differenceInHours(new Date(endTime * 1000), new Date()) / 60) * 60)}h &nbsp;
            {60 - format(localEnd, "mm")}m &nbsp;
            {60 - format(localEnd, "ss")}s </h6>
          <button><img src="/images/notify.png" alt="" />Notify me when it starts</button>
        </div>
      </div>
    </Card>


  )
}
