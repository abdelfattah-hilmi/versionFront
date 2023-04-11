import { useEffect } from "react";

// components
import SideBar from "../components/Navigation/SideBar";
import NavBar from "../components/Navigation/NavBar";

import Footer from "../components/Footer/Footer";

// the placeholder
import { Outlet } from "react-router-dom";


// helpers
import useWindowResize from "../lib/customHooks/useWindowResize";

export function App(){
  const [width, height] = useWindowResize();
  return (
    <div className="flex md:justify-center w-full ">
      {width < -768 ? <SideBar/>:<></>}
      <div className="flex justify-center flex-col min-h-screen xl:max-w-screen-xl md:w-full">          
          <div>
            {width < 768 ? <></>:<NavBar/>}
            <Outlet />
          </div>
          <Footer />
    </div>
    </div>

  ) ;
}

export default App;