import React from "react";
import moment from "moment";

import {
  Container,
  Title,
  DatePostedAgo,
  DatePosted,
  DateWrapper,
  Categories,
  Category,
  BriefDescription,
  ReadMore,
} from "./styles";
import { IPost } from "../../types/appTypes";
import { shortenText } from "../../utils/shortenText";

export default ({ categories, datePosted, title, description }: IPost) => {
  return (
    <Container>
      <Title>{title}</Title>
      <DateWrapper>
        <DatePosted>{moment(datePosted).format("MMM DD")}</DatePosted>
        <DatePostedAgo>({moment(datePosted).fromNow()})</DatePostedAgo>
      </DateWrapper>
      <BriefDescription>{shortenText(description, 200)}...</BriefDescription>
      <ReadMore to="#">{"Read ->"}</ReadMore>
      <Categories>
        {categories.map((category, index) => (
          <Category key={index}>#{category}</Category>
        ))}
      </Categories>
    </Container>
  );
};
