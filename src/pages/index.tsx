import { useEffect } from "react";

// components

import NavBar from "../components/Navigation/NavBar";

import Footer from "../components/Footer/Footer";

// the placeholder
import { Outlet } from "react-router-dom";


// helpers


export function App(){
  
  return (
    <div className="flex md:justify-center w-full ">
      <div className="flex justify-center flex-col min-h-screen xl:max-w-screen-xl md:w-full">          
          <div>
            <NavBar/>
            <Outlet />
          </div>
          <Footer />
    </div>
    </div>

  ) ;
}

export default App;