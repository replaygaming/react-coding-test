import { call, takeLatest, put } from 'redux-saga/effects';
import * as services from '../services/Table';
import * as sagas from './Table';

describe('Table sagas', () => {
  describe('watchTableRequests', () => {
    it('should wait for a FETCH_TABLE_REQUEST action', () => {
      const generator = sagas.watchTableRequests();
      expect(generator.next().value).toEqual(
        takeLatest('FETCH_TABLE_REQUEST', sagas.requestTableData),
      );
      expect(generator.next().done).toEqual(true);
    });
  });

  describe('requestTableData', () => {
    it('should call fetchTableData services method and'
      + ' dispatch a FETCH_TABLE_SUCCESS action in case of success', () => {
      const data = { id: 1, state: 'open' };
      const generator = sagas.requestTableData({ payload: { id: 1 } });
      expect(generator.next().value).toEqual(call(services.fetchTableData, 1));
      expect(generator.next({ data }).value).toEqual(
        put({
          type: 'FETCH_TABLE_SUCCESS',
          payload: {
            id: 1,
            data,
          },
        }),
      );
      expect(generator.next().done).toEqual(true);
    });

    it('should call fetchTableData services method and'
      + ' dispatch a FETCH_TABLE_ERROR action in case of error', () => {
      const error = { message: 'error' };
      const generator = sagas.requestTableData({ payload: { id: 1 } });
      expect(generator.next().value).toEqual(call(services.fetchTableData, 1));
      expect(generator.throw(error).value).toEqual(
        put({
          type: 'FETCH_TABLE_ERROR',
          payload: {
            id: 1,
            error,
          },
        }),
      );
      expect(generator.next().done).toEqual(true);
    });
  });
});
