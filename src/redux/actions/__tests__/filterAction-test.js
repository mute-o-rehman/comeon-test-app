import configureMockStore from 'redux-mock-store';
import * as actions from '../filterAction';
import * as types from '../types';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('filter actions test', () => {

  it('creates FILTER_BY_CATEGORY action', () => {
    const expectedActions = [
      { type: types.FILTER_BY_CATEGORY, payload: 0 }
    ];

    const store = mockStore({});

    store.dispatch(actions.filterByCategory(0));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates FILTER_BY_NAME action', () => {
    const expectedActions = [
      { type: types.FILTER_BY_NAME, payload: 'star' }
    ];

    const store = mockStore({});

    store.dispatch(actions.filterByName('star'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates RESET_FILTERS action', () => {
    const expectedActions = [
      { type: types.RESET_FILTERS }
    ];

    const store = mockStore({});

    store.dispatch(actions.resetAllFilter());
    expect(store.getActions()).toEqual(expectedActions);
  });
});