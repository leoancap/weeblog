import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { setTextSearch } from '#actions';
import { useIsScrolled } from '#customHooks';
import { IAppActions, IAppState } from '#storeTypes';
import SearchIconSVG from './search.svg';
import {
  Logo, NavStyled, SearchBarIcon, SearchBarWrapper, SearchField,
} from './styles';

interface IDispatchToProps {
  setTextSearchDispatch: (payload: string) => void;
}

interface IStateToProps {
  textSearch: string;
}

type IProps = IDispatchToProps & IStateToProps;

function NavBarComponent({ textSearch, setTextSearchDispatch }: IProps) {
  const isScrolled = useIsScrolled();
  const [inputFocused, setInputFocused] = React.useState<boolean>(false);
  return (
    <NavStyled isScrolled={isScrolled}>
      <Logo to="/">WeeBlog</Logo>
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

export const NavBar = connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBarComponent);
export default NavBar;
