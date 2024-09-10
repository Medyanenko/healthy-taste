import React from "react";
import Input from "antd/es/input/Input";

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
    />
  );
};

export default SearchFilter;
