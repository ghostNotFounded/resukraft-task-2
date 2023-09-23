import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/Logo.png";

import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";

export default function Navbar() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="flex justify-between lg:px-20 md:px-10 px-5 py-4 border-b border-slate-300 dark:border-slate-700 items-center">
      <Link to="/">
        <div className="flex space-x-2 items-center">
          <img src={logo} alt="logo" className="md:w-10 w-8" />
          <h2 className="text-lg font-semibold md:block hidden">ResuKraft.</h2>
        </div>
      </Link>
      <div>
        <button onClick={toggleTheme}>
          {theme === "dark" ? (
            <SunIcon className="w-6 h-6" />
          ) : (
            <MoonIcon className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
}
