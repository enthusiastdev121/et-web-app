import Guidlines from "./Guidlines";
import RecommendedClasses from "./RecommendedClasses";

export default function CommonAside() {
    return (
        <aside className="mt-10 lg:mt-0 max-w-[390px] lg:w-[30%] mx-auto">
            <div className="mb-10">
                <Guidlines />
            </div>

            <RecommendedClasses />
        </aside>
    )
}