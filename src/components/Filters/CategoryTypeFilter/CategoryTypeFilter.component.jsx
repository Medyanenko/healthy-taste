import React from 'react';
import { Select } from 'antd';
import * as S from '../WrapperFilterStyles.styles';

const { Option } = Select;

const CategoryTypeFilter = ({ setCategoryType }) => {
  const handleCategoryTypeChange = (value) => {
    setCategoryType(value);
  };

  return (
    <S.WrapperContent
      placeholder='Категорія'
      onChange={handleCategoryTypeChange}
      allowClear
    >
      <Option value='all'>Всі</Option>
      <Option value='favorite'>Улюблені</Option>
      <Option value='festive'>Святкові</Option>
      <Option value='disliked'>Несмачні</Option>
    </S.WrapperContent>
  );
};

export default CategoryTypeFilter;
