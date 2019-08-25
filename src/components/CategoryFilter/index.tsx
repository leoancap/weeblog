import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { resetCategories, toggleCategory } from '#actions';
import { getCategoriesFromPosts } from '#selectors';
import { IAppActions, IAppState } from '#storeTypes';
import {
  CategoriesListing, CategoryHeading, CategoryStyled, Container,
} from './styles';
import { Button } from '#components';


interface IStateToProps {
  possibleCategories: string[];
  selectedCategories: string[];
}
interface IDispatchToProps {
  toggleCategoryDispatch: (payload: string) => void;
  resetCategoriesDispatch: () => void;
}

type IProps = IStateToProps & IDispatchToProps;

function CategoryFilterComponent({
  toggleCategoryDispatch,
  resetCategoriesDispatch,
  possibleCategories,
  selectedCategories,
}: IProps) {
  return (
    <Container>
      <Button
        to="/add-post"
        label="Add Post"
      />
      <CategoryHeading>Categories</CategoryHeading>
      <CategoriesListing>
        <CategoryStyled
          onClick={() => resetCategoriesDispatch()}
          isSelected={selectedCategories.length === 0}
        >
          All
        </CategoryStyled>
        {possibleCategories.map((category) => (
          <CategoryStyled
            onClick={() => toggleCategoryDispatch(category)}
            key={category}
            isSelected={selectedCategories.includes(category)}
          >
            {`#${category}`}
          </CategoryStyled>
        ))}
      </CategoriesListing>
    </Container>
  );
}

const mapStateToProps = ({
  postsReducer: { posts },
  filtersReducer: { selectedCategories },
}: IAppState): IStateToProps => ({
  possibleCategories: getCategoriesFromPosts(posts),
  selectedCategories,
});

const mapDispatchToProps = (
  dispatch: Dispatch<IAppActions>,
): IDispatchToProps => ({
  toggleCategoryDispatch: bindActionCreators(toggleCategory, dispatch),
  resetCategoriesDispatch: bindActionCreators(resetCategories, dispatch),
});

export const CategoryFilter = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryFilterComponent);
export default CategoryFilter;
