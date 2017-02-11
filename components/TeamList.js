/* @flow */

import cx from 'classnames';
import React from 'react';

import {isDarkMode} from '../utils';
import ResponsiveImage, {srcSetFromImageUrl} from './ResponsiveImage';
import type {TeamMember} from '../types';

const TeamList = ({team}: {team: Array<TeamMember>}) => (
  <section className="flex w-100 flex-wrap">
    {team.map(({name, role, photoUrl, links}: TeamMember) => (
      <article key={name} className="w-100 w-50-m w-25-l">
        <div className="aspect-ratio aspect-ratio--1x1">
          <ResponsiveImage
            srcSet={srcSetFromImageUrl(photoUrl)}
            alt={name}
            className="db bg-center cover aspect-ratio--object"
          />
        </div>
        <div className="pv3 pl0 pr3">
          <h3 className="fw3 f4 mt0 mb2">{name}</h3>
          <h4 className="fw3 mt0 mb2">{role}</h4>
          {links &&
            <ul className="list pa0">
              {links.map((
                {
                  title,
                  href,
                }: {
                  title: string,
                  href: string,
                },
              ) => (
                <li key={href} className="db">
                  <a
                    href={href}
                    className={cx('i', isDarkMode ? 'white' : 'dark-gray')}
                  >
                    {title}
                  </a>
                </li>
              ))}
            </ul>}
        </div>
      </article>
    ))}
  </section>
);

export default TeamList;
