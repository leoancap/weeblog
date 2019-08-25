// Global
import {
  Field, FieldProps, Form, Formik, FormikActions, FormikProps,
} from 'formik';
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
// Local
import { addPost } from '../../store/actions';
import { IAppActions } from '../../store/types';
import { IPost } from '../../types/appTypes';
import { Container } from './styles';


interface IDispatchToProps {
  addPostDispatch: (post: IPost) => void;
}

type IProps = IDispatchToProps;

interface IFormValues {
  firstName: string;
}

function AddPostPage({ addPostDispatch }: IProps) {
  return (
    <Container>
      <Formik
        initialValues={{ firstName: '' }}
        onSubmit={(
          values: IFormValues,
          actions: FormikActions<IFormValues>,
        ) => {
          console.log({ values, actions });
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);
        }}
        render={(formikBag: FormikProps<IFormValues>) => (
          <Form>
            <Field
              name="firstName"
              render={({ field, form }: FieldProps<IFormValues>) => (
                <div>
                  <input type="text" {...field} placeholder="First Name" />
                  {form.touched.firstName
                    && form.errors.firstName
                    && form.errors.firstName}
                </div>
              )}
            />
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
