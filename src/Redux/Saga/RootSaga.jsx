import { all } from 'redux-saga/effects';
import NotificationSaga from './Notifi_Saga';


function* rootSaga() {
  yield all([
    NotificationSaga(),
  ]);
}
export default rootSaga;