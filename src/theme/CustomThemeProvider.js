import { useHost } from "context/HostContext";
import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
// import { lightTheme } from "./index";
import { exploretalentTheme } from "@/utils/whitelabelConfig/theme/exploretalent";
import { talentoTheme } from "@/utils/whitelabelConfig/theme/talento";
import { auditionsTheme } from "@/utils/whitelabelConfig/theme/auditions";
import { modelingTheme } from "@/utils/whitelabelConfig/theme/modeling";
import { adorableKidsTheme } from "@/utils/whitelabelConfig/theme/adorableKids";
import { cebuModelingTheme } from "@/utils/whitelabelConfig/theme/cebuModeling";
import { manilaModelingTheme } from "@/utils/whitelabelConfig/theme/manilaModeling";
import { WHITELABELS } from "@/utils/whitelabelConfig";

const CustomThemeContext = React.createContext({
  themeType: "",
});

export function useCustomTheme() {
  const context = React.useContext(CustomThemeContext);
  if (context === undefined) {
    throw new Error("useCustomTheme must be used within a CustomThemeProvider");
  }
  return context;
}

export default function CustomThemeProvider({ children }) {
  const [themeType, setThemeType] = useState("exploretalentTheme");
  const hostname = useHost();

  useEffect(() => {
    setThemeType(
      hostname === "exploretalent"
        ? "exploretalent"
        : hostname === "talento"
        ? "talentoTheme"
        : hostname === "auditions"
        ? "auditions"
        : hostname === "modeling"
        ? "modelingTheme"
        : hostname === "adorableKids"
        ? "adorableKids"
        : hostname === WHITELABELS.cebuModeling
        ? WHITELABELS.cebuModeling
        : hostname === WHITELABELS.manilaModeling
        ? WHITELABELS.manilaModeling
        : "exploretalent"
    );
  }, [hostname]);
  const activeTheme =
    hostname === "exploretalent"
      ? exploretalentTheme
      : hostname === "talento"
      ? talentoTheme
      : hostname === "auditions"
      ? auditionsTheme
      : hostname === "modeling"
      ? modelingTheme
      : hostname === "adorableKids"
      ? adorableKidsTheme
      : hostname === WHITELABELS.cebuModeling
      ? cebuModelingTheme
      : hostname === WHITELABELS.manilaModeling
      ? manilaModelingTheme
      : exploretalentTheme;

  // console.log("hostname: ", hostname);
  // console.log("themeType: ", themeType);
  // console.log("activeTheme: ", activeTheme);

  return (
    <CustomThemeContext.Provider
      value={{
        themeType,
      }}
    >
      <ThemeProvider theme={activeTheme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
}
