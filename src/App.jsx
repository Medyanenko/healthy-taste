import React from "react";
import { ConfigProvider, theme } from "antd";
import LayoutContainer from "./components/Layout/LayoutContainer.component";

const App = () => {
  return (
    <ConfigProvider theme={theme}>
     <LayoutContainer/>
    </ConfigProvider>
  );
};

export default App;
