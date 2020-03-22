// outsource dependencies
import { put, call, takeLatest } from "redux-saga/effects";

// local dependencies
import { TYPE } from "./types";
import { instanceAPI, openWeatherApiKey } from "../../services/api.service";

function* initializeSaga() {
  try {
    const { data } = yield call(instanceAPI, {
      url: "/data/2.5/weather",
      method: "GET",
      params: {
        q: "Kharkiv,ua",
        units: "metric",
        mode: "json",
        appid: openWeatherApiKey
      }
    });
    yield put({ type: TYPE.META, today: data });
  } catch ({ message }) {
    yield put({ type: TYPE.META, errorMessage: message });
  }
  yield put({ type: TYPE.META, initialized: true });
}

function* updateFilterSaga() {
  yield put({ type: TYPE.META, expectAnswer: true });
  try {
    const { data } = yield call(instanceAPI, {
      url: "/data/2.5/forecast",
      method: "GET",
      params: {
        q: "Kharkiv,ua",
        units: "metric",
        mode: "json",
        cnt: 5,
        appid: openWeatherApiKey
      }
    });
    yield put({ type: TYPE.META, list: data.list });
  } catch ({ message }) {
    yield put({ type: TYPE.META, errorMessage: message });
  }
  yield put({ type: TYPE.META, expectAnswer: false });
}

export default function*() {
  yield takeLatest(TYPE.INITIALIZE, initializeSaga);
  yield takeLatest(TYPE.UPDATE_DATA, updateFilterSaga);
}
