import React from "react";
import "./setting.scss";
import { Input } from "antd";
import MainLayout from "../layout/MainLayout";
const SettingPage = () => {
  return (
    <MainLayout>
      <div className="wrapper-setting">
        <div className="name-page">Settings</div>
        <div className="list-input">
          <div className="item">
            <div className="title">Title:</div>
            <Input placeholder="Basic usage" />
          </div>
          <div className="item">
            <div className="title">Email:</div>
            <Input placeholder="Basic usage" />
          </div>
          <div className="item">
            <div className="title">Background color:</div>
            <Input placeholder="Basic usage" />
          </div>
          <div className="item">
            <div className="title">Active date:</div>
            <Input placeholder="Basic usage" />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SettingPage;
