import { fork, all } from 'redux-saga/effects';
import { watchTableRequests } from './Table';

export default function* () {
	yield all([
		fork(watchTableRequests),
	]);
}
