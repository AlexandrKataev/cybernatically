import styles from './Header.module.scss';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.descr}>Data provided by</div>
      <div>IEX Cloud</div>
    </div>
  );
};
