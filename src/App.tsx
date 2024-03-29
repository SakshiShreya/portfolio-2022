import { useEffect, useState } from "react";
import { BrowserRouter, HashRouter } from "react-router-dom";
import "./App.scss";
import LayoutDsk from "./components/layout/LayoutDsk";
import LayoutMob from "./components/layout/LayoutMob";
import { DeviceContext } from "./context/DeviceContext";
import { NavigationContext } from "./context/NavigationContext";
import useWindowDimensions from "./hooks/useWindowDimentions";

function App() {
  const dimensions = useWindowDimensions();
  const device = dimensions.device;

  // set initial value of isSideNavOpen to true if it is desktop and false if mobile
  const [isSideNavOpen, setIsSideNavOpen] = useState(device === "desktop");

  // change the state if device changes
  useEffect(() => {
    setIsSideNavOpen(device === "desktop");
  }, [device]);

  return (
    <DeviceContext.Provider value={dimensions}>
      <NavigationContext.Provider value={{ isOpen: isSideNavOpen, onOpen: setIsSideNavOpen }}>
        {window.location.href.startsWith("https://sakshishreya.github.io/portfolio-2022") ? (
          <HashRouter>{device !== "desktop" ? <LayoutMob /> : <LayoutDsk />}</HashRouter>
        ) : (
          <BrowserRouter>{device !== "desktop" ? <LayoutMob /> : <LayoutDsk />}</BrowserRouter>
        )}
      </NavigationContext.Provider>
    </DeviceContext.Provider>
  );
}

export default App;
