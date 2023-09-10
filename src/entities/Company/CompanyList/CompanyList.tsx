import { useGetCompanyListQuery } from '@services';
import styles from './CompanyList.module.scss';
import { Badge, Loader } from '@ui';
import { getTime } from '@helpers';
import { useAppDispatch, useAppSelector } from 'src/app/redux/hooks';
import { selectCurrentPage, setTotalPages } from '@features';

export const CompanyList = () => {
  const { data, error, isLoading } = useGetCompanyListQuery('');
  const currentPage = useAppSelector(selectCurrentPage);
  const dispatch = useAppDispatch();

  if (error) {
    return <div>Can not download list</div>;
  }

  if (data) {
    dispatch(setTotalPages(data.length));

    return (
      <div>
        <table className={styles.container}>
          <thead>
            <td>Symbol</td>
            <td>Sector</td>
            <td>Security</td>
            <td>Bid Price</td>
            <td>Bid Size</td>
            <td>Ask Price</td>
            <td>Ask Size</td>
            <td>Updated</td>
            <td>Last Sale Price</td>
            <td>last Sale Size</td>
            <td>Last Sale Time</td>
            <td>Volume</td>
          </thead>
          <tbody>
            {data.slice(0 + currentPage * 10, 10 + currentPage * 10).map((el) => (
              <tr>
                <td>{el.symbol}</td>
                <td>{el.sector}</td>
                <td>
                  <Badge str={el.securityType} />
                </td>
                <td>${el.bidPrice}</td>
                <td>{el.bidSize}</td>
                <td>${el.askPrice}</td>
                <td>{el.askSize}</td>
                <td>
                  <Badge str={getTime(el.lastUpdated)} />
                </td>
                <td>{el.lastSalePrice}</td>
                <td>{el.lastSaleSize}</td>
                <td>
                  <Badge str={getTime(el.lastSaleTime)} />
                </td>
                <td>{el.volume}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  if (isLoading) {
    return <Loader loading={isLoading} />;
  }

  return <div>Something went wrong</div>;
};
