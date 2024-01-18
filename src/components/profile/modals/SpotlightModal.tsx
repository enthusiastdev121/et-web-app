import ModalAnimated from "components/ModalAnimated";
import { RiCloseFill } from 'react-icons/ri'
import { useState } from "react";
import InstaStories from "components/spotlights/InstaStories";
export default function SpotlightModal(props: Props) {
    const [instaStoryDialog, setInstaStoryDialog] = useState(false);
    const {
        open,
        onClose,
    } = props;
    return (
        <>
            <ModalAnimated open={open}  >
                <div className="p-5 z-50 w-[1200px]">
                    <div className="z-50 w-full bg-white rounded-lg">
                        <div className="flex justify-between px-5 py-2">
                            <h1 className="font-semibold">Pin location from map </h1>
                            <button onClick={onClose} className="text-[22px]">
                                <RiCloseFill />
                            </button>
                        </div>
                        {/* <InstaStories /> */}
                    </div>
                </div>
            </ModalAnimated>
        </>


    )
}