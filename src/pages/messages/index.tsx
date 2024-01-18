import MessagingV2 from "containers/MessagingV2";
import { useEffect } from "react";

export default function Index() {
  useEffect(() => {

    let gg: any;

    if (typeof window !== undefined) {
      document.getElementsByTagName("body")[0].classList.add("overflow-hidden");

      gg = document.getElementsByClassName("siq_noanim")[0]
      if (gg) {
        gg.style.display = 'none';
      }
    }
    return () => {
      if (typeof window !== undefined) {
        document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");

        if (gg) {
          gg.style.display = 'unset';
        }
      }
    }
  }, [])

  return (
    <MessagingV2 />
  )
}


// import MessageLayout from "components/Layout/MessageLayout";
// import MessagesPage from "../../containers/message";

// export default function Messages() {
//   return (
//     <MessageLayout title="ExploreTalent | Messages">
//       <MessagesPage />
//     </MessageLayout>
//   );
// }
