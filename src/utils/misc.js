import moment from 'moment';

const getFormattedCurrentDateTime = (txTime) =>
  `${moment(txTime).format('YYYY-MM-DDTHH:mm:ss.SSS')}Z`;

export { getFormattedCurrentDateTime };
