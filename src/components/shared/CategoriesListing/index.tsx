import React from 'react';

import { Container, Category } from './styles';

interface IProps {
  categories: string[]
  centered?:boolean;
}

export default function CategoriesListing({ categories, centered = false }:IProps) {
  return (
    <Container centered={centered}>
      {categories.map((category, index) => (
        <Category key={category + index.valueOf()}>{`#${category}`}</Category>
      ))}
    </Container>
  );
}
