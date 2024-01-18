import Button from "components/Button";
import { useEffect } from "react";
import styled from "styled-components";

export default function ProgressBar({ onCancel, progress }: { onCancel: () => any; progress: number; }) {

    useEffect(() => {
        console.log("progress: ", progress)
    }, [progress])

    return (
        <>
            {
                progress !== 0 && progress !== 1 ?
                    <Root>
                        {/* Progress bar */}
                        <div className="rounded-full bg-gray-400 overflow-hidden relative" style={{ maxWidth: "90%", width: 200, height: 16 }}>
                            <div className="absolute left-0 top-0 h-full bg-primary -500" style={{ width: `${progress * 100}%` }} />
                        </div>

                        {/* Cancel btn */}
                        <div className="mt-4">
                            <Button red size="small" onClick={onCancel}>
                                Cancel
                            </Button>
                        </div>
                    </Root> :
                    <></>
            }
        </>
    )
}

const Root = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: rgba(0,0,0,0.4);
    backdrop-filter: blur(2px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`