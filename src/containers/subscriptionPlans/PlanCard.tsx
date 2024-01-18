import styled from "styled-components";
import { PlanD } from "types/subscription";

export default function PlanCard({ planDetail, planId, setPlanId }: { planDetail: PlanD, planId: number, setPlanId: any }) {

    const { planDuration, actualPrice, discountedPrice, discount, inputId, id } = planDetail;
    return (
        <Root className={`w-[96%] rounded-xl max-w-2xl mx-auto mb-4 cursor-pointer`}>
            <label htmlFor={inputId}>
                <div className="card-div w-full flex justify-between items-center cursor-pointer bg-white" >
                    <div className="flex md:gap-5 items-center gap-3 md:pl-10 pl-3">
                        <input type="radio" name="plan" id={inputId} className="md:w-7 w-5 h-5 md:h-7" onChange={() => setPlanId(id)} checked={id === planId} />
                        <div>{planDuration}</div>
                    </div>
                    <div className="flex flex-col items-center md:gap-2 gap-1 bg-[#F4F4F4] md:px-14 px-5 py-3">
                        <span className="line-through md:text-lg text-base">{actualPrice}</span>
                        <span className="txt-danger md:text-4xl text-2xl font-semibold">{discountedPrice}</span>
                        <span className="text-center">per month</span>
                    </div>
                    <div className="txt-green md:pr-10 pr-3">
                        <sub className="font-semibold text-base">save</sub>
                        <span className="md:text-4xl text-2xl font-semibold">{discount}</span>
                        <sup className="font-semibold md:text-2xl text-xl">1</sup>
                    </div>
                </div>
            </label>
        </Root>
    )
}

const Root = styled.div`
    border: 2px solid transparent;
    transition: all .2s;
    &:hover{
        border: 2px solid ${p => p.theme.primary};
        transition: all 0.2s;
    }
    .card-div {
        border: 1px solid ${p => p.theme.primary};
        border-radius: 10px;
    }
`
