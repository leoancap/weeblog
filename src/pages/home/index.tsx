// Global
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { ThunkDispatch } from "redux-thunk";
// Local
import PostList from "../../components/PostList";
import { fetchPosts } from "../../store/posts/action";
import { IAppActions, IAppState } from "../../store/types";
import { IPost } from "../../types/appTypes";
import { LoadingStatus } from "../../appContansts";
import { Container, ErrorMessage } from "./styles";

interface IDispatchToProps {
  fetchPosts: () => void;
}

interface IStateToProps {
  posts: IPost[];
  loadingStatus: LoadingStatus;
}

type IProps = IDispatchToProps & IStateToProps;

function Home({ fetchPosts, posts, loadingStatus }: IProps) {
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

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
        <PostList posts={posts}></PostList>
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
  dispatch: ThunkDispatch<any, any, IAppActions>,
): IDispatchToProps => ({
  fetchPosts: bindActionCreators(fetchPosts, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
