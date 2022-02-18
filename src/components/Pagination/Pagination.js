import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css'

const Pagination = ({pageCount,setPageNumber}) => {
    const changePage=({selected})=>{
setPageNumber(selected)
    }
    return (
        <ReactPaginate className='pagination'
        breakLabel="..."
        nextLabel="next >"
        // onPageChange={handlePageClick}
        // pageRangeDisplayed={5}
        pageCount={pageCount}
        onPageChange={changePage}
        previousLabel="< previous"
        // renderOnZeroPageCount={null}
      />
    );
};

export default Pagination;