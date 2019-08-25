import React from "react";
import { Field, FieldProps } from "formik";

import { Container, Input, Label, TextArea } from "./styles";

interface IFormValues {
  title: string;
  content: string;
}

interface IProps {
  label: string;
  textArea?: boolean;
}

export function InputField({ label, textArea = false }: IProps) {
  return (
    <Field
      name={label}
      render={({ field, form }: FieldProps<IFormValues>) => (
        <Container>
          <Label>{label}</Label>
          {textArea ? (
            <TextArea
              {...field}
              placeholder={`Type your ${label}`}
            />
          ) : (
            <Input type="text" {...field} placeholder={`Type your ${label}`} />
          )}
          {form.touched.title && form.errors.title && form.errors.title}
        </Container>
      )}
    />
  );
}

export default InputField;
