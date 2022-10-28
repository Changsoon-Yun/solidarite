import instance from "./axios";

export const listApi = {
  //타입별 무한스크롤 조회
  getList: (data) =>
    instance.get(`${data.type}-posts?page=${data.page}&search=${data.search}`),

  //타입별 상세페이지 조회
  getDetail: (data) => instance.get(`${data.type}-posts/${data.id}`),
};
