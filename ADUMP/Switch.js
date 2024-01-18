import { useCustomTheme } from "../src/theme/CustomThemeProvider";

export default function Switch() {
  const theme = useCustomTheme();

  return <button onClick={() => theme.toggleTheme()}>switch</button>;
}
