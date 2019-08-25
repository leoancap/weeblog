// Global
import moment from 'moment';
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// Local
import RemoveIconSVG from '../../assets/delete.svg';
import { removePost } from '../../store/posts/action';
import { IAppActions } from '../../store/types';
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
  RemoveIconStyled,
  Title,
} from './styles';

interface IDispatchToProps {
  removePostDispatch: (postID: string) => void;
}

type IProps = IDispatchToProps & IPost ;

const PostItem = ({
  id,
  categories,
  datePosted,
  title,
  content,
  removePostDispatch,
}: IProps) => (
  <Container>
    <Title to={`/post/${id}`}>{title}</Title>
    <RemoveIconStyled
      onClick={() => removePostDispatch(id)}
      src={RemoveIconSVG}
    />
    <DateWrapper>
      <DatePosted>{moment(datePosted).format('MMM DD')}</DatePosted>
      <DatePostedAgo>{`( ${moment(datePosted).fromNow()} )`}</DatePostedAgo>
    </DateWrapper>
    <BriefDescription>{`${content}...`}</BriefDescription>
    <ReadMore to={`/post/${id}`}>{'Read ->'}</ReadMore>
    <Categories>
      {categories.map((category, index) => (
        <Category key={category + index.valueOf()}>{`#${category}`}</Category>
      ))}
    </Categories>
  </Container>
);

const mapDispatchToProps = (
  dispatch: Dispatch<IAppActions>,
): IDispatchToProps => ({
  removePostDispatch: (postId: string) => dispatch(removePost(postId)),
});

export default connect(
  null,
  mapDispatchToProps,
)(PostItem);
