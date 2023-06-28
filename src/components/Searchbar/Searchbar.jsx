import { Component } from 'react';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';


import { ReactComponent as MyIcon } from '../search.svg';
import {
  SearchBarStyled,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchInput,
} from './Searchbar.styled';


class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  onChange = e => {
    this.setState({ searchValue: e.target.value });
  };


  onSubmit = event => {
    event.preventDefault();
    if (this.state.searchValue.trim() === '') {
      Notiflix.Notify.info('Enter your search details');
      return;
    }
    this.props.onSubmitHandler(this.state.searchValue);
    this.setState({ searchValue: '' });

   
   
  };

  render() {
    return (
      <SearchBarStyled>
        <SearchForm onSubmit={this.onSubmit}>
          <SearchFormButton type="submit">
            <SearchFormButtonLabel>
              <MyIcon />
            </SearchFormButtonLabel>
          </SearchFormButton>

          <SearchInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={this.onChange}
            value={this.state.searchValue}
          />
        </SearchForm>
      </SearchBarStyled>
    );
  }
}
export default Searchbar;

Searchbar.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};