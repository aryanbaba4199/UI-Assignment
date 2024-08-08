import React from "react";
import NavBar from "./Component/Header";
import SideBar from "./Component/SideBar";
import Home from "./Component/Home";

const App = () => {
  return (
    <div className="overflow-hidden font-sans text-[14px]">
      <div>
        <div className="bg-black">
          <NavBar/>
          
        </div>
      </div>
      <div className="flex justify-start bg-black">
      <SideBar/>
      <div className="w-full flex md:flex-row flex-col">
        <Home/>
        </div>
      </div>
    </div>
  );
};

export default App;
