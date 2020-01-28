import React from 'react';
import { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import { fetchTableRequest } from '../../actions/Table';
import Table from '../../components/Table';
import TableContainer from './Table';

jest.mock('../../components/Table', () => () => <span>table rendered</span>);
jest.mock('../../actions/Table', () => ({
  fetchTableRequest: jest.fn(() => ({ type: 'REQUEST' }))
}));

describe('Table container', () => {
  let state;
  let store;
  let component;
  let props;
  const createMockStore = configureMockStore();

  beforeEach(() => {
    props = {
      match: {
        params: {
          id: 1,
        },
      },
    };
    state = {
      table: {
        1: {
          loading: false,
          data: {
            id: 1,
            state: 'open',
          },
          error: false,
        },
        2: {
          loading: false,
          data: {
            id: 2,
            state: 'closed',
          },
          error: false,
        },
      },
    };
  });

  describe('mapStateToProps', () => {
    it('should pass right state table props', () => {
      store = createMockStore(state);
      component = mount(<TableContainer store={store} {...props} />);
      expect(component.find('TableHOC').props()).toMatchObject({
        ...state.table[1],
      });
    });
  });

  describe('mapDispatchToProps', () => {
    it('should bind the necessary actions to props', () => {
      store = createMockStore(state);
      component = mount(<TableContainer store={store} {...props} />);
      expect(component.find('TableHOC').props().actions.fetchTableRequest).toBeDefined();
    });
  });

  describe('render', () => {
    it('should render a loading message if state loading prop value is truthy', () => {
      state.table[1].loading = true;
      store = createMockStore(state);
      component = mount(<TableContainer store={store} {...props} />);
      expect(component.find('p').text()).toMatch(/loading/i)
    });

    it('should render an error message if state error prop value is truthy', () => {
      state.table[1].error = true;
      store = createMockStore(state);
      component = mount(<TableContainer store={store} {...props} />);
      expect(component.find('p').text()).toMatch(/something happened/i)
    });

    it('should render a table if state loading and error props values are falsy and state data prop value is defined', () => {
      store = createMockStore(state);
      component = mount(<TableContainer store={store} {...props} />);
      expect(component.find('span').text()).toMatch(/table/i);
      expect(component.find(Table).props()).toMatchObject({
        table: state.table[1].data,
      });
    });

    it('should call fetchTableRequest action on mount / every id param change', () => {
      store = createMockStore(state);
      component = mount(<TableContainer store={store} {...props} />);
      expect(fetchTableRequest).toHaveBeenCalledWith({ id: 1 });
    });
  });
});
