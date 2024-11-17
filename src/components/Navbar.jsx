import React, { useState } from "react";
import {
  Layout,
  Menu,
  Avatar,
  Typography,
  Space,
  Drawer,
  Button,
  Popover,
} from "antd";
import { DownOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import userImage from "../../public/Images/UserImage.jpg";
import oonaLogo from "../../public/Images/OONALOGO.png";

import dashboardIcon from "../../public/Icons/dashboard.svg";
import groupIcon from "../../public/Icons/groupIcon.svg";
import settingIcon from "../../public/Icons/setting.svg";

const { Header } = Layout;
const { Text } = Typography;

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  // Visibility states for different modals
  const [dashboardModalVisible, setDashboardModalVisible] = useState(false);
  const [groupModalVisible, setGroupModalVisible] = useState(false);
  const [settingModalVisible, setSettingModalVisible] = useState(false);
  const [userModalVisible, setUserModalVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  const menuItems = (
    <>
      <Menu.SubMenu
        key="dashboard"
        title={
          <span>
            Dashboard{" "}
            <DownOutlined className="ml-1 text-xs hidden md:inline-block" />
          </span>
        }
      >
        <img
          src="../../public/Images/dashList.png"
          className="h-52 w-72"
          alt="Dashboard Content"
        />
      </Menu.SubMenu>
      <Menu.SubMenu
        key="organization"
        title={
          <span>
            Organization{" "}
            <DownOutlined className="ml-1 text-xs hidden md:inline-block" />
          </span>
        }
      >
        <Menu.Item key="team">Team</Menu.Item>
        <Menu.Item key="departments">Departments</Menu.Item>
      </Menu.SubMenu>
      <Menu.Item key="attendance">Attendance</Menu.Item>
      <Menu.Item key="leaves">Leaves</Menu.Item>
      <Menu.Item key="selfService">Self Service</Menu.Item>
      <Menu.Item key="reports">Reports</Menu.Item>
    </>
  );

  const renderUserPopoverContent = () => (
    <div style={{ width: 220 }}>
      <div className="flex items-center mb-4">
        <Avatar src={userImage} size="large" />
        <div className="ml-3">
          <Text className="block font-semibold">Leslie Alexander</Text>
          <Text className="block text-gray-500 text-sm">
            Leslie@oonatech.com
          </Text>
        </div>
      </div>
      <div className="border-t border-gray-300 my-2"></div>
      <div className="flex flex-col items-start">
        <Button type="text" block className="text-left p-0 mb-2">
          <Space>
            <span role="img" aria-label="Profile">
              👤
            </span>{" "}
            <span>Profile</span>
          </Space>
        </Button>
        <Button type="text" block className="text-left p-0 mb-2">
          <Space>
            <span role="img" aria-label="Languages">
              🌐
            </span>{" "}
            <span>
              Languages:
              <span className="bg-gray-200 p-[0.5px] rounded-sm mx-3">
                English
              </span>
            </span>
          </Space>
        </Button>
        <Button type="text" block className="text-left p-0 mb-2">
          <Space>
            <span role="img" aria-label="Logout">
              🔓
            </span>{" "}
            Logout
          </Space>
        </Button>
      </div>
    </div>
  );

  return (
    <Header className="flex items-center justify-between px-10 bg-white shadow-md">
      <div className="flex items-center">
        <img
          src={oonaLogo}
          alt="Logo"
          className="h-8 mr-10 hidden md:block cursor-pointer"
        />
        <div className="md:hidden">
          <Button
            type="text"
            onClick={showDrawer}
            icon={<MenuOutlined className="text-2xl cursor-pointer" />}
          />
        </div>
      </div>

      <div className="hidden md:flex flex-grow">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["dashboard"]}
          className="flex-grow border-b-0"
        >
          {menuItems}
        </Menu>
      </div>

      <div className="hidden md:flex">
        <Space size="large" align="center">
          <Popover
            content={
              <div style={{ width: 150 }}>
                <img
                  src={dashboardIcon}
                  alt="Dashboard"
                  className="w-full h-20"
                />
                <Text>Dashboard Content</Text>
              </div>
            }
            title="Dashboard"
            trigger="click"
            visible={dashboardModalVisible}
            onVisibleChange={(visible) => setDashboardModalVisible(visible)}
          >
            <img
              src={dashboardIcon}
              alt="Dashboard"
              className="w-6 h-6 cursor-pointer"
            />
          </Popover>

          <Popover
            content={
              <div style={{ width: 150 }}>
                <img src={groupIcon} alt="Group" className="w-full h-20" />
                <Text>Group Content</Text>
              </div>
            }
            title="Group"
            trigger="click"
            visible={groupModalVisible}
            onVisibleChange={(visible) => setGroupModalVisible(visible)}
          >
            <img
              src={groupIcon}
              alt="Group"
              className="w-6 h-6 cursor-pointer"
            />
          </Popover>

          <Popover
            content={
              <div style={{ width: 150 }}>
                <img src={settingIcon} alt="Settings" className="w-full h-20" />
                <Text>Settings Content</Text>
              </div>
            }
            title="Settings"
            trigger="click"
            visible={settingModalVisible}
            onVisibleChange={(visible) => setSettingModalVisible(visible)}
          >
            <img
              src={settingIcon}
              alt="Settings"
              className="w-6 h-6 cursor-pointer"
            />
          </Popover>

          <Popover
            content={renderUserPopoverContent()}
            title=""
            trigger="click"
            visible={userModalVisible}
            onVisibleChange={(visible) => setUserModalVisible(visible)}
            placement="bottomRight"
          >
            <Space>
              <Avatar src={userImage} size="large" className="cursor-pointer" />
            </Space>
          </Popover>
        </Space>
      </div>

      <Drawer
        title={
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              type="text"
              onClick={onClose}
              icon={<CloseOutlined className="text-2xl cursor-pointer" />}
            />
            <img src={oonaLogo} alt="Logo" className="h-8" />
          </div>
        }
        placement="left"
        closable={false}
        onClose={onClose}
        open={visible}
        className="md:hidden"
        bodyStyle={{ display: "flex", flexDirection: "column", height: "100%" }}
      >
        <div style={{ flexGrow: 1 }}>
          <Menu mode="inline" defaultSelectedKeys={["dashboard"]} width="100vw">
            {menuItems}
          </Menu>
        </div>
        <div className="border-t-[0.5px] border-gray-300 p-2"></div>
        <div className="mt-auto flex justify-around">
          <Space size="large" align="center">
            <img src={dashboardIcon} alt="Dashboard" className="w-6 h-6" />
            <img src={groupIcon} alt="Group" className="w-6 h-6" />
            <img src={settingIcon} alt="Settings" className="w-6 h-6" />
            <Space>
              <Text>Hello Emely</Text>
              <Avatar src={userImage} size="large" />
            </Space>
          </Space>
        </div>
      </Drawer>
    </Header>
  );
};

export default Navbar;
