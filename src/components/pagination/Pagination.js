import React from 'react';
import ReactPaginate from "react-paginate";
import {setPageCount} from "../../redux/slices/filterBtnsSlices";
import {useSelector, useDispatch} from "react-redux";

import styles from './Pagination.module.scss'

const Pagination = () => {
    const {pageCount} = useSelector(state => state.filter.pageCount)
    const dispatch = useDispatch();

        return (
            <>
                <ReactPaginate
                    className={styles.root}
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={(e) => dispatch(setPageCount(e.selected + 1))}
                    pageRangeDisplayed={4}
                    pageCount={3}
                    forcePage={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            </>
        );

};

export default Pagination;