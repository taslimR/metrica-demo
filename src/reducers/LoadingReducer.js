import * as ActionTypes from '../actions/types';

const defaultState = {
  generateAdvice: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.GENERATE_ADVICE:
      return { ...state, generateAdvice: true };
    case ActionTypes.GENERATE_ADVICE_SUCCEEDED:
      return { ...state, generateAdvice: false };
    case ActionTypes.GENERATE_ADVICE_FAILED:
      return { ...state, generateAdvice: false };
    default:
      return state;
  }
};
