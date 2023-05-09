import { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.css';
import ImageGalleryItem from 'components/imageGalleryItem/ImageGalleryItem';

class ImageGallery extends Component {
  static propTypes = {
    photos: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
  };
  render() {
    const { photos, onSelect } = this.props;
    return (
      <ul className="imageGallery">
        {photos.map(({ id, webformatURL, largeImageURL }) => (
          <ImageGalleryItem
            key={id}
            webformatURL={webformatURL}
            largeImageURL={largeImageURL}
            onSelect={onSelect}
          />
        ))}
      </ul>
    );
  }
}

export default ImageGallery;
