import { useEffect, useState } from "react";
import { Button } from "./ui/button";

export const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("theme");
    return saved === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light")
    }
  }, [darkMode]);

  return (
    <Button
      variant="outline"
      className="ml-2 size-11 mt-1"
      onClick={() => setDarkMode(!darkMode)}
    >
      <span className={`fas ${darkMode ? "fa-moon" : "fa-sun"}`}></span>
    </Button>
  );
};
