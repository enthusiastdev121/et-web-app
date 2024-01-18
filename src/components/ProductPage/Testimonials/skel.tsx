import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'
import { Content } from "./styles";

export default function SuccessSkel() {
    return (

        <Content className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 justify-items-center md:justify-items-start">
            {[1, 2, 3, 4].map((i) => (
                <div key={i}>
                    <Skeleton style={{ height: 482, width: 270, borderRadius: 8, marginBottom: 4 }} />
                </div>
            )
            )}
        </Content>

    )
}