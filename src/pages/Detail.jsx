import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { listApi } from "./../api/listApi";
import { Navigate, useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const { tab } = useSelector((state) => state.listSlice);
  const { id } = useParams();
  const [detailData, setDetailData] = useState({ title: "", content: "" });

  useEffect(() => {
    const data = { type: tab, id: id };
    listApi
      .getDetail(data)
      .then((res) =>
        setDetailData({ title: res.data.title, content: res.data.content })
      );
  }, [id, tab]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <SDetailWrapper>
      <SDetail>
        <h2>{detailData.title}</h2>
        <p>{detailData.content}</p>
      </SDetail>
      <SGobackButton onClick={goBack}>뒤로가기</SGobackButton>
    </SDetailWrapper>
  );
};

export default Detail;

const SDetailWrapper = styled.div`
  margin: 50px auto;
`;

const SDetail = styled.div`
  max-width: 1000px;
  border: 1px solid #eee;
  border-radius: 5px;
  padding: 20px;
  margin-bottom: 20px;

  & h2 {
    text-align: center;
    margin-bottom: 20px;
    font-size: 30px;
  }
`;

const SGobackButton = styled.button`
  padding: 10px 20px;
  background-color: #3f3ff3;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: 0.3s;
`;
