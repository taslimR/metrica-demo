import { combineReducers } from 'redux';

import GenerateAdvice from './GenerateAdviceReducer';
import ErrorsReducer from './ErrorsReducer';
import LoadingReducer from './LoadingReducer';

export default combineReducers({
    generateAdvice: GenerateAdvice,
    error: ErrorsReducer,
    loading: LoadingReducer
});