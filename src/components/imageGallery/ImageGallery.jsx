import { Component } from 'react';

import '../../styles/styles.css';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  render() {
    const { photos } = this.props;
    return (
      <ul className="imageGallery">
        {photos.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
