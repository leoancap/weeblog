// Global
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
// Local
import { toggleCategory, resetCategories } from '../../store/filters/action';
import { IAppActions, IAppState } from '../../store/types';
import {
  getCategoriesFromPosts,
} from '../../selectors/getCategoriesFromPosts';
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
  resetCategoriesDispatch: () => void;
}

type IProps = IStateToProps & IDispatchToProps;

function CategoryFilter({
  toggleCategoryDispatch,
  resetCategoriesDispatch,
  possibleCategories,
  selectedCategories,
}: IProps) {
  return (
    <Container>
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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CategoryFilter);
