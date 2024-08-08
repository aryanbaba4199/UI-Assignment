import { Sidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import React from "react";
import HomeIcon from '@mui/icons-material/Home';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import QrCodeIcon from '@mui/icons-material/QrCode';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const SideBar = () => {
  return (
    <div className="h-[100vh] overflow-hidden">
    <Sidebar collapsed backgroundColor="#020617">
      <Menu className="h-[95vh] text-gray-100">
        <MenuItem className="hover:text-slate-950"> <HomeIcon/> </MenuItem>
        <MenuItem className="hover:text-slate-950"><QrCodeIcon/></MenuItem>
        <MenuItem className="hover:text-slate-950"><EqualizerIcon/></MenuItem>
        <MenuItem className="hover:text-slate-950"><InventoryIcon/></MenuItem>
        <MenuItem className="hover:text-slate-950"><AccountCircleIcon/></MenuItem>
      </Menu>
    </Sidebar>
    </div>
  );
};

export default SideBar;
