import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { removePost } from '#actions';
import { CategoriesListing, DatePosted } from '#components';
import { IPost } from '#domainTypes';
import { IAppActions } from '#storeTypes';
import RemoveIconSVG from './delete.svg';
import {
  BriefDescription, Container, ReadMore, RemoveIconStyled, Title,
} from './styles';


interface IDispatchToProps {
  removePostDispatch: (postID: string) => void;
}

type IProps = IDispatchToProps & IPost;

const PostItemComponent = ({
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

export const PostItem = connect(
  null,
  mapDispatchToProps,
)(PostItemComponent);
export default PostItem;
