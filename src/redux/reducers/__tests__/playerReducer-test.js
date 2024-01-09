import { playerReducer } from '../playerReducer';
import * as types from '../../actions/types';

describe('player reducer test', () => {
    it('should return the initial state', () => {
        expect(playerReducer(undefined, {})).toEqual(
          {
            player: {
                name: "",
                avatar: "",
                event: ""
            }
          }
        );
    });

    it('should handle PLAYER_DATA', () => {
        const updateAction = {
            type: types.PLAYER_DATA,
            payload: {
                name: "Eric Beard",
                avatar: "images/avatar/eric.jpg",
                event: "I saw you won 500 SEK last time!",
            }
        };
        
        expect(playerReducer({}, updateAction)).toEqual({ player: {
            name: "Eric Beard",
            avatar: "images/avatar/eric.jpg",
            event: "I saw you won 500 SEK last time!",
        } });
    });
});