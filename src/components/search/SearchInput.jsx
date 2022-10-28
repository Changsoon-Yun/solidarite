import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { RiDeleteBack2Fill } from "react-icons/ri";

const SearchInput = () => {
  return (
    <SInputWrapper>
      <BsSearch />
      <SSearchInput type="text" placeholder="검색어를 입력하세요" />
      <RiDeleteBack2Fill />
    </SInputWrapper>
  );
};

export default SearchInput;

const SInputWrapper = styled.div`
  width: 360px;
  margin: 0 auto;
  border: 1px solid rgb(229, 231, 235);
  border-radius: 3px;
  height: 50px;
  display: flex;
  align-items: center;

  & > svg {
    color: #777;
    margin: 10px;
    font-size: 14px;
  }

  &:focus-within {
    border: 1px solid red;
  }
`;

const SSearchInput = styled.input`
  border: none;
  flex: 1;

  &::placeholder {
    color: #eee;
  }

  &:focus,
  &:active {
    border: none;
    outline: none;
  }
`;
