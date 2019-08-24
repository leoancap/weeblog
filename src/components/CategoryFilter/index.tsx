// Global
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ThunkDispatch } from 'redux-thunk';
// Local
import { toggleCategory } from '../../store/filters/action';
import { IAppActions, IAppState } from '../../store/types';
import { getCategoriesFromPosts } from '../../utils/getCategoriesFromPosts';
import {
  CategoriesListing,
  CategoryHeading,
  CategoryStyled,
  Container,
} from './styles';

interface IStateToProps {
  possibleCategories: string[];
  selectedCategories: string[];
}
interface IDispatchToProps {
  toggleCategoryDispatch: (payload: string) => void;
}

type IProps = IStateToProps & IDispatchToProps;

function CategoryFilter({
  toggleCategoryDispatch,
  possibleCategories,
  selectedCategories,
}: IProps) {
  return (
    <Container>
      <CategoryHeading>Categories</CategoryHeading>
      <CategoriesListing>
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
  dispatch: ThunkDispatch<{}, {}, IAppActions>,
): IDispatchToProps => ({
  toggleCategoryDispatch: bindActionCreators(toggleCategory, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryFilter);
