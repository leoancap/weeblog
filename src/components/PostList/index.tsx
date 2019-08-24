import React from "react";

import { Container } from "./styles";
import { IPost } from "../../types/appTypes";
import PostItem from "../PostItem";
import { samplePosts } from "../../utils/testUtils";

interface IProps {
  posts: IPost[];
}

const mockedPosts = samplePosts(10);

export default ({ posts }: IProps) => {
  console.log(samplePosts);
  return (
    <Container>
      {mockedPosts.map(post => (
        <PostItem key={post.id} {...post}></PostItem>
      ))}
    </Container>
  );
};
