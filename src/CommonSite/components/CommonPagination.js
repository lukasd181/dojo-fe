import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { matchAction } from "redux/actions/match.action";
import ReactDOM from "react-dom";
import Pagination from "react-js-pagination";

const CommonPagination = ({currentPage, totalPages, handlePageChange, limit}) => {
  return (
    <div>
      
      <Pagination
        activePage={currentPage}
        itemsCountPerPage={limit}
        totalItemsCount={totalPages * limit}
        pageRangeDisplayed={5}
        onChange={(pageNumber) => handlePageChange(pageNumber)}
        itemClass="page-item"
        linkClass="page-link"
      />
    </div>
  );
};

export default CommonPagination;
