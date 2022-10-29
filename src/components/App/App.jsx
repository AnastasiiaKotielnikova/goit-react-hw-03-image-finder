import React, { Component } from 'react';
import { Container } from './App.styled';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { fetchImages } from 'services/api';
import SearchBar from 'components/SearchBar/SearchBar';
import ImageGallery from 'components/ImageGallery';
import Button from 'components/Button';
import Loader from 'components/Loader';
import Modal from 'components/Modal';

class App extends Component {
  state = {
    hits: [],
    searchQuery: '',
    page: 1,
    perPage: 12,
    status: 'idle',
    totalHits: null,
    largeUrl: null,
    tag: null,
  };

  async componentDidUpdate(_, prevState) {
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

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  checkTheNextPage = () => {
    const { totalHits, page, perPage } = this.state;
    const maxShownImages = page * perPage;
    return totalHits > maxShownImages;
  };

  onModalClose = () => {
    this.setState({ largeUrl: null, tag: null });
  };

  openModal = (url, alt) => this.setState({ largeUrl: url, tag: alt });

  render() {
    const { hits, status, largeUrl, tag } = this.state;
    const {
      handleLoadMore,
      handleSearch,
      onModalClose,
      openModal,
      checkTheNextPage,
    } = this;

    return (
      <Container>
        <SearchBar onSubmit={handleSearch} />
        <>
          <ImageGallery images={hits} onOpenModal={openModal} />
          {status === 'resolved' && checkTheNextPage() && (
            <Button onClick={handleLoadMore} />
          )}
        </>
        {status === 'pending' && <Loader />}
        {status === 'rejected' && (
          <h2>Ups... Something went wrong. Please try again later.</h2>
        )}

        {largeUrl && <Modal url={largeUrl} alt={tag} onClose={onModalClose} />}
      </Container>
    );
  }
}

export default App;
