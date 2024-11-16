import React, { useState } from "react";
import { Menu, Typography } from "antd";
import { Link } from "react-router-dom";
import "tailwindcss/tailwind.css";
import sideBtn from "../../public/Icons/sideBtn.svg";
import firstRout from "../../public/Icons/firstRout.svg";
import secundRout from "../../public/Icons/secundRout.svg";

const Sidebar = () => {
  const { Text } = Typography;
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKey, setSelectedKey] = useState("shift");

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const handleMenuClick = (key) => {
    setSelectedKey(key);
  };

  return (
    <div
      className={`flex flex-col mt-4 ml-4 rounded-lg bg-white shadow-lg transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
      style={{ minWidth: collapsed ? "80px" : "256px" }}
    >
      <div className="flex items-center justify-between my-4 px-2 md:px-4">
        {!collapsed && (
          <Text className="text-base md:text-lg">System Settings</Text>
        )}
        <button
          onClick={toggleCollapse}
          className="rounded-full flex-shrink-0 w-16 h-16 flex items-center justify-center"
        >
          <img
            src={sideBtn}
            alt="Toggle Sidebar"
            className={`transition-transform duration-300 ${
              collapsed ? "rotate-180" : "rotate-0"
            } w-12 h-12`}
          />
        </button>
      </div>
      <div className="bg-gray-300 h-px w-4/5 mx-auto"></div>
      <Menu
        mode="inline"
        selectedKeys={[selectedKey]}
        className="border-r-0 flex flex-col mt-4"
      >
        {!collapsed && (
          <Text className="px-5 my-3 text-sm md:text-base">Attendance</Text>
        )}
        <Menu.Item
          key="shift"
          onClick={() => handleMenuClick("shift")}
          className={`flex items-center ${
            selectedKey === "shift"
              ? "bg-blue-100 border-l-4 border-blue-500"
              : ""
          } hover:bg-blue-100 hover:border-l-4 hover:border-blue-500 transition duration-300 px-2`}
        >
          <Link to="/shift" className="flex items-center w-full">
            <img
              src={firstRout}
              alt="Shift Icon"
              className="w-6 h-6 min-w-[24px] min-h-[24px] flex-shrink-0"
            />
            {!collapsed && (
              <span className="text-sm md:text-base whitespace-nowrap">
                Shift
              </span>
            )}
          </Link>
        </Menu.Item>
        <Menu.Item
          key="holidays"
          onClick={() => handleMenuClick("holidays")}
          className={`flex items-center ${
            selectedKey === "holidays"
              ? "bg-blue-100 border-l-4 border-blue-500"
              : ""
          } hover:bg-blue-100 hover:border-l-4 hover:border-blue-500 transition duration-300 px-2`}
        >
          <Link to="/holidays" className="flex items-center w-full">
            <img
              src={secundRout}
              alt="Holidays Icon"
              className="w-6 h-6 min-w-[24px] min-h-[24px] flex-shrink-0"
            />
            {!collapsed && (
              <span className="text-sm md:text-base whitespace-nowrap">
                Holidays
              </span>
            )}
          </Link>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Sidebar;
