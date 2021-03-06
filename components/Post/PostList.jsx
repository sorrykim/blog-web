import React from 'react';
import styled from 'styled-components';
import { arrayOf, shape } from 'prop-types';

import PostItem from './PostItem';
import propTypes from '../../constants/propTypes';

const PostItemWrapper = styled.div`
  border-bottom: 1px solid #ededed;
  margin-top: 20px;
  padding-bottom: 20px;

  &:last-child {
    border: none;
  }
`;

const PostList = (props) => {
  const { posts = [] } = props;

  return (
    <div>
      {posts.map(({ category, title, slug, summary, publishedAt }) => (
        <PostItemWrapper key={slug}>
          <PostItem
            category={category}
            title={title}
            summary={summary}
            slug={slug}
            publishedAt={publishedAt}
          />
        </PostItemWrapper>
      ))}
    </div>
  );
};

PostList.propTypes = {
  posts: arrayOf(shape(propTypes.postItem)).isRequired,
};

export default PostList;
