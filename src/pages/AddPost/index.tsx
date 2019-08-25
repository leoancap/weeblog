// Global
import {
  Field,
  FieldProps,
  Form,
  Formik,
  FormikActions,
  FormikProps,
} from "formik";
import React from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
// Local
import { addPost } from "../../store/actions";
import { IAppActions } from "../../store/types";
import { IPost } from "../../types/appTypes";
import { Container } from "./styles";
import { InputField, Button } from "#components";

interface IDispatchToProps {
  addPostDispatch: (post: IPost) => void;
}

type IProps = IDispatchToProps;

interface IFormValues {
  title: string;
  content: string;
}

function AddPostPage({ addPostDispatch }: IProps) {
  return (
    <Container>
      <Formik
        initialValues={{ title: "", content: "" }}
        onSubmit={(
          values: IFormValues,
          actions: FormikActions<IFormValues>,
        ) => {
          console.log({ values, actions });
          actions.setSubmitting(false);
        }}
        render={() => (
          <Form>
            <InputField label="title" />
            <InputField label="content" textArea />
            <Button label="submit" />
          </Form>
        )}
      />
    </Container>
  );
}

const mapDispatchToProps = (dispatch: Dispatch<IAppActions>) => ({
  addPostDispatch: bindActionCreators(addPost, dispatch),
});

export const AddPost = connect(
  null,
  mapDispatchToProps,
)(AddPostPage);
export default AddPost;
