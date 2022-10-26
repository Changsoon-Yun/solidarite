import React from "react";
import styled from "styled-components";

const Layout = (props) => {
  return <SLayout>{props.children}</SLayout>;
};

export default Layout;

const SLayout = styled.div`
  max-width: 1000px;
  width: 100%;
  padding: 25px;
  margin: 0 auto;
`;
