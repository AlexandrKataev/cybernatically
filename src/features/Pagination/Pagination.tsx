import Pagination from '@mui/material/Pagination/Pagination';
import styles from './Pagination.module.scss';
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { selectTotalPages, setCurrentPage } from './model';
import { makeStyles } from '@mui/material';

export const PaginationCustom = () => {
  const totalPages = useAppSelector(selectTotalPages) || 0;
  const dispatch = useAppDispatch();

  const handleChangePage = (e: any, page: number) => {
    dispatch(setCurrentPage(page));
  };
  return (
    <div className={styles.container}>
      {totalPages > 0 && (
        <Pagination
          className={styles.pagination}
          count={totalPages}
          color="primary"
          onChange={(e, page) => handleChangePage(e, page)}
          shape="rounded"
          size="large"
        />
      )}
    </div>
  );
};
