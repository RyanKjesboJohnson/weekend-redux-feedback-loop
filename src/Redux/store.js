import logger from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';

const feedbackReducer = (state = {}, action) => {
    if(action.type === 'ADD_FEELING'){
      const feelingParameter = action.payload;
      return state.feeling = Number(feelingParameter);
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