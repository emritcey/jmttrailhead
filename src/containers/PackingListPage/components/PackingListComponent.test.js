import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import PackingListComponent from "./PackingListComponent";

configure({ adapter: new Adapter() });

describe('<PackingListComponent />', () => {
	let wrapper;

	beforeEach(() => {
		wrapper = shallow(<PackingListComponent />);
	});

	it('displays packing list', () => {
	});
	it('displays packing list headers differently', () => {
	});
	it('should fetch packing list on component load', () => {
		// use effect
		// fetch function
		// dispatch to reducer
	});

	it('should toggle checkboxes on click', () => {
	});

	it('should access packing list from Redux', () => {
	});
});