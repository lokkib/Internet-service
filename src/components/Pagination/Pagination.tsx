import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './style.module.scss';
import GeneralFunction from '../../@types/ChangingStateProps';
import { useFetchAllItemsQuery } from '../../redux/api/avitoApi';

const Pagination: React.FC<GeneralFunction> = ({ onChangePage }) => {
  const { data } = useFetchAllItemsQuery();
  if (data) {
    return (
      <ReactPaginate
        containerClassName={styles.container}
        className={styles.root}
        activeClassName={styles.activeItem}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(e) => onChangePage && onChangePage(e.selected + 1)}
        pageRangeDisplayed={2}
        pageCount={Math.ceil(data.length / 4)}
        previousLabel="<"
      />
    );
  }
  return null
};

export default Pagination;
