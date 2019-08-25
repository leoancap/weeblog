// Global
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// Local
import RemoveIconSVG from '../../assets/delete.svg';
import { removePost } from '../../store/posts/action';
import { IAppActions } from '../../store/types';
import { IPost } from '../../types/appTypes';
import CategoriesListing from '../shared/CategoriesListing';
import DatePosted from '../shared/DatePosted';
import {
  BriefDescription,
  Container,
  ReadMore,
  RemoveIconStyled,
  Title,
} from './styles';

interface IDispatchToProps {
  removePostDispatch: (postID: string) => void;
}

type IProps = IDispatchToProps & IPost;

const PostItem = ({
  categories,
  content,
  datePosted,
  id,
  removePostDispatch,
  title,
}: IProps) => (
  <Container>
    <Title to={`/post/${id}`}>{title}</Title>
    <RemoveIconStyled
      onClick={() => removePostDispatch(id)}
      src={RemoveIconSVG}
    />
    <DatePosted datePosted={datePosted} />
    <BriefDescription>{`${content}...`}</BriefDescription>
    <ReadMore to={`/post/${id}`}>{'Read ->'}</ReadMore>
    <CategoriesListing categories={categories} />
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
