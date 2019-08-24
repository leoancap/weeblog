// Global
import moment from "moment";
import React from "react";
// Local
import { IPost } from "../../types/appTypes";
import { shortenText } from "../../utils/shortenText";
import {
  BriefDescription,
  Categories,
  Category,
  Container,
  DatePosted,
  DatePostedAgo,
  DateWrapper,
  ReadMore,
  Title,
} from "./styles";

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
