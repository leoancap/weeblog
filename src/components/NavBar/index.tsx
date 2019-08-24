// Global
import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
// Local
import SearchIconSVG from '../../assets/search.svg';
import { useIsScrolled } from '../../customHooks/useIsScrolled';
import { setTextSearch } from '../../store/filters/action';
import { IAppActions, IAppState } from '../../store/types';
import {
  AddPost,
  Logo,
  NavStyled,
  SearchBarIcon,
  SearchBarWrapper,
  SearchField,
} from './styles';

interface IDispatchToProps {
  setTextSearchDispatch: (payload: string) => void;
}

interface IStateToProps {
  textSearch: string;
}

type IProps = IDispatchToProps & IStateToProps;

function NavBar({ textSearch, setTextSearchDispatch }: IProps) {
  const isScrolled = useIsScrolled();
  const [inputFocused, setInputFocused] = React.useState<boolean>(false);
  return (
    <NavStyled isScrolled={isScrolled}>
      <Logo>WeeBlog</Logo>
      <SearchBarWrapper>
        <SearchBarIcon
          hide={textSearch.length > 0 || inputFocused}
          src={SearchIconSVG}
        />
        <SearchField
          onFocus={() => setInputFocused(true)}
          onBlur={() => setInputFocused(false)}
          placeholder="Search"
          onChange={({ target: { value } }) => setTextSearchDispatch(value)}
        />
      </SearchBarWrapper>
      <AddPost to="#">Add Post</AddPost>
    </NavStyled>
  );
}

const mapStateToProps = ({
  filtersReducer: { textSearch },
}: IAppState): IStateToProps => ({
  textSearch,
});

const mapDispatchToProps = (
  dispatch: Dispatch<IAppActions>,
): IDispatchToProps => ({
  setTextSearchDispatch: (textSearch: string) => dispatch(setTextSearch(textSearch)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
