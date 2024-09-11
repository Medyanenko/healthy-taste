import React from 'react';
import { Select } from 'antd';
import * as S from '../WrapperFilterStyles.styles';

const { Option } = Select;

const MenuTypeFilter = ({ setMenuType }) => {
  const handleMenuTypeChange = (value) => {
    setMenuType(value);
  };

  return (
    <S.WrapperContent
      placeholder='Тип меню'
      onChange={handleMenuTypeChange}
      allowClear
      size='large'
    >
      <Option value='vegan'>Веган</Option>
      <Option value='meat'>Класичне</Option>
    </S.WrapperContent>
  );
};

export default MenuTypeFilter;
