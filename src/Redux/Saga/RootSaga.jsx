import { all } from 'redux-saga/effects';
import NotificationSaga from './Notifi_Saga';
import croSaga from './Cro_Saga';


function* rootSaga() {
  yield all([
    NotificationSaga(),
    croSaga(),
  ]);
}
export default rootSaga;