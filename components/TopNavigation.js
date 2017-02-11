/* @flow */

// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import {config} from 'config';
import {Link} from 'react-router';
import cx from 'classnames';
import React, {Component} from 'react';

import {isDarkMode} from '../utils';
import NavigationLink from './NavigationLink';
import ResponsiveImage from './ResponsiveImage';

const {menuLinks} = config;

type Props = {
  mobileMenuVisible: boolean,
  className?: string,
  style?: string,
};
type State = {
  mobileMenuVisible: boolean,
};

export default class TopNavigation extends Component {
  props: Props;
  state: State;

  static defaultProps = {
    mobileMenuVisible: false,
  };

  constructor(props: Props) {
    super(props);

    this.state = {
      mobileMenuVisible: props.mobileMenuVisible,
    };
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.mobileMenuVisible !== this.state.mobileMenuVisible) {
      this.setState({
        mobileMenuVisible: nextProps.mobileMenuVisible,
      });
    }
  }

  render(): React$Element<any> {
    const {className, style} = this.props;
    const {mobileMenuVisible} = this.state;

    return (
      <nav className={className} style={style}>
        <div
          className={cx(
            'z-1 relative pa3 ph5-ns flex items-center justify-between',
            isDarkMode ? 'bg-dark-gray' : 'bg-white',
          )}
        >
          {/* eslint-disable jsx-a11y/no-static-element-interactions */}
          <a
            className={cx(
              'f4 dib db dn-ns pointer',
              isDarkMode ? 'white' : 'dark-gray',
            )}
            onClick={() => {
              this.setState({
                mobileMenuVisible: !mobileMenuVisible,
              });
            }}
          >
            {mobileMenuVisible ? 'Закрыть' : 'Меню'}
          </a>
          {/* eslint-enable jsx-a11y/no-static-element-interactions */}
          <Link to="/">
            <ResponsiveImage
              srcSet={
                isDarkMode
                  ? [
                      require('../static/logo-white.png'),
                      require('../static/logo-white@2x.png'),
                      require('../static/logo-white@3x.png'),
                    ]
                  : [
                      require('../static/logo.png'),
                      require('../static/logo@2x.png'),
                      require('../static/logo@3x.png'),
                    ]
              }
              alt="Anvilabs Logo"
              className="dib w-auto"
              style={{height: '3rem'}}
            />
          </Link>
          <div className="dn db-ns">
            {menuLinks.map((
              {to, title}: {to: string, title: string},
              idx: number,
            ) => (
              <NavigationLink
                key={to}
                to={to}
                title={title}
                className={cx(
                  'f5 f4-l dib',
                  idx < menuLinks.length - 1 && 'mr3 mr4-ns',
                )}
              />
            ))}
          </div>
        </div>
        <div
          className={cx(
            'relative pa3 db dn-ns w-100',
            isDarkMode ? 'bg-dark-gray' : 'bg-white',
          )}
          style={{
            maxHeight: mobileMenuVisible ? '100%' : 0,
            opacity: mobileMenuVisible ? 1 : 0,
            visibility: mobileMenuVisible ? 'visible' : 'hidden',
            transform: `translateY(${mobileMenuVisible ? '0' : '-2em'})`,
            transition: 'transform 0.2s ease, opacity 0.2s ease, visibility 0s',
          }}
        >
          {menuLinks.map(({to, title}: {to: string, title: string}) => (
            <NavigationLink
              key={to}
              to={to}
              title={title}
              className="db pv2 f4"
            />
          ))}
        </div>
      </nav>
    );
  }
}
