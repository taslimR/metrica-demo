import axios from 'axios';

import { getFormattedCurrentDateTime } from '../utils/misc';

const URL = 'http://127.0.0.1:8000';

const generateDefaultHTTPHeaders = () => ({
  Accept: 'application/json',
  ContentType: 'application/json'
});

const generateDefaultDataHeader = user => ({
  login: user,
  requestTime: getFormattedCurrentDateTime()
});

const generateAdvice = payload => {
  const reqType = 'generate-salary-advice';
  const url = `${URL}/${reqType}`;

  return axios({
    method: 'post',
    url,
    headers: generateDefaultHTTPHeaders(),
    data: {
      header: generateDefaultDataHeader(payload.user),
      meta: {},
      body: {
        month: payload.month,
        payThrough: payload.payThrough,
        filter: payload.filter,
        wing: payload.wing
      }
    }
  });
};

export { generateAdvice };
