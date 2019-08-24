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

interface IDispatchToProps {
  fetchPostsDispatch: () => void;
}

interface IStateToProps {
  posts: IPost[];
  loadingStatus: LoadingStatus;
}

type IProps = IDispatchToProps & IStateToProps;

function Home({ fetchPostsDispatch, posts, loadingStatus }: IProps) {
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
          <PostList posts={posts} />
        </>
      )}
    </Container>
  );
}

const mapStateToProps = ({
  postsReducer: { posts, loadingStatus },
}: IAppState): IStateToProps => ({
  posts,
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
