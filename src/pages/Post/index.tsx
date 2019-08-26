import React, { useState, useLayoutEffect } from "react";
import { RouteComponentProps } from "react-router-dom";

import {
  TryAgainMessage,
  Loading,
  DatePosted,
  CategoriesListing,
} from "#components";

import { IPost } from "#domainTypes";

import { api } from "#services";

import { Container, PostTitle, PostContent } from "./styles";

type IProps = RouteComponentProps<{
  postID: string;
}>;

function PostPage({
  match: {
    params: { postID },
  },
  location: { state },
}: IProps) {
  const [post, setPost] = useState<IPost | null>(null);

  const [error, setError] = useState<boolean>(false);

  useLayoutEffect(() => {
    // Check to use submitted posts
    if (state && state.post && state.post.id.includes("local")) {
      setPost(state.post);
      return;
    }
    api
      .fetchPost(postID)
      .then(setPost)
      .catch(_ => setError(true));
  }, [postID]);

  if (error) {
    return <TryAgainMessage />;
  }

  return (
    <Container>
      {post === null ? (
        <Loading />
      ) : (
        <>
          <PostTitle>{post.title}</PostTitle>
          <DatePosted centered datePosted={post.datePosted} />
          <CategoriesListing centered categories={post.categories} />
          <PostContent>{post.content}</PostContent>
        </>
      )}
    </Container>
  );
}

export const Post = PostPage;
export default Post;
