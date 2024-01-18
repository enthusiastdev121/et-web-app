
import { useEffect, useState } from "react";
import styled from "styled-components"
import { CoundownD } from "types/subscription";

export default function CountdownSale() {
    const [countdown, setCountdown] = useState([{ label: 'days', value: 0 }, { label: 'hours', value: 0 }, { label: 'minutes', value: 0 }, { label: 'seconds', value: 0 }] as CoundownD[]);
    useEffect(() => {
        // Set the sale end time (in this example, 24 hours from now)
        const saleEndTime = new Date().getTime() + 43200000;
        // Update the countdown every second
        const interval = setInterval(() => {
            // Get the current time
            const currentTime = new Date().getTime();
            // Calculate the remaining time
            const remainingTime = saleEndTime - currentTime;
            // Calculate the hours, minutes, and seconds
            const days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
            const hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);

            // Update the countdown state
            setCountdown([{ label: 'days', value: days }, { label: 'hours', value: hours }, { label: 'minutes', value: minutes }, { label: 'seconds', value: seconds }]);
        }, 1000);

        // Clear the interval when the component unmounts
        return () => clearInterval(interval);
    }, []);


    return (
        <Root className="text-white py-3 text-center">
            <span className="pr-4"><strong className="uppercase text-xl">Sale</strong> ends in:</span>
            {countdown.map((i: CoundownD, index: number) => {
                return (
                    <div key={index} className="inline-block items-end">
                        <span className={`${index > 0 ? "inline-block px-2" : "hidden"}`}>:</span>
                        <span className="text-xl font-semibold" >{i.value < 9 ? `0${i.value}` : i.value} </span>
                        <span className="text-sm uppercase">{i.label}</span>
                    </div>
                )
            })
            }
        </Root>
    )
}

const Root = styled.div`
    background-color: ${p => p.theme.bgFooterUpper};
`
