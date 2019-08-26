import React, { useLayoutEffect, useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";

import {
  CategoryFilter,
  TryAgainMessage,
  Loading,
  PostList,
  Button,
  AddPostForm,
} from "#components";

import { fetchPosts } from "#actions";

import {
  filterPostsByCategory,
  filterPostsByText,
  getCategoriesFromPosts,
  removeUnexistingCategories,
} from "#selectors";

import { IPost } from "#domainTypes";

import { IAppActions, IAppState } from "#storeTypes";

import { LoadingStatus } from "#constants";

import { Container, LeftPanel } from "./styles";

interface IDispatchToProps {
  fetchPostsDispatch: () => void;
}

interface IStateToProps {
  filteredPosts: IPost[];
  error: boolean;
  loading: boolean;
}

type IProps = IDispatchToProps & IStateToProps;

function HomePage({
  error,
  fetchPostsDispatch,
  filteredPosts,
  loading,
}: IProps) {
  
  const [isAddingPost, setIsAddingPost] = useState(false);

  useLayoutEffect(() => {
    fetchPostsDispatch();
  }, [fetchPostsDispatch]);

  if (error) {
    return <TryAgainMessage />;
  }

  return loading ? (
    <Loading />
  ) : isAddingPost ? (
    <AddPostForm onAfterSubmit={() => setIsAddingPost(false)} />
  ) : (
    <Container>
      <LeftPanel>
        <Button onClick={() => setIsAddingPost(true)} label="Add Post" />
        <CategoryFilter />
      </LeftPanel>
      <PostList posts={filteredPosts} />
    </Container>
  );
}

const mapStateToProps = ({
  postsReducer: { posts, loadingStatus },
  filtersReducer: { selectedCategories, textSearch },
}: IAppState): IStateToProps => ({
  filteredPosts: filterPostsByText(
    filterPostsByCategory(
      posts,
      removeUnexistingCategories(
        selectedCategories,
        getCategoriesFromPosts(posts),
      ),
    ),
    textSearch,
  ),
  loading: loadingStatus === LoadingStatus.LOADING,
  error: loadingStatus === LoadingStatus.ERROR,
});

const mapDispatchToProps = (
  dispatch: ThunkDispatch<{}, {}, IAppActions>,
): IDispatchToProps => ({
  fetchPostsDispatch: bindActionCreators(fetchPosts, dispatch),
});

export const Home = connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomePage);
export default Home;
