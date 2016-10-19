/* @flow */

import React from 'react';

type TeamMember = {
  name: string,
  role: string,
  photoUrl: string,
  links?: Array<{
    title: string,
    href: string,
  }>,
};

const TeamList = ({ team }: {
  team: Array<TeamMember>,
}) => (
  <section className="flex w-100 flex-wrap">
    {team.map(({ name, role, photoUrl, links }: TeamMember) => (
      <article key={name} className="w-100 w-third-ns">
        <div className="aspect-ratio aspect-ratio--1x1">
          <img
            src={photoUrl}
            alt={name}
            className="db bg-center cover aspect-ratio--object"
          />
        </div>
        <div className="pv3 pl0 pr3">
          <h3 className="fw3 f4 mt0 mb2">{name}</h3>
          <h4 className="fw3 mt0 mb2">{role}</h4>
          {links && (
            <ul className="list pa0">
              {links.map(({ title, href }: {
                title: string,
                href: string,
              }) => (
                <li key={href} className="db">
                  <a
                    href={href}
                    className="link dim dark-gray i"
                  >
                    {title}
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

export default TeamList;
