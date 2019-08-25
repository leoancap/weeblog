import React from 'react';

import { Container } from './styles';
import { PostItem } from '#components';
import { IPost } from '#domainTypes';

interface IProps {
  posts: IPost[];
}

export const PostList = ({ posts }: IProps) => (
  <Container>
    {posts.length === 0 ? (
      <div>no posts</div>
    ) : (
      posts.map(({
        id, categories, datePosted, title, content,
      }) => (
        <PostItem
          categories={categories}
          content={content}
          datePosted={datePosted}
          id={id}
          key={id}
          title={title}
        />
      ))
    )}
  </Container>
);

export default PostList;
