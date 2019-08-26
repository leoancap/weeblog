import React, { useState } from "react";
import { Form, Formik, FormikActions } from "formik";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import V4 from 'uuid/v4'

import { Button, InputField, InputTag } from "#components";

import { addPost } from "#actions";

import { IPost } from "#domainTypes";

import { IAppActions } from "#storeTypes";

import { Container } from "./styles";

interface IDispatchToProps {
  addPostDispatch: (post: IPost) => void;
}

interface IOwnProps {
  onAfterSubmit: () => void;
}

type IProps = IDispatchToProps & IOwnProps;

type IFormikValues = Pick<IPost, "title" | "content">;

function AddPost({ addPostDispatch, onAfterSubmit }: IProps) {
  const [tags, setTags] = useState<string[]>([]);
  return (
    <Container>
      <Formik
        initialValues={{ title: "", content: "" }}
        onSubmit={(
          { title, content }: IFormikValues,
          actions: FormikActions<IFormikValues>,
        ) => {
          if (!title) {
            actions.setFieldError("title", " cannot be empty");
            return;
          }
          if (!content) {
            actions.setFieldError("content", " cannot be empty");
            return;
          }
          addPostDispatch({
            title,
            content,
            categories: tags,
            id: `local-${V4()}`,
            datePosted: new Date().valueOf(),
          });
          onAfterSubmit();
        }}
        render={() => (
          <Form>
            <InputField label="title" />
            <InputField label="content" textArea />
            <InputTag onAddTag={setTags} tags={tags}></InputTag>
            <span>OBS: Note that this post won't be persisted after a refresh</span>
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

export const AddPostForm = connect(
  null,
  mapDispatchToProps,
)(AddPost);
export default AddPostForm;
