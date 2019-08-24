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
  console.log(JSON.stringify(samplePosts(10)));
  return (
    <Container>
      {mockedPosts.map(post => (
        <PostItem key={post.id} {...post}></PostItem>
      ))}
    </Container>
  );
};
