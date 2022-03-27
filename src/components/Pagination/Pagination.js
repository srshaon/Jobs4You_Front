import React from 'react';
import ReactPaginate from 'react-paginate';
import './Pagination.css'

const Pagination = ({pageCount,setPageNumber}) => {
    const changePage=({selected})=>{
setPageNumber(selected)
    }
    return (
        
        <ReactPaginate className='pagination'
        breakLabel={"..."}
        activeClassName={"active"}
        previousLabel={"previous"}
        nextLabel={"next"}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        // containerClassName={}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        peviousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}


        // nextLabel="next >"
        // onPageChange={handlePageClick}
        // pageRangeDisplayed={5}
        pageCount={pageCount}
        onPageChange={changePage}
        // previousLabel="< previous"
        // renderOnZeroPageCount={null}
      />
    );
};

export default Pagination;