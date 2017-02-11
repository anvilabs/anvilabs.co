/* @flow */

import React from 'react';
import renderer from 'react-test-renderer';

import Analytics from '../Analytics';

describe('Analytics', () => {
  it('returns a script tag when passed a valid Segment write key', () => {
    const component = renderer.create(<Analytics writeKey="123" />);
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('returns null when passed an empty Segment write key', () => {
    const component = renderer.create(<Analytics writeKey="" />);
    expect(component.toJSON()).toBeNull();
  });
});
