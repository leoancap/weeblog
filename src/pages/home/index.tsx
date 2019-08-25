// Global
import React, { useLayoutEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
// Local
import PostList from '../../components/PostList';
import { fetchPosts } from '../../store/posts/action';
import { IAppActions, IAppState } from '../../store/types';
import { IPost } from '../../types/appTypes';
import { LoadingStatus } from '../../appContansts';
import { Container } from './styles';
import CategoryFilter from '../../components/CategoryFilter';
import {
  filterPostsByCategory,
  filterPostsByText,
} from '../../selectors/filterPosts';
import Loading from '../../components/shared/Loading';
import ErrorMessage from '../../components/shared/ErrorMessage';
import { removeUnexistingCategories, getCategoriesFromPosts } from '../../selectors/getCategoriesFromPosts';

interface IDispatchToProps {
  fetchPostsDispatch: () => void;
}

interface IStateToProps {
  filteredPosts: IPost[];
  error: boolean;
  loading: boolean;
}

type IProps = IDispatchToProps & IStateToProps;

function Home({
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
