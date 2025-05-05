// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import notificationReducer from '../Redux/Reducer/Notifi_Reducer';
import rootSaga from '../Redux/Saga/RootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  notifications: notificationReducer,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;