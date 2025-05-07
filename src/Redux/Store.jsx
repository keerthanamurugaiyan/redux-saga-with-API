// store.js
import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import notificationReducer from '../Redux/Reducer/Notifi_Reducer';
import croSlice from '../Redux/Reducer/Cro_Slice';
import rootSaga from '../Redux/Saga/RootSaga';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  notifications: notificationReducer,
  croSlice: croSlice,
});

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;