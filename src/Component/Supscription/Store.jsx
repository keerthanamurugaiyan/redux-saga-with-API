// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import notificationReducer from './Notifi_Reducer';
import rootSaga from './Notifi_Saga';
// import croReducer from './../croSlice'; // adjust the path as needed

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  notifications: notificationReducer,
//   cro: croReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;