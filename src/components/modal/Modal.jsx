import { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.css';

class Modal extends Component {
  static propTypes = {
    largeImg: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };
  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyDown);
  }
  handleKeyDown = evt => {
    if (evt.key === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClose = evt => {
    if (evt.target === evt.currentTarget) {
      this.props.onClose();
    }
  };
  render() {
    return (
      <div className="overlay" onClick={this.handleOverlayClose}>
        <div className="modal">
          <img src={this.props.largeImg} alt="example" />
        </div>
      </div>
    );
  }
}

export default Modal;
