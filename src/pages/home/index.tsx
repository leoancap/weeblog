import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import {
  CategoryFilter, ErrorMessage, Loading, PostList,
} from '#components';

import { fetchPosts } from '#actions';

import {
  filterPostsByCategory, filterPostsByText, getCategoriesFromPosts, removeUnexistingCategories,
} from '#selectors';

import { IPost } from '#domainTypes';

import { IAppActions, IAppState } from '#storeTypes';

import { LoadingStatus } from '#constants';

import { Container } from './styles';

interface IDispatchToProps {
  fetchPostsDispatch: () => void;
}

interface IStateToProps {
  filteredPosts: IPost[];
  error: boolean;
  loading: boolean;
}

type IProps = IDispatchToProps & IStateToProps

function HomePage({
  error, fetchPostsDispatch, filteredPosts, loading,
}: IProps) {
  useLayoutEffect(() => {
    fetchPostsDispatch();
  }, [fetchPostsDispatch]);

  if (error) {
    return <ErrorMessage />;
  }

  return loading ? (
    <Loading />
  ) : (
    <Container>
      <CategoryFilter />
      <PostList posts={filteredPosts} />
    </Container>
  );
}

const mapStateToProps = ({
  postsReducer: { posts, loadingStatus },
  filtersReducer: { selectedCategories, textSearch },
}: IAppState): IStateToProps => ({
  filteredPosts: filterPostsByText(
    filterPostsByCategory(posts,
      removeUnexistingCategories(
        selectedCategories,
        getCategoriesFromPosts(posts),
      )),
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
