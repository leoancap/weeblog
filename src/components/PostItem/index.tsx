// Global
import moment from 'moment';
import React from 'react';
// Local
import { IPost } from '../../types/appTypes';
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
} from './styles';

export default ({
  categories, datePosted, title, description,
}: IPost) => (
  <Container>
    <Title>{title}</Title>
    <DateWrapper>
      <DatePosted>{moment(datePosted).format('MMM DD')}</DatePosted>
      <DatePostedAgo>
        {moment(datePosted).fromNow()}
      </DatePostedAgo>
    </DateWrapper>
    <BriefDescription>
      {`${description}...`}
    </BriefDescription>
    <ReadMore to="#">{'Read ->'}</ReadMore>
    <Categories>
      {categories.map((category) => (
        <Category key={category}>
          {`#${category}`}
        </Category>
      ))}
    </Categories>
  </Container>
);
