import "./App.css";
import { ThemeContextProvider } from "./contexts/Theme";
import ThemeBtn from "./components/ThemeButton";
import Card from "./components/Card";
import { useState, useEffect } from "react";
function App() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("theme") || "light";
    } catch (e) {
      return "light";
    }
  });

  const lightTheme = () => setTheme("light");
  const darkTheme = () => setTheme("dark");

  // apply theme to <html> and persist
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark");
    html.classList.add(theme);
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  return (
    <ThemeContextProvider value={{ theme, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeContextProvider>
  );
}

export default App;
