import * as ActionTypes from './types';

export const generateAdvice = data => ({
    type: ActionTypes.GENERATE_ADVICE,
    payload: data
  });
  