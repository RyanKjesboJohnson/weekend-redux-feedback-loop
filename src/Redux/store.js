import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware, appReducer } from 'redux';

const feelingReducer = (state = '', action) => {
    if(action.type === 'ADD_FEELING'){
      const feelingParameter = action.payload;
      return feelingParameter;
  }
    return state;}

const understandingReducer = (state = '', action) => {
    if(action.type === 'ADD_UNDERSTANDING'){
    const understandingParameter = action.payload;
    return understandingParameter;
}
return state;
}

const supportReducer = (state = '', action) => {

    if(action.type === 'ADD_SUPPORT'){
    const supportParameter = action.payload;
    return supportParameter;
}
  return state;
}

const commentsReducer = (state = '', action) => {

    if(action.type === 'ADD_COMMENTS'){
    const commentsParameter = action.payload;
    return commentsParameter
}

  return state;
}

  
  const store = createStore(
    combineReducers({
        feelingReducer,
        understandingReducer,
        supportReducer,
        commentsReducer

    }),
    applyMiddleware(logger),
  );
  
  
  export default store;