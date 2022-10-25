import { Component } from 'react';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { BsZoomIn } from 'react-icons/bs';
import { SearchBarHeader, SearchForm, Button, Input } from './SearchBar.styled';

class SearchBar extends Component {
  state = { searchQuery: '' };

  handleNameChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.trim() === '') {
      Report.failure('Search Failure', 'Please enter seach query', 'Ok');
      return;
    }
    this.props.onSubmit(this.state.searchQuery);
    this.setState({ searchQuery: '' });
  };

  render() {
    const { handleSubmit, handleNameChange } = this;
    const { searchQuery } = this.state;
    return (
      <SearchBarHeader>
        <Formik onSubmit={handleSubmit}>
          <SearchForm>
            <Button type="submit">
              <BsZoomIn size={25} />
            </Button>

            <Input
              name="searchQuery"
              type="text"
              autocomplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={searchQuery}
              onChange={handleNameChange}
            />
          </SearchForm>
        </Formik>
      </SearchBarHeader>
    );
  }
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
