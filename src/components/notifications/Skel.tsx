import Skeleton from "react-loading-skeleton";

export default function Skel() {
    return (
        <>
            {
                [0, 1, 2].map(item => (
                    <div className="flex items-center mb-3" style={{ padding: 15, gap: 15 }} key={item}>
                        <Skeleton style={{ height: 60, width: 60, borderRadius: '100%' }} />
                        <div>
                            <Skeleton style={{ height: 15, width: 250 }} />
                            <Skeleton style={{ height: 10, width: 60 }} />
                        </div>
                    </div>
                ))
            }
        </>
    )
}