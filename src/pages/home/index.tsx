import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

import { fetchPosts } from "../../store/post/action";
import { IAppActions, IAppState } from "../../store/types";
import { Container } from "./styles";
import { bindActionCreators } from "redux";
import { IPost } from "../../types/appTypes";

interface IDispatchToProps {
  fetchPosts: () => void;
}

interface IStateToProps {
  posts: IPost[];
  loading: boolean;
  error: boolean;
}

interface IOwnProps {}

type IProps = IDispatchToProps & IStateToProps & IOwnProps;

function Home({ fetchPosts, posts, loading, error }: IProps) {
  useEffect(() => {
    fetchPosts();
  }, []);
  console.log(posts);
  if (error) {
    return (
      <Container>
        <h3>There is probable an error with your connection. </h3>
        <h2>Try again!</h2>
      </Container>
    );
  }
  return (
    <Container>
      {loading ? <div>loading</div> : <div>hello world</div>}
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
