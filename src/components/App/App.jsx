import { Component } from 'react';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { fetchImages } from 'services/api';
import SearchBar from 'components/SearchBar/SearchBar';

class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    page: 1,
    status: 'idle',
  };

  async componentDidUpdate(prevState) {
    const { searchQuery, page } = this.state;
    if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
      this.setState({ status: 'pending' });

      try {
        const response = await fetchImages(searchQuery, page);
        this.setState(prevState => {
          return { hits: [...prevState.hits, ...response], status: 'resolved' };
        });

        if (response.length === 0) {
          Report.failure(
            'Search Failure',
            'There is no images for your query. Please enter other query',
            'Ok'
          );
          return;
        }
      } catch (error) {
        this.setState({ status: 'rejected' });
        console.log(error);
      }
    }
  }

  handleSearch = searchName => {
    this.setState({ searchQuery: searchName, page: 1, hits: [] });
  };

  render() {
    const { handleSearch } = this;
    return (
      <>
        <SearchBar onSubmit={handleSearch} />
      </>
    );
  }
}

export default App;
