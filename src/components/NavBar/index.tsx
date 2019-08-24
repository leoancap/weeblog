// Global
import React from 'react';
// Local
import { ThunkDispatch } from 'redux-thunk';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { useIsScrolled } from '../../customHooks/useIsScrolled';
import {
  Logo,
  NavStyled,
  SearchField,
  SearchBarWrapper,
  SearchBarIcon,
  AddPost,
} from './styles';
import { IAppState, IAppActions } from '../../store/types';
import { setTextSearch } from '../../store/filters/action';
import SearchIconSVG from '../../assets/search.svg';

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
  dispatch: ThunkDispatch<{}, {}, IAppActions>,
): IDispatchToProps => ({
  setTextSearchDispatch: bindActionCreators(setTextSearch, dispatch),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(NavBar);
