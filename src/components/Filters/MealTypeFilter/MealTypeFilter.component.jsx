import React from "react";
import { Select } from "antd";
import * as S from "../WrapperFilterStyles.styles";

const { Option } = Select;

const MealTypeFilter = ({ setMealType }) => {
  const handleMealTypeChange = (value) => {
    setMealType(value);
  };

  return (
    <S.WrapperContent
      placeholder="Тип прийому їжі"
      onChange={handleMealTypeChange}
      allowClear
      size='large'
    >
      <Option value="breakfast">Сніданок</Option>
      <Option value="lunch">Обід</Option>
      <Option value="dinner">Вечеря</Option>
      <Option value="snack">Перекус</Option>
    </S.WrapperContent>
  );
};

export default MealTypeFilter;
