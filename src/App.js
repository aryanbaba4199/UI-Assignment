import React, { useState } from "react";
import NavBar from "./Component/Header";
import SideBar from "./Component/SideBar";
import Home from "./Component/Home";

const App = () => {
  const [menu, setMenu] = useState(false);
  return (
    <div className="overflow-hidden font-sans text-[14px]">
      <div>
        <div className="bg-black">
          <NavBar setMenu = {setMenu} menu={menu}/>
          
        </div>
      </div>
      <div className="flex justify-start bg-black">
      <SideBar menu={menu}/>
      <div className="w-full flex md:flex-row flex-col">
        <Home/>
        </div>
      </div>
    </div>
  );
};

export default App;
