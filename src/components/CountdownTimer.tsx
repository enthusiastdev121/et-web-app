import { useCountdown } from "hooks/useCountdown";
import React from "react";
import styled from "styled-components";

const ShowCounter = ({ days, hours, minutes, seconds }: any) => {
  return (
    <Counter className="flex items-start gap-5">
      <DateTimeDisplay value={days} type={"Day"} isDanger={days <= 3} />
      <p className="colon">:</p>
      <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
      <p className="colon">:</p>
      <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
      <p className="colon">:</p>
      <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
    </Counter>
  );
};

const DateTimeDisplay = ({ value, type, isDanger }: any) => {
  return (
    <Root>
      <p>{value}</p>
      <span>{type}</span>
    </Root>
  );
};

const CountdownTimer = ({ targetDate }: any) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  return (
    <ShowCounter
      days={days}
      hours={hours}
      minutes={minutes}
      seconds={seconds}
    />
  );

};

export default CountdownTimer;

const Root = styled.div`
  p {
    font-weight: 700;
    font-size: 60px;
    line-height: 150%;
    text-align: center;
    color: #000000;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 600px) {
        font-size: 52px;
    }
    @media (max-width: 600px) {
        font-size: 24px;
    }
  }

  span {
    font-size: 18px;
    line-height: 150%;
    text-align: center;
    color: #000000;
    text-shadow: 1px 2px 4px rgba(0, 0, 0, 0.1);
  }
`
const Counter = styled.div`
.colon {
  font-weight: 700;
  font-size: 52.3851px;
  line-height: 150%; 
  text-align: center; 
  color: #000000; 
  text-shadow: 0.873085px 1.74617px 3.49234px rgba(0, 0, 0, 0.1);

  @media (max-width: 600px) {
    font-size: 52px;
}
  @media (max-width: 600px) {
    font-size: 24px;
}
}
`
