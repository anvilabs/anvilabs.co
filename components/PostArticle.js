/* @flow */

import { Link } from 'react-router';
import cx from 'classnames';
import React from 'react';

import { transformBlogPostTitle } from '../utils';
import type { BlogPost } from '../types';

const PostTitle = ({ title }: { title: string }) => (
  <span
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: transformBlogPostTitle(title),
    }}
  />
);

const PostArticle = ({ post, full }: {
  post: BlogPost,
  full: boolean,
}) => (
  <article
    itemScope
    itemType="http://schema.org/Article"
  >
    <h1
      itemProp="name"
      className={cx('ma0', full ? 'tc f3 f2-l' : 'f4 f3-l')}
    >
      {post.path ? (
        <Link
          to={post.path}
          className="link dark-gray dim"
        >
          <PostTitle title={post.title} />
        </Link>
      ) : <PostTitle title={post.title} />
    }
    </h1>
    <p className={cx('mb4 gray f6', full && 'tc mb5')}>
      <time dateTime={post.date}>{post.formattedDate}</time>
      {' // '}
      <a
        href={`https://github.com/${post.author}/`}
        className="link red dim"
      >
        @{post.author}
      </a>
      {' // '}
      <span className="nowrap">время чтения: {post.readingTime}</span>
    </p>
    <div>
      <div
        itemProp="articleBody"
        className="article-body"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: full ? post.body : post.excerpt,
        }}
      />
      {!full && (
        <Link to={post.path} className="link red dim">Читать дальше ➞</Link>
      )}
    </div>
  </article>
);

export default PostArticle;
