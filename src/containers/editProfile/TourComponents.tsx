import React from 'react'

interface Props {
    continuous : any,
    index : any,
    step : any,
    backProps : any,
    closeProps : any,
    primaryProps : any,
    tooltipProps : any,
}

const TourComponents: React.FC<Props> = ({  
    continuous,
    index,
    step,
    backProps,
    closeProps,
    primaryProps,
    tooltipProps, }) => {


    return (

        <div {...tooltipProps}>
            {step.title && <div>{step.title}</div>}
            <div>{step.content}</div>
            <div>
                {index > 0 && (
                    <button {...backProps} id="back">
                        sssss
                    </button>
                )}
                {continuous && (
                    <button {...primaryProps} id="next">
                        ssss
                    </button>
                )}
                {!continuous && (
                    <button {...closeProps} id="close" >
                       ss
                    </button>
                )}
            </div>
        </div>

    )
}

export default TourComponents