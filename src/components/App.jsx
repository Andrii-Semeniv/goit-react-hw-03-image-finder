import { Component } from 'react';
import '../styles/styles.css';

import Searchbar from './searchbar/Searchbar';
import fetchImg from 'api/fetch';
import ImageGallery from './imageGallery/ImageGallery';
import Button from './button/Button';
import Loader from './loader/Loader';
import Modal from './modal/Modal';

export class App extends Component {
  state = {
    photos: [],
    userQuery: '',
    page: 1,
    isLoading: false,
    isShowButton: false,
    largeImg: null,
    isShowModal: false,
  };

  componentDidUpdate(_, prevState) {
    const { userQuery, page } = this.state;
    if (prevState.userQuery !== userQuery || prevState.page !== page) {
      this.takePhotos(userQuery, page);
    }
  }

  async takePhotos(userQuery, page) {
    this.setState({ isLoading: true });
    try {
      const newPhotos = await fetchImg(userQuery, page);
      if (newPhotos.hits.length === 0) {
        alert('no result');
      }
      this.setState(prevState => ({
        photos: [...prevState.photos, ...newPhotos.hits],
        isShowButton: Math.ceil(page < newPhotos.totalHits / 12),
      }));
    } catch (error) {
      alert({ error });
    } finally {
      this.setState({ isLoading: false });
    }
  }

  onSubmit = query => {
    this.setState({ userQuery: query, photos: [], page: 1 });
  };
  takeMorePhotos = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  onSelect = largeImg => {
    this.setState({ largeImg: largeImg, isShowModal: true });
  };
  closeModal = () => {
    this.setState(({ isShowModal }) => ({ isShowModal: !isShowModal }));
  };

  render() {
    const { isShowButton, photos, isLoading, isShowModal, largeImg } =
      this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />

        {photos.length > 0 && (
          <>
            <ImageGallery photos={photos} onSelect={this.onSelect} />
            {isLoading && <Loader />}
            {isShowButton && <Button onClick={this.takeMorePhotos} />}
          </>
        )}

        {isShowModal && (
          <Modal onClose={this.closeModal} largeImg={largeImg}></Modal>
        )}
      </div>
    );
  }
}
