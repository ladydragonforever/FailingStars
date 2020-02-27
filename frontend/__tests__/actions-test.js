/* globals jest */

import {requestStar} from '../util/failing_stars';
import axios from 'axios';

import {
receiveStar ,
receiveErrors,
fetchStar,
} from '../actions/failing_stars_actions';

import thunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('failing stars actions', () => {
    describe('fetchStar', () => {
        let store;

        beforeEach(() => {
            store = mockStore({});
        });

        it('should export a requestStar function', () => {
            expect(typeof fetchStar).toEqual('function');
        });


        it('should return data', async () => {
            const payload = { data: { id: 2, name: "alpha centauri" }}
            axios.get = jest.fn(id => (
                Promise.resolve(payload)
            ));
            const expectedActions = [{ type: "RECEIVE_STAR", payload: payload.data }];

            await store.dispatch(fetchStar())
            expect(store.getActions()).toEqual(expectedActions);
        });

        it('should handle errors', async () => {
            const error = "503 error"
            axios.get = jest.fn(id => (
                Promise.reject(error)
            ));
            const expectedActions = [{ type: "RECEIVE_ERRORS", payload: error }];

            await store.dispatch(fetchStar())
            expect(store.getActions()).toEqual(expectedActions);
        });
    
    });
});