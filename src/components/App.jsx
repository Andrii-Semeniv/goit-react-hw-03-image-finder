import { Component } from 'react';
import '../styles/styles.css';

import Searchbar from './searchbar/Searchbar';
import fetchImg from 'api/fetch';
import ImageGallery from './imageGallery/ImageGallery';
import Button from './button/Button';

export class App extends Component {
  state = {
    photos: [],
    userQuery: '',
    page: 1,
    isLoading: false,
    isShowButton: false,
  };

  componentDidUpdate(_, prevState) {
    const { userQuery, page } = this.state;
    if (prevState.userQuery !== userQuery || prevState.page !== page) {
      this.takePhotos(userQuery, page);
    }
  }

  async takePhotos(userQuery, page) {
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
    }
  }

  onSubmit = query => {
    this.setState({ userQuery: query, photos: [], page: 1 });
  };
  takeMorePhotos = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { isShowButton, photos } = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.onSubmit} />
        {photos.length > 0 && (
          <>
            <ImageGallery photos={photos} />
            {isShowButton && <Button onClick={this.takeMorePhotos} />}
          </>
        )}
      </div>
    );
  }
}
