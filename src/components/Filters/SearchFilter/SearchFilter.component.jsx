import React, { useRef } from "react";
import { message } from "antd";
import DOMPurify from "dompurify";
import styled from "styled-components";

const SearchWrap = styled.div`
  position: relative;
  flex: 1;
  min-width: 180px;

  svg {
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-50%);
    color: var(--muted);
    pointer-events: none;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 38px;
  padding: 0 40px 0 40px;
  border: 1.5px solid var(--border);
  border-radius: 100px;
  background: #fff;
  font-size: 13px;
  font-family: "DM Sans", sans-serif;
  color: var(--text);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: var(--muted);
  }

  &:focus {
    border-color: var(--terra);
    box-shadow: 0 0 0 3px rgba(181, 96, 58, 0.08);
  }
`;

const ClearBtn = styled.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: var(--muted);
  font-size: 16px;
  line-height: 1;
  padding: 0;
  display: flex;
  align-items: center;

  &:hover {
    color: var(--terra);
  }
`;

const SearchFilter = ({ setSearchQuery }) => {
  const inputRef = useRef(null);

  const validate = (value) => {
    const sanitized = DOMPurify.sanitize(value);
    if (!sanitized.trim()) return null;
    const validPattern = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'\s]*$/;
    if (!validPattern.test(sanitized)) {
      message.error("Не валідний пошуковий запит");
      return null;
    }
    return sanitized;
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const result = validate(e.target.value);
      if (result !== null) setSearchQuery(result);
    }
  };

  const handleChange = (e) => {
    if (!e.target.value) setSearchQuery("");
  };

  const handleClear = () => {
    if (inputRef.current) inputRef.current.value = "";
    setSearchQuery("");
  };

  return (
    <SearchWrap>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.35-4.35" />
      </svg>
      <StyledInput
        ref={inputRef}
        type="text"
        placeholder="Знайти рецепт або інгредієнт..."
        onKeyDown={handleKeyDown}
        onChange={handleChange}
      />
      <ClearBtn type="button" onClick={handleClear} aria-label="Очистити">
        ×
      </ClearBtn>
    </SearchWrap>
  );
};

export default SearchFilter;
