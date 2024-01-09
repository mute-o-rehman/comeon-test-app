
import configureMockStore from 'redux-mock-store';
import * as actions from '../loadGameAction';
import * as types from '../types';

const middlewares = [];
const mockStore = configureMockStore(middlewares);

describe('load game actions test', () => {

  it('creates LOAD_GAME action', () => {
    const expectedActions = [
      { type: types.LOAD_GAME, payload: 'starburst' }
    ];

    const store = mockStore({});

    store.dispatch(actions.loadGame('starburst'));
    expect(store.getActions()).toEqual(expectedActions);
  });

  it('creates BACK_TO_LOBBY action', () => {
    const expectedActions = [
      { type: types.BACK_TO_LOBBY }
    ];

    const store = mockStore({});

    store.dispatch(actions.backToLobby());
    expect(store.getActions()).toEqual(expectedActions);
  });
});