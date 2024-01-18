import { WHITELABEL } from "@/utils/envProviders";
import { WHITELABELS } from "@/utils/whitelabelConfig";
import { initializeApp } from "firebase/app";

const firebaseConfig = WHITELABEL?.includes(WHITELABELS.exploretalent)
  ? {
      apiKey: "AIzaSyBDVaPoljmaP0wGwXOPDZSAAkybE11VeDg",
      authDomain: "explore-talent-35b68.firebaseapp.com",
      projectId: "explore-talent-35b68",
      storageBucket: "explore-talent-35b68.appspot.com",
      messagingSenderId: "759647719213",
      appId: "1:759647719213:web:3523d597a58af158560da4",
    }
  : WHITELABEL?.includes(WHITELABELS.talento)
  ? {
      apiKey: "AIzaSyCQyMakp1pCz1wGL5RMd0Pg_O7yv--1uVI",
      authDomain: "talento-dbc3d.firebaseapp.com",
      projectId: "talento-dbc3d",
      storageBucket: "talento-dbc3d.appspot.com",
      messagingSenderId: "811932795329",
      appId: "1:811932795329:web:7629495966e63146782f40",
      measurementId: "G-ZGRC93T2RP",
    }
  : {
      apiKey: "AIzaSyBDVaPoljmaP0wGwXOPDZSAAkybE11VeDg",
      authDomain: "explore-talent-35b68.firebaseapp.com",
      projectId: "explore-talent-35b68",
      storageBucket: "explore-talent-35b68.appspot.com",
      messagingSenderId: "759647719213",
      appId: "1:759647719213:web:3523d597a58af158560da4",
    };

// const firebaseConfig = {
//   apiKey: "AIzaSyCQyMakp1pCz1wGL5RMd0Pg_O7yv--1uVI",
//   authDomain: "talento-dbc3d.firebaseapp.com",
//   projectId: "talento-dbc3d",
//   storageBucket: "talento-dbc3d.appspot.com",
//   messagingSenderId: "811932795329",
//   appId: "1:811932795329:web:7629495966e63146782f40",
//   measurementId: "G-ZGRC93T2RP",
// };

// const firebaseConfig = {
//   apiKey: "AIzaSyBDVaPoljmaP0wGwXOPDZSAAkybE11VeDg",
//   authDomain: "explore-talent-35b68.firebaseapp.com",
//   projectId: "explore-talent-35b68",
//   storageBucket: "explore-talent-35b68.appspot.com",
//   messagingSenderId: "759647719213",
//   appId: "1:759647719213:web:3523d597a58af158560da4",
// };

console.log("FIB", firebaseConfig);

export const firebaseApp = initializeApp(firebaseConfig);
