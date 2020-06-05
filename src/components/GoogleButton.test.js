import { configure, shallow } from 'enzyme';
import Adapter from "enzyme-adapter-react-16";
import GoogleButton from "./GoogleButton";
import React from "react";

configure({ adapter: new Adapter() });

describe('<GoogleButton />', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<GoogleButton />);
	});

	it('should link to /auth/google', () => {
		expect(wrapper.find('a').prop('href')).toBe('/auth/google');
	});

	it('should display an image inside the link', () => {
		expect(wrapper.containsMatchingElement(<img />)).toBeTruthy();
	});
});