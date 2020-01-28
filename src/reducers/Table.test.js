import reducer from './Table';

describe('Table reducers', () => {
  it('should return the default state if the action type is not defined', () => {
    const initialState = { someProp: 'some value' };
    expect(reducer(initialState, { type: 'UNDEFINED_ACTION' })).toEqual(initialState);
  });

  it('should return a new state containing a loading prop equal with true'
    + ' if the action type is FETCH_TABLE_REQUEST', () => {
    const initialState = {};
    expect(reducer(initialState, { type: 'FETCH_TABLE_REQUEST', payload: { id: 1 } })).toEqual({
      1: {
        loading: true,
      }
    });
  });

  it('should return a new state containing a loading prop equal with false and set data prop value'
    + ' if the action type is FETCH_TABLE_SUCCESS', () => {
    const initialState = {
      1: {
        loading: true,
      },
    };
    const data = { id: 1, state: 'open' };
    expect(reducer(initialState, { type: 'FETCH_TABLE_SUCCESS', payload: { id: 1, data, } })).toEqual({
      1: {
        loading: false,
        data,
      },
    });
  });

  it('should return a new state containing a loading prop equal with false and error prop equal with true'
    + ' if the action type is FETCH_TABLE_ERROR', () => {
    const initialState = {
      1: {
        loading: true,
      },
    };
    const error = { message: 'some error' };
    expect(reducer(initialState, { type: 'FETCH_TABLE_ERROR', payload: { id: 1, error, } })).toEqual({
      1: {
        loading: false,
        error: true,
      },
    });
  });
});
