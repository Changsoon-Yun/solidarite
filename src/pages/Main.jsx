import React from "react";
import styled from "styled-components";
import TabList from "../components/tab/TabList";
import SearchInput from "./../components/search/SearchInput";
import PostList from "./../components/posts/PostList";

const Main = () => {
  return (
    <>
      <STitle>게시물을 검색해보세요</STitle>
      <SearchInput />
      <TabList />
      <PostList />
    </>
  );
};

export default Main;

const STitle = styled.p`
  margin: 20px 0;
  font-size: 21px;
  text-align: center;
  color: #6b7280;
`;
