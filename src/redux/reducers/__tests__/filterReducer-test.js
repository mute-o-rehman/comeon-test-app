import { filterReducer } from '../filterReducer';
import * as types from '../../actions/types';

describe('filter reducer', () => {
    it('should return the initial state', () => {
        expect(filterReducer(undefined, {})).toEqual(
          {
            categoryIndex: 0,
            gameName: ""
          }
        );
    });

    it('should handle the FILTER_BY_CATEGORY', () => {
        const updateAction = {
            type: types.FILTER_BY_CATEGORY,
            payload: 1
        };
        expect(filterReducer({}, updateAction)).toEqual({ categoryIndex: 1 });
    });

    it('should handle the FILTER_BY_NAME', () => {
        const updateAction = {
            type: types.FILTER_BY_NAME,
            payload: 'star'
        };
        expect(filterReducer({}, updateAction)).toEqual({ categoryIndex: 0, gameName: 'star' });
    });
});
