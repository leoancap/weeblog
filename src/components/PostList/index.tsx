import React from "react";

import { Container } from "./styles";
import { IPost } from "../../types/appTypes";
import PostItem from "../PostItem";
import { samplePosts } from "../../utils/testUtils";

interface IProps {
  posts: IPost[];
}

export default ({ posts }: IProps) => {
  console.log(samplePosts);
  return (
    <Container>
      {samplePosts.map(post => (
        <PostItem key={post.id} {...post}></PostItem>
      ))}
    </Container>
  );
};
