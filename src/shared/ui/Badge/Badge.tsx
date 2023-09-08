import styles from './Badge.module.scss';

export const Badge = ({ str }: { str: string }) => {
  return <span className={styles.container}>{str}</span>;
};
