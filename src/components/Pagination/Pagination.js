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
        previousLabel={"<Previous"}
        nextLabel={"Next>"}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        containerClassName={"paginationBttns"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        peviousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakLinkClassName={"page-link"}
        pageCount={pageCount}
        onPageChange={changePage}
      />
    );
};

export default Pagination;