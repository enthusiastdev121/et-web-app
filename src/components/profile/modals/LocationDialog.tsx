import ModalAnimated from "components/ModalAnimated";
import { RiCloseFill } from 'react-icons/ri'
import GoogleMapApi from "./GoogleMapApi";

export default function LocationDialog(props: Props) {
    const {
        open,
        onClose,
        onConfirm
    } = props;
    return (
        <>
            <ModalAnimated open={open}>
                <div className="p-5 z-50 w-[1200px]" style={{ height: "90vh" }}>
                    <div className="z-50 w-full bg-paper rounded-lg h-[90%]">
                        <div className="flex justify-between px-5 py-2">
                            <h1 className="font-semibold">Pin location from map </h1>
                            <button onClick={onClose} className="text-[22px]">
                                <RiCloseFill />
                            </button>
                        </div>
                        <GoogleMapApi onConfirm={onConfirm} onClose={onClose} />
                    </div>
                </div>
            </ModalAnimated>
        </>
    )
}

type Props = {
    open: boolean;
    onClose: () => any;
    onConfirm: (address: string, city: string, state: string, country: string, zip: string, countryCode: string) => any;
}