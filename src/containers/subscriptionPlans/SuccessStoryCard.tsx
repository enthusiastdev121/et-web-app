import Button from "components/Button";
import styled from "styled-components"

export default function SuccessStoryCard() {
    return (
        <Root className="text-center flex flex-col gap-5 md:px-14 px-8 py-8 bg-white rounded-lg absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 max-w-3xl w-[95%]">
            <div>
                <div className="mb-2">
                    <img src="/images/subscription/card-pic.png" alt="card-pic" className="m-auto" />
                </div>
                <h3 className="text-lg font-semibold">Tyler Rivera</h3>
                <p>San Francisco, CA</p>
            </div>
            <p>He has started his success story. So have hundreds of other performers.</p>
            <div className='text-center'>
                <Button primary>
                    <span className="px-5 py-1">
                        it’s your turn now
                    </span>
                </Button>
            </div>
        </Root>
    )
}

const Root = styled.div`
        box-shadow: 1px 6px 33px rgba(0, 0, 0, 0.25);
`;