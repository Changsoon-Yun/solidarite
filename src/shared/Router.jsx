import React from "react";
import { Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Main from "../pages/Main";
const Router = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/:type?id=:id"} element={<Detail />} />
    </Routes>
  );
};

export default Router;
