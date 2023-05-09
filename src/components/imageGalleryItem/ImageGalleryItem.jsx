import { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.css';

class ImageGalleryItem extends Component {
  static propTypes = {
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string,
    onSelect: PropTypes.func.isRequired,
  };
  handleClick = () => {
    this.props.onSelect(this.props.largeImageURL);
  };
  render() {
    const { webformatURL } = this.props;
    return (
      <li className="imageGalleryItem">
        <img src={webformatURL} alt="example" onClick={this.handleClick} />
      </li>
    );
  }
}

export default ImageGalleryItem;
