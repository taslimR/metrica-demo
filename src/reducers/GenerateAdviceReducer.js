import * as ActionTypes from '../actions/types';

const defaultState = {
    file : null
}

export default (state = defaultState, action) => {
    switch (action.type) {
      case ActionTypes.GENERATE_ADVICE_SUCCEEDED:
        return parse(state, action.payload);
      default:
        return state;
    }
};

const parse = (state, data) => {
    console.log(data);
    if (data.header.responseCode === '200') {
      if (data.body.data != null) return { ...state, file: data.body };
    }
    return state;
  };
  