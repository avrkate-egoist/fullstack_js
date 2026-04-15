import { useState } from "react";
import SettingsContext from "../contexts/SettingsContext";

const MainProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const [language, setLanguage] = useState("uk");

  const [users, setUsers] = useState([]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  const toggleLanguage = () =>
    setLanguage((prev) => (prev === "uk" ? "en" : "uk"));

  return (
    <SettingsContext.Provider
      value={{ theme, toggleTheme, language, toggleLanguage, users, setUsers }}>
      {children}
    </SettingsContext.Provider>
  );
};

export default MainProvider;
