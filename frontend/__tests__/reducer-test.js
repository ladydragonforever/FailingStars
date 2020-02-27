import failingStarsReducer from '../reducers/failing_stars_reducer';
import { createStore } from 'redux';

describe('Reducers', () => {
    describe('failingStarsReducer', () => {
        let oldState;

        beforeEach(() => {
            oldState = { stars: 'oldState' }
        })

        it('exports a function', () => {
            expect(typeof failingStarsReducer).toEqual('function');
        });

        it('should initialize with an empty object as the default state', () => {
            expect(failingStarsReducer(undefined, {stars:[]})).toEqual({stars:[]});
        });

        it('should return the previous state if an action is not matched', () => {
            const newState = failingStarsReducer(oldState, { type: 'unmatchedtype' });
            expect(newState).toBe(oldState);
        });

        describe('handling the RECEIVE_STAR action', () => {
            let actionStarA,
                actionStarB,
                testStars;

            beforeEach(() => {
                testStars = { stars : [] };
                actionStarA = {
                    type: 'RECEIVE_STAR',
                    payload: {id: 1, name: "A"}
                };
                actionStarB = {
                    type: 'RECEIVE_STAR',
                    payload: {id: 2, name: "B"}
                };
            });


            it('should add when empty', () => {
                const state = failingStarsReducer(undefined, actionStarA);
                expect(state).toEqual({stars: ["A"]})
            })

            it('should move when full', () => {
                const beforeState = {stars: [ "A", "A", "A"]}
                const state = failingStarsReducer(beforeState, actionStarB);
                expect(state).toEqual({stars: ["B", "A", "A"]}
                )
            })
        });
    });
});
