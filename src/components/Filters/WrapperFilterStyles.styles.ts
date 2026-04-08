import styled from "styled-components";
import { Select } from "antd";

export const WrapperContent = styled(Select)`
  && {
    .ant-select-selector {
      height: 38px !important;
      border-radius: 100px !important;
      border-color: var(--border) !important;
      background: #fff !important;
      padding: 0 16px !important;
      display: flex;
      align-items: center;
      font-size: 13px;
      font-family: "DM Sans", sans-serif;
      color: var(--muted) !important;
      transition: border-color 0.2s, box-shadow 0.2s;
    }

    .ant-select-selection-placeholder {
      font-size: 13px;
      color: var(--muted);
      line-height: 36px;
    }

    .ant-select-selection-item {
      font-size: 13px;
      color: var(--text);
      line-height: 36px !important;
    }

    .ant-select-arrow {
      color: var(--muted);
      font-size: 11px;
    }

    .ant-select-clear {
      background: #fff;
      color: var(--muted);
    }

    &:hover .ant-select-selector {
      border-color: var(--terra) !important;
    }

    &.ant-select-focused .ant-select-selector {
      border-color: var(--terra) !important;
      box-shadow: 0 0 0 3px rgba(181, 96, 58, 0.08) !important;
    }
  }

  min-width: 130px;
  flex-shrink: 0;

  @media (max-width: 480px) {
    min-width: calc(50% - 4px);
    flex-grow: 1;
  }
` as typeof Select;
