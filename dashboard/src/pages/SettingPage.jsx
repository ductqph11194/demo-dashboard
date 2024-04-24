import React, { useState } from "react";
import "./setting.scss";
import { Input, ColorPicker, DatePicker } from "antd";
import MainLayout from "../layout/MainLayout";
import dayjs from 'dayjs'
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);
const dateFormat = 'YYYY/MM/DD';
const SettingPage = () => {


  var currentDate = dayjs()

  const [data, setDataSetting] = useState({ title: 'test', email: 'trinhduc@gmail.com', color: '#000', activeDate: '25/04/2024' })
  console.log('currentDate', data.activeDate);
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  return (
    <MainLayout>
      <div className="wrapper-setting">
        <div className="name-page">Settings</div>
        <div className="list-input">
          <div className="item">
            <div className="title">Title:</div>
            <Input value={data.title} placeholder="Basic usage" />
          </div>
          <div className="item">
            <div className="title">Email:</div>
            <Input value={data.email} placeholder="Basic usage" />
          </div>
          <div className="item">
            <div className="title">Background color:</div>
            <ColorPicker showText={true} size={"large"} defaultValue={data.color} />
          </div>
          <div className="item">
            <div className="title">Active date:</div>
            <DatePicker defaultValue={dayjs(data.activeDate, dateFormat)} format={dateFormat} onChange={onChange} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default SettingPage;
