import * as ActionTypes from '../actions/types';

const defaultState = {
  generateAdvice: ''
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GENERATE_ADVICE:
      return { ...state, generateAdvice: '' };
    case ActionTypes.GENERATE_ADVICE_SUCCEEDED:
      return { ...state, generateAdvice: parse(action.payload) };
    case ActionTypes.GENERATE_ADVICE_FAILED:
      return { ...state, generateAdvice: 'No internet' };
    default:
      return state;
  }
};

const parse = data => {
  console.log('~~~', data);
  if (data.header.responseCode !== '200') {
    // console.log(data.header.responseMessage);
    return data.header.responseMessage.substr(0, Math.min(200, data.header.responseMessage.length));
  }
  return '';
};
