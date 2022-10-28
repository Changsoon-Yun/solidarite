import React from "react";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { listApi } from "./../../api/listApi";

const PostList = () => {
  const navigate = useNavigate();

  const [list, setList] = useState([]);
  const { tab, page } = useSelector((state) => state.listSlice);

  const [target, inView] = useInView();

  useEffect(() => {
    const data = { type: tab, page: page, search: "" };
    listApi.getList(data).then((res) => setList(res.data));
  }, [tab]);

  const goDetail = (type, id) => {
    navigate(`/${type}/${id}`);
  };

  return (
    <SPostList>
      {list.map((list) => (
        <SPostItem
          onClick={() => {
            goDetail(list.type, list.id);
          }}
          key={list.id}
          ref={list.length - 1 ? target : null}
        >
          <h3>
            <span>{list.id}.</span>
            {list.title}
          </h3>
          <p>{list.content}</p>
        </SPostItem>
      ))}
    </SPostList>
  );
};

export default PostList;

const SPostList = styled.ol`
  margin-top: 10px;
  border: 1px solid #eee;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;
`;

const SPostItem = styled.li`
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #eee;
    border-radius: 3px;
  }

  & h3 {
    margin-bottom: 5px;
    font-size: 16px;

    & span {
      color: #3f3ff3;
      margin-right: 5px;
    }
  }

  & p {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;
