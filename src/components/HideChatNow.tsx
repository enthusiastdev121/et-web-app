import { useRouter } from "next/router";
import { useEffect } from "react"

export default function HideChatNow() {
    const router = useRouter()

    useEffect(() => {
        const paths = ['/messages']

        if (typeof window !== 'undefined') {
            if (paths.includes(router.pathname)) {
                document.getElementsByClassName('zsiq_theme11')[0]?.classList.add("hidden-block");
            } else {
                document.getElementsByClassName('zsiq_theme11')[0]?.classList.remove("hidden-block");
            }
        }
    }, [router.pathname])
    return (
        <div />
    )
}
