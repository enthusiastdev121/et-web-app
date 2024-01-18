import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

import { AJMenu } from "../Styles";

export default function ClassesNav() {
    const router = useRouter();

    return (
        <AJMenu className="md:px-10v border-b-[1px] sticky top-[70px] z-20">

            <div
                className="sm:px-[10vw] md:px-0 flex gap-2 md:gap-5 text-sm font-semibold items-center w-fit overflow-x-scroll no-scroll "
                style={{ width: "100%", maxWidth: "1530px", margin: "0 auto" }}
            >

                {/* ----- Browse classes -----  */}
                <Link href="/classes/browse-classes" passHref>
                    <div
                        className={
                            router.pathname === "/classes/browse-classes"
                                ? "py-4 cursor-pointer active"
                                : "py-4 cursor-pointer nav-item"
                        }
                        style={{ minWidth: 60 }}
                    >
                        Browse classes
                    </div>
                </Link>

                {/*  ----- my classes -----  */}
                <Link href="/classes/my-classes" passHref>
                    <div
                        className={
                            router.pathname === "/classes/my-classes"
                                ? "py-4 cursor-pointer active"
                                : "py-4 cursor-pointer nav-item"
                        }
                        style={{ minWidth: 130 }}
                    >
                        My classes
                    </div>
                </Link>

                {/*  ----- Wishlist -----  */}
                <Link href="/classes/wishlist" passHref>
                    <div
                        className={
                            router.pathname === "/classes/wishlist"
                                ? "py-4 cursor-pointer active"
                                : "py-4 cursor-pointer nav-item"
                        }
                    >
                        Wishlist
                    </div>
                </Link>
            </div>
        </AJMenu>
    );
}