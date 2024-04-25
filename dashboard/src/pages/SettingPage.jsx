import React, { useState } from "react";
import "./setting.scss";
import { Input, ColorPicker, DatePicker, Form, Button } from "antd";
import MainLayout from "../layout/MainLayout";
import dayjs from "dayjs";

const SettingPage = () => {
  const [data] = useState({
    email: "trinhduc@gmail.com",
    title: "trinhduc",
    bgColor: "#000",
    activeDate: dayjs("2001-09-29T08:09:31.000Z"),
  });
  const [changeValue, setChangeValue] = useState(false);
  const [form] = Form.useForm();
  const onFinish = (value) => {
    const dataSetting = {
      email: value.email,
      title: value.title,
      bgColor: value.bgColor,
      activeDate: value.activeDate.format("DD/MM/YYYY"),
    };
    console.log("Data setting", dataSetting);
  };
  const onChange = (data) => {
    setChangeValue(true);
  };

  return (
    <MainLayout>
      <div className="wrapper-setting">
        <div className="name-page">Settings</div>

        <Form
          form={form}
          name="register"
          onFinish={onFinish}
          onValuesChange={onChange}
          initialValues={data}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <div className="list-input">
            <div className="item">
              <div className="title">Title:</div>
              <Form.Item
                name="title"
                rules={[
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="item">
              <div className="title">Email:</div>
              <Form.Item
                name="email"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
            </div>
            <div className="item">
              <div className="title">Background color:</div>

              <Form.Item name="bgColor">
                <ColorPicker
                  showText={true}
                  size={"medium"}
                  // defaultValue={data.color}
                />
              </Form.Item>
            </div>
            <div className="item">
              <div className="title">Active date:</div>

              <Form.Item name="activeDate">
                <DatePicker
                  allowClear={false}
                  format="DD/MM/YYYY"
                  // value={dayjs(data.activeDate)}
                />
              </Form.Item>
            </div>
          </div>

          {changeValue ? (
            <Button htmlType="submit" type="primary">
              Save
            </Button>
          ) : (
            ""
          )}
        </Form>
      </div>
    </MainLayout>
  );
};

export default SettingPage;
