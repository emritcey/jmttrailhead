import { configure, shallow, mount } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import PackingListComponent from "./PackingListComponent";
// import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../../../reducers/reducer';
import Provider from "react-redux/lib/components/Provider";


configure({ adapter: new Adapter() });

jest.mock("react-redux", () => ({
	useSelector: jest.fn()
}));

describe('<PackingListComponent />', () => {
	let wrapper;
	let useEffect;
	let fetchPackingList;

	const packingList = {
		"Core Equipment": [
			{
				'id': 1,
				'name': 'Sleeping Bag',
				'note': null,
			},
			{
				'id': 2,
				'name': 'Sleeping Pad',
				'note': 'Either inflatable or roll out',
			},
		]
	};

	const mockStore = createStore(reducer, {packingList: packingList});

	jest.mock("react-redux", () => ({
		useSelector: jest.fn(fn => fn()),
		useDispatch: () => jest.fn()
	}));

	const mockUseEffect = () => {
		useEffect.mockImplementationOnce(f => f());
	};

	beforeEach(() => {
		wrapper = mount(<Provider store={mockStore}><PackingListComponent /></Provider>);
		jest.spyOn(React, 'useEffect').mockImplementation(f => f())
		// fetchPackingList = jest.spyOn(fetchPackingList).mockResolvedValue(packingList);
		//fetchPackingList = jest.fn().mockResolvedValue(packingList);

	});

	it('fetches packing list on load', () => {
		// expect(useEffect).toHaveBeenCalled();
	});

	it('displays packing list headers without checkbox', () => {
		const categories = wrapper.find('.category');
		expect(categories).toHaveLength(2);
		const firstCategory = categories.first();

		console.log('firstCategory', firstCategory);
		expect(firstCategory.find('.check-box').exists()).toBeFalsy();
	});

	it('displays packing list item to have checkmark & title', () => {
		const rows = wrapper.find('.listItem');
		expect(rows).toHaveLength(2);
		const firstRow = rows.first();
		console.log('firstRow', firstRow);
		expect(firstRow.find('.check-box').exists()).toBeTruthy();
		expect(firstRow.text()).toEqual("Sleeping Bag");
	});

	it('should fetch packing list on component load', () => {
		// use effect
		// fetch function
		// dispatch to reducer
		expect(true).toBeTruthy();
	});

	it('should toggle checkboxes on click', () => {
		// find row
		// click
		// confirm value is checked
		// click
		// confirm value is unchecked
		expect(true).toBeTruthy();

	});
});