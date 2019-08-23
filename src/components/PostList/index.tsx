import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container } from "./styles";

// import { Container } from './styles';

interface IDispatchToProps {}

interface IStateToProps {}

interface IOwnProps {}

type IProps = IDispatchToProps & IStateToProps & IOwnProps;

function PostList({  }: IProps) {
  useEffect(() => {}, []);
  return (
    <Container>
      <div>hello world</div>
    </Container>
  );
}

export default connect()(PostList);
