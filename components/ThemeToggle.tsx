import { IconMoon, IconSun } from "@tabler/icons";
import { useTheme } from "next-themes";
import { ReactElement, useEffect, useState } from "react";

export default function ThemeToggle(): ReactElement {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);
  if (!mounted) return <></>;

  return theme === "dark" ? (
    <IconSun onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
  ) : (
    <IconMoon onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
  );
}
