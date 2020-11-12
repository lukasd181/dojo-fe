import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { matchAction } from "redux/actions/match.action";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";

const MatchPagination = () => {
  const dispatch = useDispatch();
  const matchTotalPages = useSelector((state) => state.match.totalPages);
  const matchCurrentPage = useSelector((state) => state.match.currentPage);

  const handlePageChange = (pageNumber) => {
    console.log("pageNumber", pageNumber);
    dispatch(matchAction.updatePage(pageNumber));
  };
  return (
    <div>
      {matchTotalPages ? (
        <Pagination
          activePage={matchCurrentPage}
          itemsCountPerPage={15}
          totalItemsCount={matchTotalPages * 15}
          pageRangeDisplayed={5}
          onChange={(pageNumber) => handlePageChange(pageNumber)}
          itemClass="page-item"
          linkClass="page-link"
        />
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default MatchPagination;
