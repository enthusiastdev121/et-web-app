import { FiMaximize2 } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { MdOutlineMinimize } from "react-icons/md";
import styled from "styled-components";
import { useHMSActions } from "@100mslive/react-sdk";
import toast from "react-hot-toast"
import { useMessagingV2 } from "context/MessagingContextV2";
import { useAuth } from "context/AuthContext";
import { finishCallApi, leaveCallApi } from "network/apis/call";

export default function Header({ expandContainer, collapseContainer, closeCall }: { expandContainer: callbackType, collapseContainer: callbackType, closeCall: callbackType }) {
    const { token } = useAuth()
    const { setOpenVideoCalling, isHost, roomId } = useMessagingV2()
    const hmsActions = useHMSActions();

    const leaveRoom = async () => {
        if (isHost) {
            try {
                await finishCallApi({ token, roomId })
            } catch (err) {
                console.log("Err:", err);
            }
        } else {
            try {
                await leaveCallApi({ token, roomId })
            } catch (err) {
                console.log("Err:", err);
            }
        }
        hmsActions.leave();
        closeCall();
        setOpenVideoCalling(false);
        toast.success('Call Ended');
    }

    return (
        <Root>
            {/* <div className="font-semibold">Ongoing Call</div> */}
            <div className="flex items-center gap-2 ml-auto">
                <FiMaximize2 onClick={expandContainer} className="icon cursor-pointer text-base" />
                <MdOutlineMinimize onClick={collapseContainer} className="icon cursor-pointer text-xl" />
                <IoClose onClick={leaveRoom} className="icon cursor-pointer text-xl" />
            </div>
        </Root>
    )
}

const Root = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 
    gap: 8px; 
    width: 100%;
    
    .icon {
        // background: #fff;
        border-radius: 3px;
        padding: 1px;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.05);

        &:hover {
            background: rgba(0,0,0,0.1);
            transition: background 0.2s ease-in-out;
        }

        &:last-child:hover {
            background: ${p => p.theme.abs.danger};
            color: #fff;
            transition: all 0.2s ease-in-out;
        }
    }
`

type callbackType = () => void;