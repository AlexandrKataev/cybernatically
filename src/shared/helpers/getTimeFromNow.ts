import moment from 'moment';

export const getTimeFromNow = (num: number) => {
  if (num === 0) {
    return '–';
  }
  const date = new Date(num);
  return moment(date).fromNow();
};
