import React from "react";
import { ConfigProvider } from "antd";
import LayoutContainer from "./components/Layout/LayoutContainer.component";
import "./App.css";

const App = () => {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#b5603a",
          colorBorder: "#e8ddd4",
          borderRadius: 100,
          fontFamily: "'DM Sans', system-ui, sans-serif",
          colorBgContainer: "#ffffff",
          colorText: "#2a1f17",
          colorTextPlaceholder: "#9d8878",
        },
      }}
    >
      <LayoutContainer />
    </ConfigProvider>
  );
};

export default App;
