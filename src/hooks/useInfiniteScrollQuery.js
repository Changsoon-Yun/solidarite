import { useInfiniteQuery } from "react-query";
import { listApi } from "../api/listApi";
import { useSelector } from "react-redux";

export const useInfiniteScrollQuery = () => {
  const { tab, page } = useSelector((state) => state.listSlice);
  const getPageBoard = async ({ pageParams = 0 }) => {
    const data = { type: tab, page: pageParams, search: "" };
    const res = await listApi.getList(data);

    return {
      // 실제 데이터
      list_data: res.data.content,
      // 반환 값에 현재 페이지를 넘겨주자
      current_page: page,
      // 페이지가 마지막인지 알려주는 서버에서 넘겨준 true/false 값
      isLast: res.data.length !== 10,
    };
  };

  const {
    data: getList,
    fetchNextPage: getNextPage,
    isSuccess: getBoardIsSuccess,
    hasNextPage: getNextPageIsPossible,
  } = useInfiniteQuery(["list"], getPageBoard, {
    getNextPageParam: (lastPage, pages) => {
      if (!lastPage.isLast) return lastPage.current_page + 1;
      return undefined;
    },
  });

  console.log(getList);

  return { getList, getNextPage, getBoardIsSuccess, getNextPageIsPossible };
};
