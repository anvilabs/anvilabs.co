/* @flow */

import _ from 'lodash/fp';
import Helmet from 'react-helmet';
import React, { Component, PropTypes } from 'react';

import { StickyNavigation } from '../components';
import '../styles/styles.scss';

const trackPageView = () => {
  // $FlowMissingDefinition
  const helmet = Helmet.peek();

  window.analytics.page('Website', {
    Page: _.flow(
      _.find(['name', 'mixpanelTitle']),
      _.result('content'),
    )(helmet.metaTags),
  });
};

type Props = {
  location: {
    pathname: string,
    state: ?Object,
    query: Object,
  },
  children: React$Element<any>,
};

class Template extends Component {
  props: Props;

  static childContextTypes = {
    location: PropTypes.object,
  };

  getChildContext() {
    const { location } = this.props;

    return { location };
  }

  componentDidMount() {
    trackPageView();
  }

  componentDidUpdate(prevProps: Props) {
    const { pathname, state } = this.props.location;
    const previousPath = prevProps.children.props.location.pathname;
    const forceTrack = state && state.forceTrack;

    if (pathname !== previousPath || forceTrack) {
      trackPageView();
    }
  }

  render(): React$Element<any> {
    return (
      <div>
        <StickyNavigation />
        {this.props.children}
      </div>
    );
  }
}

export default Template;
