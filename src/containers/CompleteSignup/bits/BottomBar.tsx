import { TiArrowSortedDown, TiArrowSortedUp } from "react-icons/ti";
import styled from "styled-components";
import Button1 from "components/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BottomBar({
  width = 0,
  nextSlide,
  text,
  prevSlide,
  onComplete,
  setCurrentSlide,
  allFilled,
  warningText = "Please Fill All Fields",
  completion
}: {
  width: number;
  nextSlide: string;
  prevSlide: string;
  setCurrentSlide: any;
  onComplete?: any;
  text?: string;
  allFilled: boolean;
  warningText: string;
  completion: boolean;
}) {
  return (
    <div className="h-20 w-full flex items-center justify-between">
      <div className="flex gap-3 flex-col">
        <ToastContainer className="Toastify" />
        <p className="text-sm txt-base">
          {width}% completed
        </p>
        <Bar>
          <Progress width={width} />
        </Bar>
      </div>

      {!completion && <div className="flex items-center justify-end ">
        {onComplete ? (
          <>
            <Button
              borderRadius="4px 0px 0px 4px"
              onClick={() => setCurrentSlide(prevSlide)}
            >
              <TiArrowSortedUp />
            </Button>


            <hr style={{ width: 1 }} />


            {allFilled ?
              (
                <Button
                  borderRadius="0px 4px 4px 0px"
                  onClick={() => {
                    setCurrentSlide(nextSlide)
                    onComplete()
                  }}
                >
                  <TiArrowSortedDown />
                </Button>
              )
              :
              (
                <Button
                  borderRadius="0px 4px 4px 0px"
                  onClick={() => toast.warning(warningText)
                  }
                >
                  <TiArrowSortedDown />
                </Button>
              )}

          </>
        ) : (
          <>
            {prevSlide === "" ? (
              <Button disabled borderRadius="4px 0px 0px 4px">
                <TiArrowSortedUp />
              </Button>
            ) : (
              <Button
                borderRadius="4px 0px 0px 4px"
                onClick={() => setCurrentSlide(prevSlide)}
              >
                <TiArrowSortedUp />
              </Button>
            )}

            <hr style={{ width: 1 }} />

            {nextSlide === "" ? (
              <Button disabled borderRadius="0px 4px 4px 0px">
                {" "}
                <TiArrowSortedDown />
              </Button>
            ) :
              allFilled ?
                (
                  <Button
                    borderRadius="0px 4px 4px 0px"
                    onClick={() => setCurrentSlide(nextSlide)}
                  >
                    <TiArrowSortedDown />
                  </Button>
                )
                :
                (
                  <Button
                    borderRadius="0px 4px 4px 0px"
                    onClick={() => toast.warning(warningText)
                    }
                  >
                    <TiArrowSortedDown />
                  </Button>
                )

            }
          </>
        )}
      </div>}
    </div>
  );
}

const Button = styled.button<{ borderRadius: string }>`
  width: 40px;
  height: 40px;
  background: rgba(60, 60, 67, 0.6);
  border-radius: ${(p) => p.borderRadius};
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Bar = styled.div`
  width: 45vw;
  max-width: 319px;
  height: 7px;
  background: #efefef;
  border-radius: 200px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 25vw;
  }
`;

const Progress = styled.div<{ width: number }>`
  height: 100%;
  width: ${(p) => p.width}%;
  background: ${p => p.theme.primary};
`;
