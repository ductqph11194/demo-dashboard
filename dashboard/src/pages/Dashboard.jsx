/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect } from "react";
import MainLayout from "../layout/MainLayout";
import { Tabs } from "antd";
import LineChart from "../components/LineChart";
import { useNavigate } from "react-router-dom";
import CollumChart from "../components/CollumChart";

const items = [
  {
    key: "1",
    label: "Subcription",
    children: <LineChart />,
  },
  {
    key: "2",
    label: "Revenue",
    children: <CollumChart />,
  },
];
const Dashboard = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/dashboard/subcription", { state: "subcription" });
  }, []);

  const onChange = (key) => {
    if (key === "1") {
      navigate("/dashboard/subcription", { state: "subcription" });
    }
    if (key === "2") {
      navigate("/dashboard/revenue", { state: "subcription" });
    }
  };
  return (
    <MainLayout>
      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </MainLayout>
  );
};

export default Dashboard;
