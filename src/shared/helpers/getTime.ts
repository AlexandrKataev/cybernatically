import moment from 'moment';

export const getTime = (num: number) => {
  if (num === 0) {
    return '–';
  }
  const date = new Date(num);
  return moment(date).format('LT');
};
