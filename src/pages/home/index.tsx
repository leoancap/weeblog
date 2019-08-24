// Global
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
// Local
import PostList from '../../components/PostList';
import { fetchPosts } from '../../store/posts/action';
import { IAppActions, IAppState } from '../../store/types';
import { IPost } from '../../types/appTypes';
import { LoadingStatus } from '../../appContansts';
import { Container, ErrorMessage } from './styles';
import CategoryFilter from '../../components/CategoryFilter';
import { filterPostsByCategory, filterPostsByText } from '../../selectors/filterPosts';

interface IDispatchToProps {
  fetchPostsDispatch: () => void;
}

interface IStateToProps {
  filteredPosts: IPost[];
  loadingStatus: LoadingStatus;
}

type IProps = IDispatchToProps & IStateToProps;

function Home({
  fetchPostsDispatch,
  filteredPosts,
  loadingStatus,
}: IProps) {
  useEffect(() => {
    fetchPostsDispatch();
  }, [fetchPostsDispatch]);

  if (loadingStatus === LoadingStatus.ERROR) {
    return (
      <Container>
        <ErrorMessage>
          There was an error.
          <br />
          <br />
          Try again!
        </ErrorMessage>
      </Container>
    );
  }
  return (
    <Container>
      {loadingStatus === LoadingStatus.LOADING ? (
        <div>loading</div>
      ) : (
        <>
          <CategoryFilter />
          <PostList
            posts={filteredPosts}
          />
        </>
      )}
    </Container>
  );
}

const mapStateToProps = ({
  postsReducer: { posts, loadingStatus },
  filtersReducer: { selectedCategories, textSearch },
}: IAppState): IStateToProps => ({
  filteredPosts: filterPostsByText(
    filterPostsByCategory(posts, selectedCategories),
    textSearch,
  ),
  loadingStatus,
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
