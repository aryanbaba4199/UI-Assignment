import React, {useState} from "react";
import { headerData } from "../constants";
import { DashBoardData } from "../constants";
import { OrdersData } from "../constants";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { customerFeedback } from "../constants";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Pie,
  YAxis,
  PieChart,
  Cell,
  CartesianGrid,
  Legend,
  Tooltip,
} from "recharts";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Collapse,
  Box,
} from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';

import LunchDiningIcon from "@mui/icons-material/LunchDining";
import { OrderData } from "../constants";
import GpsFixedIcon from "@mui/icons-material/GpsFixed";
import FactCheckIcon from "@mui/icons-material/FactCheck";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);


  const transformedData = OrderData.map((item) => ({
    ID: item.ID,
    Mile: item.Mile,
    Orders: item.Orders,
  }));

  

  const data = [
    { name: "Completed", value: 70 },
    { name: "Remaining", value: 30 },
  ];
  
  const COLORS = ["#8b5cf6", "#dc2626"];

  

  return (
    <>
      <div className="bg-black text-gray-100 flex justify-between md:w-[70%] w-full">
        <div className="w-full">
          <div className="flex justify-between px-4 items-center flex-wrap">
            {DashBoardData.map((item) => (
              <div className="flex flex-col bg-gray-900 p-2 px-2 w-32 mt-2 rounded-md">
                <span className="">{item.icon}</span>
                <span className="mt-1">{item.text}</span>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-xl">{item.value}</span>
                  <p className={`${item.color}`}>
                    <ExpandLessIcon
                      className={
                        item.color === "text-green-500" ? "" : "rotate-180"
                      }
                    />
                    {item.percentage}%
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div>
            <div className=" text-white mt-4">
              <div className="flex pl-12 font-semibold text-xl">
                <span className="mb-4">Activity</span>
              </div>
              <ResponsiveContainer width="100%" aspect={3.5}>
                <BarChart data={transformedData} height={200}>
                  <XAxis dataKey="Mile" />
                  <YAxis />
                  <Tooltip contentStyle={{ borderRadius: "8px" }} />
                  <Legend formatter={() => null} iconType="none" />

                  <Bar dataKey="Orders" name="Orders" fill="#8884d8" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div>
      <span className="pl-8 text-xl font-semibold">Recent Orders</span>
      <TableContainer component={Paper} className="mt-4">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow className="text-cyan-500">
              {headerData.map((item, index) => (
                <TableCell key={index}>{item}</TableCell>
              ))}
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {OrdersData.map((item, index) => (
              <React.Fragment key={index}>
                <TableRow>
                  <TableCell>{item.customer}</TableCell>
                  <TableCell>{item.orderno}</TableCell>
                  <TableCell>{item.amount}</TableCell>
                  <TableCell>{item.status===0 ? 'Delivered' : 'Cancelled'}</TableCell>
                  
                </TableRow>
                <TableRow>
                  <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={5}>
                    <Collapse in={openIndex === index} timeout="auto" unmountOnExit>
                      <Box margin={1}>
                        <div className="flex flex-col">
                          <span><strong>Customer:</strong> {item.customer}</span>
                          <span><strong>Order No:</strong> {item.orderno}</span>
                          <span><strong>Amount:</strong> {item.amount}</span>
                          <span><strong>Status:</strong> {item.status===0 ? 'Delivered' : 'Cancelled'}</span>
                        </div>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </React.Fragment>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
        </div>
      </div>
      <div className="md:w-[30%] w-full px-4 text-white mt-2">
        <div className="flex w-[100%] justify-between bg-gray-900 px-4 p-2">
          <div className=" grid">
            <span className="font-semibold">Net Profit</span>
            <span className="text-xl mt-4 font-bold">$6759.25</span>
          </div>
          <div className="flex flex-col justify-end items-end">
            <PieChart width={100} height={100}>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                startAngle={90}
                endAngle={450}
                paddingAngle={5}
                dataKey="value"
                textAnchor="70%"
              >
                {data.map((entry, index) => (
                  <Cell
                    className="text-white"
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
            </PieChart>

            <span className="text-xs">The Value here has been rounded off</span>
          </div>
        </div>
        <div>
          <div className="w-full bg-gray-900 mt-4 px-4 rounded-md">
            <div className="flex justify-between items-center ">
              <div className="flex py-2">
                <div>
                  {" "}
                  <span className="bg-[#ff0202] rounded-full text-3xl mt-2 mr-4 px-2">
                    <GpsFixedIcon className=" rounded-full text-3xl mb-2" />
                  </span>
                </div>
                <span className=" text-lg text-start self-start font-semibold">
                  Goals
                </span>
              </div>

              <span>
                <ExpandLessIcon className="rotate-90 text-gray-200" />
              </span>
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex py-2">
                <div>
                  {" "}
                  <span className="bg-[#0239ff] rounded-full text-3xl mt-2 mr-4 px-2">
                    <LunchDiningIcon className=" rounded-full text-3xl mb-2" />
                  </span>
                </div>
                <span className=" text-lg text-start self-start font-semibold">
                  Popular Dishes
                </span>
              </div>

              <span>
                <ExpandLessIcon className="rotate-90 text-gray-200" />
              </span>
            </div>
            <div className="flex justify-between items-center ">
              <div className="flex py-2">
                <div>
                  {" "}
                  <span className="bg-[#7cff02]  rounded-full text-3xl mt-2 mr-4 px-2">
                    <FactCheckIcon className=" rounded-full text-3xl mb-2" />
                  </span>
                </div>
                <span className=" text-lg text-start self-start font-semibold">
                  Menus
                </span>
              </div>

              <span>
                <ExpandLessIcon className="rotate-90 text-gray-200" />
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-gray-900 mt-4 p-2">
          {customerFeedback.map((item, index) => (
            <div className="w-full">
              <div className="flex gap-2 mt-2">
                <img src={item.image} className="w-8 h-8 rounded-full" />
                <span className="font-semibold">{item.name}</span>
              </div>

              <div>
                {[...Array(item.star)].map((_, i) => (
                  <span key={i}><StarIcon className="text-[10px] text-yellow-500"/> </span>
                ))}
              </div>
              <span className="text-gray-400">{item.comment}</span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
