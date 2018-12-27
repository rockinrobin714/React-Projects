import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import Congrats from './Congrats';
import { findByTestAttr } from '../tests/testUtils';

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (props={}) => {
  return shallow(<Congrats {...props} />);
}

test('renders without error', () => {

});

test('renders no text when success prop is false', () => {

});

test('renders non-empty congrats message when success prop is true', () => {

});
