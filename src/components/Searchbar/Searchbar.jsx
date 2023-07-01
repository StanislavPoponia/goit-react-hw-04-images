import {  useState } from 'react';
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


const Searchbar = ({ onSubmitHandler }) => {
  const [searchValue, setSearchValue] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (searchValue.trim() === '') {
      Notiflix.Notify.info('Enter your search details');;
      return;
    }
    onSubmitHandler(searchValue);
    setSearchValue('');
  };

  const onChange = e => {
    const inputText = e.target.value.trim();
    return setSearchValue(inputText);
  };

  return (
    <SearchBarStyled>
      <SearchForm onSubmit={onSubmit}>
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
          onChange={onChange}
          value={searchValue}
        />
      </SearchForm>
    </SearchBarStyled>
  );
};

   
   


   
export default Searchbar;

Searchbar.propTypes = {
  onSubmitHandler: PropTypes.func.isRequired,
};

Notiflix.Notify.info('Enter your search details');