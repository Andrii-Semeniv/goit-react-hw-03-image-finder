import { Component } from 'react';

import '../../styles/styles.css';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, largeImageURL } = this.props;
    return (
      <li className="imageGalleryItem">
        <img src={webformatURL} alt="example" />
      </li>
    );
  }
}

export default ImageGalleryItem;
