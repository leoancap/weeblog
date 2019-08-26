import React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import { removePost } from "#actions";

import { CategoriesListing, DatePosted } from "#components";

import { IPost } from "#domainTypes";

import { IAppActions } from "#storeTypes";

import RemoveIconSVG from "./delete.svg";

import { BriefDescription, Container, RemoveIconStyled, Title } from "./styles";
import { withRouter, RouteComponentProps } from "react-router-dom";

interface IDispatchToProps {
  removePostDispatch: (postID: string) => void;
}

type IProps = IDispatchToProps & IPost & RouteComponentProps;

const PostItemComponent = ({
  categories,
  content,
  datePosted,
  id,
  removePostDispatch,
  title,
  history,
}: IProps) => (
  <Container
    onClick={() =>
      history.push(`/post/${id}`, {
        post: { id, title, content, datePosted, categories },
      })
    }
  >
    <Title>{title}</Title>
    <RemoveIconStyled
      onClick={e => {
        e.stopPropagation();
        removePostDispatch(id);
      }}
      src={RemoveIconSVG}
    />
    <DatePosted datePosted={datePosted} />
    <BriefDescription>{`${content}...`}</BriefDescription>
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
)(withRouter(PostItemComponent));
export default PostItem;
