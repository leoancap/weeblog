// Global
import React from 'react';
// Local
import { Container } from './styles';
import { IPost } from '../../types/appTypes';
import PostItem from '../PostItem';

interface IProps {
  posts: IPost[];
}

export default ({ posts }: IProps) => (
  <Container>
    {posts.length === 0 ? (<div>no posts</div>) : (
      posts.map(({
        id, categories, datePosted, title, description,
      }) => (
        <PostItem
          key={id}
          id={id}
          categories={categories}
          datePosted={datePosted}
          title={title}
          description={description}
        />
      )))}
  </Container>
);
