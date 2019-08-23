import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { fetchPosts } from "../../store/post/action";
import { IAppActions, IAppState } from "../../store/types";
import { Container, ErrorMessage } from "./styles";
import { bindActionCreators } from "redux";
import { IPost } from "../../types/appTypes";
import PostList from "../../components/PostList";

interface IDispatchToProps {
  fetchPosts: () => void;
}

interface IStateToProps {
  posts: IPost[];
  loading: boolean;
  error: boolean;
}

type IProps = IDispatchToProps & IStateToProps;

function Home({ fetchPosts, posts, loading, error }: IProps) {
  useEffect(() => {
    fetchPosts();
  }, []);

  if (error) {
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
      {loading ? <div>loading</div> : <PostList posts={posts}></PostList>}
    </Container>
  );
}

const mapStateToProps = (state: IAppState): IStateToProps => ({
  posts: state.postsReducer.posts,
  loading: state.postsReducer.loading,
  error: state.postsReducer.error,
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
