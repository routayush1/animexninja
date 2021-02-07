import React, { useEffect, useState } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useDispatch, useSelector } from "react-redux";
import { toggleDark, toggleLight } from "../../redux/actions/themeAction";
export default function Toggle() {
  const [isDarkMode, setIsDarkMode] = useState(() => true);
  const theme = useSelector((state) => state.theme);
  useEffect(() => {
    if (theme.theme == "dark") {
      setIsDarkMode(true);
    } else {
      setIsDarkMode(false);
    }
  }, [theme]);
  const dispatch = useDispatch();
  function checkToggle() {
    isDarkMode
      ? [dispatch(toggleLight()), setIsDarkMode(false)]
      : [dispatch(toggleDark()), setIsDarkMode(true)];
  }
  return (
    <DarkModeToggle
      onChange={() => {
        checkToggle();
      }}
      checked={isDarkMode}
      size={50}
    />
  );
}
