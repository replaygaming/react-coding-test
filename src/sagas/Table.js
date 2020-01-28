import { takeLatest, call, put } from 'redux-saga/effects';
import { fetchTableData } from '../services/Table';
import {
	FETCH_TABLE_REQUEST,
	fetchTableSuccess,
	fetchTableError,
} from '../actions/Table';

export function* requestTableData(action) {
	const { id } = action.payload;

	try {
		const response = yield call(fetchTableData, id);
		yield put(fetchTableSuccess({
			id,
			data: response.data,
		}));
	} catch (error) {
		yield put(fetchTableError({ id, error }));
	}
}

export function* watchTableRequests() {
	yield takeLatest(FETCH_TABLE_REQUEST, requestTableData);
}
