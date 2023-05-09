import { Component } from 'react';
import PropTypes from 'prop-types';
import '../../styles/styles.css';

class Searchbar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    query: '',
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ query: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.query.trim() === '') {
      alert('write something');
      return;
    }
    this.props.onSubmit(this.state.query.trim());
    this.setState({ query: '' });
  };
  render() {
    return (
      <header className="searchbar">
        <form className="searchForm" onSubmit={this.handleSubmit}>
          <button type="submit" className="searchForm-button">
            <span className="searchForm-button-label">Search</span>
          </button>

          <input
            className="searchForm-input"
            onChange={this.handleChange}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={this.state.query}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
