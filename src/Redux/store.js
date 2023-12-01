import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const feedbackReducer = (state = {}, action) => {
    if(action.type === 'ADD_FEELING'){
      const feelingParameter = action.payload;
      return state.feeling = Number(feelingParameter);
  }
    if(action.type === 'ADD_UNDERSTANDING'){
    const understandingParameter = action.payload;
    return state.understanding = Number(understandingParameter);
}
    if(action.type === 'ADD_SUPPORT'){
    const supportParameter = action.payload;
    return state.support = Number(supportParameter);
}
  return state;
}
  
  const store = createStore(
    combineReducers({
      feedbackReducer
    }),
    applyMiddleware(logger),
  );
  
  
  export default store;