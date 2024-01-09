import { loadGameReducer } from '../loadGameReducer';
import * as types from '../../actions/types';

describe('loadGame reducer', () => {
    it('should return the initial state', () => {
        expect(loadGameReducer(undefined, {})).toEqual(
          {
            code: ''
          }
        );
    });

    it('should handle LOAD_GAME', () => {
        const updateAction = {
            type: types.LOAD_GAME,
            payload: 'starburst'
        };
        expect(loadGameReducer({}, updateAction)).toEqual({ code: 'starburst' });
    });

    it('should handle the BACK_TO_LOBBY', () => {
        const updateAction = {
            type: types.BACK_TO_LOBBY,
            payload: ''
        };
        expect(loadGameReducer({}, updateAction)).toEqual({ code: '' });
    });
});