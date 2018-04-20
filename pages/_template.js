/* @flow */

import _ from 'lodash/fp';
import Helmet from 'react-helmet';
import {Component, PropTypes} from 'react';

import '../styles/styles.scss';

const trackPageView = () => {
  const helmet = Helmet.peek();

  window.analytics.page('Website', {
    Page: _.flow(_.find(['name', 'mixpanelTitle']), _.result('content'))(
      helmet.metaTags
    ),
  });
};

type PropsType = {
  location: {
    pathname: string,
    state: ?Object,
    query: Object,
  },
  children: React$Element<any>,
};

class Template extends Component {
  props: PropsType;

  static childContextTypes = {
    location: PropTypes.object,
  };

  getChildContext() {
    const {location} = this.props;

    return {location};
  }

  componentDidMount() {
    trackPageView();
  }

  componentDidUpdate(prevProps: PropsType) {
    const {pathname, state} = this.props.location;
    const previousPath = prevProps.children.props.location.pathname;
    const forceTrack = state && state.forceTrack;

    if (pathname !== previousPath || forceTrack) {
      trackPageView();
    }
  }

  render(): React$Element<any> {
    return this.props.children;
  }
}

export default Template;
