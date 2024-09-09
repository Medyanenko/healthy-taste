import React from "react";
import { Select } from "antd";
import * as S from "../WrapperFilterStyles.styles";

const { Option } = Select;

const DishTypeFilter = ({setDishType}) => {
  const handleDishTypeChange = (value) => {
    setDishType(value);
  };

  return (
    <S.WrapperContent
      placeholder="Тип страви"
      onChange={handleDishTypeChange}
      allowClear
    >
      <Option value="sandwich">Бутерброди</Option>
      <Option value="salad">Салати</Option>
      <Option value="soup">Супи</Option>
      <Option value="main">Основні</Option>
      <Option value="sweet">Солодкі</Option>
    </S.WrapperContent>
  );
};

export default DishTypeFilter;
