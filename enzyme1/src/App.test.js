import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import ReactDOM from 'react-dom';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

/**
* Factory function to create a shallow wrapper for the app component
* @function setup
* @param {object} props - component props specific to this setup
* @param {object} state
* @ reutrns {ShallowWrapper}
*/
const setup = (props={}, state=null) => {
  const wrapper = shallow(<App {...props} />);
  if (state) {
    wrapper.setState(state);
  }
  return wrapper;
}

/**
 * Return ShallowWrapper containing node(s) with the given data test value
 * @param {ShallowWrapper} wrapper - enzyme shallow wrapper to search within
 * @param {string} val - value of data-test attr for search
 * @returns {ShallowWrapper}
*/
const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
}

test('renders without error', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'component-app');
  expect(appComponent.length).toBe(1);
});

test('renders increment button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'increment-button');
  expect(button.length).toBe(1);
});

test('renders decrement button', () => {
  const wrapper = setup();
  const button = findByTestAttr(wrapper, 'decrement-button');
  expect(button.length).toBe(1);
});

test('renders counter display', () => {
  const wrapper = setup();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.length).toBe(1);
});

test('counter starts at 0', () => {
  const wrapper = setup();
  const initialCounterState = wrapper.state('counter');
  expect(initialCounterState).toBe(0);
});

test('clicking increment button increments counter display', () => {
  const counter = 7;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, 'increment-button');
  button.simulate('click');
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter + 1);
});

test('clicking decrement button decrements counter display', () => {
  const counter = 5;
  const wrapper = setup(null, { counter });
  const button = findByTestAttr(wrapper, 'decrement-button');
  button.simulate('click');
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain(counter - 1);

});

test('clicking decrement button on 0 results in an error', () => {
  const counter = 0;
  const wrapper = setup(null, { counter });
  const decrementButton = findByTestAttr(wrapper, 'decrement-button');
  decrementButton.simulate('click');
  wrapper.update();
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  expect(counterDisplay.text()).toContain('error');
  

});

test('clicking increment with an error removes the error', () => {
  const error = 'There is an error';
  const wrapper = setup(null, { error });
  const incrementButton = findByTestAttr(wrapper, 'increment-button');
  incrementButton.simulate('click');
  const counterDisplay = findByTestAttr(wrapper, 'counter-display');
  wrapper.update();
  expect(counterDisplay.text()).not.toContain('error');

});