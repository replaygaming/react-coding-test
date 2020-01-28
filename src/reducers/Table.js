import { handleActions } from 'redux-actions';
import produce from 'immer';
import {
	fetchTableRequest,
	fetchTableSuccess,
	fetchTableError,
} from '../actions/Table';

export default handleActions({
	[fetchTableRequest]: produce((state, action) => {
		state[action.payload.id] = {};
		state[action.payload.id].loading = true;
	}),
	[fetchTableSuccess]: produce((state, action) => {
		state[action.payload.id].loading = false;
		state[action.payload.id].data = action.payload.data;
	}),
	[fetchTableError]: produce((state, action) => {
		state[action.payload.id].loading = false;
		state[action.payload.id].error = true;
	}),
}, {});
