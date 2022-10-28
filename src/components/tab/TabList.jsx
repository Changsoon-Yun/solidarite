import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { changeTab } from "../../redux/listSlice";
import listSlice from "../../redux/listSlice";

const TabList = () => {
  const dispatch = useDispatch();
  const tabItem = ["a", "b"];

  const { tab } = useSelector((state) => state.listSlice);

  const changeTabHandler = (text) => {
    dispatch(changeTab(text));
  };

  return (
    <STabList>
      {tabItem.map((item) => (
        <STabItem
          onClick={() => {
            changeTabHandler(item);
          }}
          key={item}
          className={tab === item && "isActive"}
        >
          {item.toUpperCase()} Posts
        </STabItem>
      ))}
    </STabList>
  );
};

export default TabList;

const STabList = styled.ul`
  display: flex;
  margin-top: 30px;
  border-bottom: 1px solid #eee;
`;

const STabItem = styled.li`
  padding: 10px;
  font-weight: 700;
  font-size: 14px;
  transition: 0.3s;
  cursor: pointer;

  &.isActive {
    color: #3f3ff3;
  }

  &:hover {
    background-color: #f0f0f0;
    border-radius: 3px;
  }
`;
