import reducer from './reducer';
import * as actionTypes from '../store/Auth/actions';


describe('reducer', () => {
	it('should return initial state', () => {
		expect(reducer(undefined, {})).toEqual({
			packingList: {},
			currentUser: {},
		});
	});

	it('should build packing list', () => {
		expect(reducer(undefined, {
			type: 'BUILD_PACKING_LIST',
			payload: {'tent': true}
		})).toEqual({
			packingList: {'tent': true},
			currentUser: {},
		});
	});

	it('should store current user ID upon SET_CURRENT_USER', () => {
		expect(reducer(undefined, {
			type: 'SET_CURRENT_USER',
			payload: 'abc123'
		})).toEqual({
			packingList: {},
			currentUser: 'abc123',
		});
	});

	it('should remove current user info upon LOGOUT', () => {
		expect(reducer({
			packingList: {},
			currentUser: 'abc123',
		}, {
			type: 'LOGOUT'
		})).toEqual({
			packingList: {},
			currentUser: {},
		});
	});
});