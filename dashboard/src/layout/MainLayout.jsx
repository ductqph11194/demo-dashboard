import React from "react";
import Sidebar from "../components/Sidebar";
import "./mainLayout.scss";
const MainLayout = ({ children }) => {
  return (
    <>
      <div>
        <div className={"main"}>
          <Sidebar />
          <div className={"children"}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
