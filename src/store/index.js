import { combineReducers, legacy_createStore as createStore } from 'redux';
import { productsReducer } from './productsReducer';
import { usersReducer } from './userReducer';

export default createStore(
  combineReducers({
    users: usersReducer,
    products: productsReducer
  }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

// store.subscribe(() => console.log(store.getState()));
// store.dispatch({type: ADD_TODO_ACTION, payload: {title: 'Demo'}}); 