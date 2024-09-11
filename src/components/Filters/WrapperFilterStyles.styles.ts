import styled from "styled-components";
import { Select } from "antd";

export const WrapperContent = styled(Select)`
    min-width: 150px;
    width: 150;
    margin-right: 5px;
    @media (max-width: 768px) {
    .ant-select-clear {
      font-size: 24px;
      top: 31.5%;
      height: 25px;
      width: 20px;
    }
  }
`;
