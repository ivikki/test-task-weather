// outsource dependencies
import { fork } from 'redux-saga/effects';

// local dependencies
import appSaga from './App/saga';

export default function * () {
    yield fork(appSaga);
    // other sagas
}
