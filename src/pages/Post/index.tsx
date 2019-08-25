// Global
import React, { useState, useLayoutEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
// Local
import DatePosted from '../../components/shared/DatePosted';
import ErrorMessage from '../../components/shared/ErrorMessage';
import Loading from '../../components/shared/Loading';
import api from '../../services/api';
import { IPost } from '../../types/appTypes';
import { Container, PostTitle, PostContent } from './styles';
import { fakeContent } from '../../utils/testUtils';
import CategoriesListing from '../../components/shared/CategoriesListing';

type IProps = RouteComponentProps<{
  postID: string;
}>;

export default function Post({
  match: {
    params: { postID },
  },
}: IProps) {
  const [post, setPost] = useState<IPost | null>(null);
  const [error, setError] = useState<boolean>(false);

  useLayoutEffect(() => {
    (async () => {
      try {
        setPost(await api.fetchPost(postID));
      } catch (_) {
        setError(true);
      }
    })();
  }, [postID]);

  if (error) {
    return <ErrorMessage />;
  }

  return (
    <Container>
      {post === null ? (
        <Loading />
      ) : (
        <>
          <PostTitle>{post.title}</PostTitle>
          <DatePosted
            centered
            datePosted={post.datePosted}
          />
          <CategoriesListing
            centered
            categories={post.categories}
          />
          <PostContent>
            {post.content}
            {'----->>>>> below are fake contents '}
            <br />
            {fakeContent}
          </PostContent>
        </>
      )}
    </Container>
  );
}
