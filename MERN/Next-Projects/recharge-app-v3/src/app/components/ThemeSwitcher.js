"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
    setStatusBarTheme(theme);
  };

  const setStatusBarTheme = (theme) => {
    const rootStyles = getComputedStyle(document.documentElement);
    const color =
      theme === "dark"
        ? "#000000"
        : rootStyles.getPropertyValue("--primary").trim();

    const metaTag = document.querySelector('meta[name="theme-color"]');
    if (metaTag) {
      metaTag.setAttribute("content", color);
    } else {
      // If the tag doesn't exist, create it
      const newMetaTag = document.createElement("meta");
      newMetaTag.setAttribute("name", "theme-color");
      newMetaTag.setAttribute("content", color);
      document.head.appendChild(newMetaTag);
    }
  };

  useEffect(() => {
    setStatusBarTheme(theme);
  }, [theme]);

  return (
    <>
      <button
        onClick={() => changeTheme()}
        className="border border-gray-400 px-2 py-1 rounded-md text-white"
        type="button"
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-moon "
          >
            <path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-sun "
          >
            <circle cx="12" cy="12" r="4"></circle>
            <path d="M12 2v2"></path>
            <path d="M12 20v2"></path>
            <path d="m4.93 4.93 1.41 1.41"></path>
            <path d="m17.66 17.66 1.41 1.41"></path>
            <path d="M2 12h2"></path>
            <path d="M20 12h2"></path>
            <path d="m6.34 17.66-1.41 1.41"></path>
            <path d="m19.07 4.93-1.41 1.41"></path>
          </svg>
        )}
      </button>
    </>
  );
};

export default ThemeSwitcher;
