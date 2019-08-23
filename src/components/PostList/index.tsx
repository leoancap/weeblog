import React from "react";
import { Container } from "./styles";
import { IPost } from "../../types/appTypes";
import { connect } from "react-redux";

// import { Container } from './styles';

interface IDispatchToProps {}

interface IStateToProps {}

interface IOwnProps {}

type IProps = IDispatchToProps & IStateToProps & IOwnProps;

function PostList({  }: IProps) {
  return (
    <Container>
      <div>hello world</div>
    </Container>
  );
}

export default connect()(PostList);
