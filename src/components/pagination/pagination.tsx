import React from 'react';
import ReactPaginate from 'react-paginate';
import { setPageCount } from '../../redux/slices/filterBtnsSlices';
import { useAppDispatch, useAppSelector } from '../../redux/hook';

import styles from './Pagination.module.scss';

const Pagination: React.FC = () => {
  const { pageCount1 } = useAppSelector((state) => state.filter);
  const dispatch = useAppDispatch();

  return (
    <>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        previousLabel="<"
        onPageChange={(e) => dispatch(setPageCount(e.selected + 1))}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={pageCount1 - 1}
      />
    </>
  );
};

export default Pagination;
