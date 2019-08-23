import React from "react";

import { Container } from "./styles";
import { IPost } from "../../types/appTypes";

interface IProps {
  posts: IPost[];
}

function PostList({ posts }: IProps) {
  console.log(posts);
  return (
    <Container>
      <div>hello world</div>
    </Container>
  );
}

export default PostList;
