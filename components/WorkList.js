/* @flow */

import cx from 'classnames';
import React from 'react';

import {isDarkMode} from '../utils';
import {type WorkType} from '../types';
import ResponsiveImage, {srcSetFromImageUrl} from './ResponsiveImage';

const MAX_COMPACT_WORKS_LENGTH = 3;

const WorkList = ({
  works,
  compact,
}: {
  works: $ReadOnlyArray<WorkType>,
  compact?: boolean,
}) => (
  <section className="flex flex-wrap pv4 justify-between">
    {works
      .slice(0, compact ? MAX_COMPACT_WORKS_LENGTH : works.length)
      .map(({title, subtitle, links, imageUrl}: WorkType, idx: number) => (
        <article
          key={title}
          className={cx(
            'w-100 flex flex-wrap content-start',
            compact ? 'w-30-l' : 'justify-between-l',
            idx < works.length - 1 && (compact ? 'mb6 mb0-l' : 'mb6')
          )}
        >
          <div
            className={cx(
              'w-100 mb4 mw6',
              !compact && 'w-40-l mb0-l',
              !compact && idx % 2 !== 0 && 'order-1-l' // eslint-disable-line no-magic-numbers
            )}
          >
            <ResponsiveImage
              srcSet={srcSetFromImageUrl(imageUrl)}
              alt={title}
              className="db w-100"
            />
          </div>
          <div
            className={cx(
              'w-100 flex flex-column',
              !compact && 'w-50-l ph5-l justify-center-l',
              !compact && idx % 2 !== 0 && 'order-0-l' // eslint-disable-line no-magic-numbers
            )}
          >
            <h3 className="fw3 f2 f1-l mt0 mb3">{title}</h3>
            <h4 className="fw3 ma0">{subtitle}</h4>
            {links && (
              <ul className="list pa0 mt4">
                {links.map((link: {href: string, title: string}) => (
                  <li key={link.href} className="db mb2">
                    <a
                      href={link.href}
                      className={cx(
                        'dib ph3 pv2 ba',
                        isDarkMode ? 'white b--white' : 'dark-gray b--dark-gray'
                      )}
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </article>
      ))}
  </section>
);

WorkList.defaultProps = {
  compact: false,
};

export default WorkList;
