import React from "react";

import { Container } from "./styles";
import { IPost } from "../../types/appTypes";
import PostItem from "../PostItem";
import { createMockedPosts } from "../../utils/testUtils";

interface IProps {
  posts: IPost[];
}

const mockedPosts = createMockedPosts(10);

export default ({ posts }: IProps) => {
  console.log(JSON.stringify(mockedPosts));
  return (
    <Container>
      {mockedPosts.map(post => (
        <PostItem key={post.id} {...post}></PostItem>
      ))}
    </Container>
  );
};
