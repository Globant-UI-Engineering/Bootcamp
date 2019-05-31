import React from 'react';

const searchBarStyle = {
  marginTop: '10px'
};

class SearchBar extends React.Component {
  state = { term: '' };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
  }

  render() {
    return (
      <div style={searchBarStyle}>
        <div className="ui segment">
          <form onSubmit={this.onFormSubmit} className="ui form">
            <div className="field">
              <label>Inspire yourself with Surf:</label>
              <input
                type="text"
                placeholder="Type something... and press ENTER. All the search would be 'term + surf' 🏄"
                value={this.state.term}
                onChange={e => this.setState({ term: e.target.value })}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchBar;