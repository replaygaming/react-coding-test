import { createAction } from 'redux-actions';

export const FETCH_TABLE_REQUEST = 'FETCH_TABLE_REQUEST';
export const FETCH_TABLE_SUCCESS = 'FETCH_TABLE_SUCCESS';
export const FETCH_TABLE_ERROR = 'FETCH_TABLE_ERROR';

export const fetchTableRequest = createAction(FETCH_TABLE_REQUEST);
export const fetchTableSuccess = createAction(FETCH_TABLE_SUCCESS);
export const fetchTableError = createAction(FETCH_TABLE_ERROR);
