import { takeLatest, call, put } from 'redux-saga/effects';
import { setCroDocument } from '../Reducer/Cro_Slice';
import { fetchCroDocumentUrl } from '../../Services/Cro_Api';

function* handleLoadCroDocument(action) {
  try {
    const { croNumber, id, baseUrl } = action.payload;
    yield call(fetchCroDocumentUrl, { croId: id }); // correct param here
    yield put(setCroDocument({ croNumber, id, baseUrl }));
  } catch (error) {
    console.error('CRO PDF load failed:', error);
  }
}

export default function* croSaga() {
  yield takeLatest('cro/loadCroDocument', handleLoadCroDocument);
}