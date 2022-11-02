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
    images: [],
    searchQuery: '',
    page: 1,
    pages: null,
    status: 'idle',
  };

  async componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;

    if (searchQuery !== prevState.searchQuery || page !== prevState.page) {
      this.setState({ status: 'pending' });

      try {
        const response = await fetchImages(searchQuery, page);
        this.setState(({ images }) => ({
          images: [...images, ...response.images],
          status: 'resolved',
        }));

        if (response.images.length === 0) {
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
    this.setState({ searchQuery: searchName, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };

  onModalClose = () => {
    this.setState({ largeUrl: null, tag: null });
  };

  openModal = (url, alt) => this.setState({ largeUrl: url, tag: alt });

  render() {
    const { images, status, largeUrl, tag, page, pages } = this.state;
    const { handleLoadMore, handleSearch, onModalClose, openModal } = this;
    const checkTheNextPage = page === pages;

    return (
      <Container>
        <SearchBar onSubmit={handleSearch} />
        {images.length > 0 && (
          <>
            <ImageGallery images={images} onOpenModal={openModal} />
            {status === 'resolved' && <Button onClick={handleLoadMore} />}
            {status === 'reject' && checkTheNextPage}
          </>
        )}
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
