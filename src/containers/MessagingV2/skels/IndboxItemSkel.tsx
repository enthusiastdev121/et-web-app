import ZSkel from "components/ZSkel";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styled from "styled-components";

function IndboxItemSkel() {
    return (
        <div className="flex flex-col gap-3">
            {
                [1, 2, 3, 4, 5, 6].map((i) =>
                (
                    <div key={i} className="flex items-center gap-2 h-fit py-1">
                        <Container className="rounded-full overflow-hidden h-[60px] aspect-[1] ml-3 relative">
                            <ZSkel />
                        </Container>

                        <div className="flex flex-col gap-1">
                            <div className="h-[20px] w-[120px] rounded-full mb-2 relative">
                                <ZSkel />
                            </div>
                            <div className="h-[16px] w-[200px] rounded-full relative">
                                <ZSkel />
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

const Container = styled.div`
    div {
        border-radius: 100%;
    }
    span {
        border-radius: inherit;
    }
`

export default IndboxItemSkel