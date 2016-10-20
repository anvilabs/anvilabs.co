/* @flow */

import { Link } from 'react-router';
import React from 'react';

import type { BlogPost } from '../types';

const PostArticle = ({ post, full }: {
  post: BlogPost,
  full: boolean,
}) => (
  <article
    itemScope
    itemType="http://schema.org/Article"
    className="post"
  >
    <h1 itemProp="name" className="f4 f3-l ma0">
      {post.path ? (
        <Link
          to={post.path}
          className="link dark-gray dim"
        >
          {post.title}
        </Link>
      ) : post.title}
    </h1>
    <p className="mb4 gray f6">
      <time dateTime={post.date}>{post.formattedDate}</time>
      {' // '}
      <a
        href={`https://github.com/${post.author}/`}
        className="link red dim"
      >
        @{post.author}
      </a>
      {' // '}
      {post.numberOfWords}
      {' // '}
      время чтения: {post.readingTime}
    </p>
    <div>
      <div
        itemProp="articleBody"
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
