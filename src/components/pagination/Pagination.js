import React from 'react';
import ReactPaginate from "react-paginate";

const Pagination = () => {

        return (
            <>
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={(e) => consle.log(e)}
                    pageRangeDisplayed={5}
                    pageCount={3}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </>
        );

};

export default Pagination;