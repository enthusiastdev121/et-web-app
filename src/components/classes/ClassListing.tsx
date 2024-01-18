import Link from "next/link";
import { ClassCardBigD } from "types/classes";
import ClassCardBig from "./ClassCardBig";
import { useRouter } from "next/router";

export default function ClassListing({ list = [] }: { list: ClassCardBigD[] }) {
    const router = useRouter();
    const openProfile = () => {
        router.push("/classes/details");
      };
    return (
        <div>

            <div className="flex flex-col gap-[30px]">
                {
                    list.map((item: ClassCardBigD) => (
                        <div key={item.id}>
                            <div onClick={openProfile}>
                                <div >
                                    <ClassCardBig item={item} imgWidth={25} />
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}