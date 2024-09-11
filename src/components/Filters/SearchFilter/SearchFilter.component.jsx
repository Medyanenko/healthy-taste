import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchFilter = ({ setSearchQuery }) => {
  const handleSearch = (value) => {
    setSearchQuery(value);
  };

  return (
    <Search
      placeholder="Пошук рецепта"
      onSearch={handleSearch}
      style={{ flexGrow: 1 }}
      allowClear
      size="large"
    />
  );
};

export default SearchFilter;
