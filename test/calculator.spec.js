/* global define, it, describe */
import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';
import App from './../src/js/app';

describe('App Component', () => {
  it('should shallow render', () => {
    expect(shallow(<App />).contains(<h3>Mortgage Calculator</h3>)).to.equal(true);
  });
});
