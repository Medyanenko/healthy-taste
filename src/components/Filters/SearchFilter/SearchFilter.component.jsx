import React from "react";
import { Input, message } from "antd";
import DOMPurify from "dompurify";

const { Search } = Input;

const SearchFilter = ({ setSearchQuery }) => {
  const handleSearch = (value) => {
    const sanitizedValue = DOMPurify.sanitize(value);

    if (!sanitizedValue.trim()) {
      message.error("Не валідний пошуковий запит");
      return;
    }
    const validPattern = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'\s]*$/;
    if (!validPattern.test(sanitizedValue)) {
      message.error("Не валідний пошуковий запит");
      return;
    }
    setSearchQuery(sanitizedValue);
  };

  return (
    <Search
      placeholder="Пошук рецепта або інгредієнтів"
      onSearch={handleSearch}
      style={{ flexGrow: 1 }}
      allowClear
      size="large"
    />
  );
};

export default SearchFilter;
