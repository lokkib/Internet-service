import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './style.module.scss';
import generalFunction from '../../@types/ChangingStateProps';

const Pagination: React.FC<generalFunction> = ({ onChangePage }) => {
  return (
    <ReactPaginate
      containerClassName={styles.container}
      className={styles.root}
      activeClassName={styles.activeItem}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => onChangePage && onChangePage(e.selected + 1)}
      pageRangeDisplayed={2}
      pageCount={3}
      previousLabel="<"
    />
  );
};

export default Pagination;
