import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';
import InspirationList from './InspirationList';

class InspirationApp extends React.Component {
  state = { images: [] };

  onSearchSubmit = async term => {
    const response = await unsplash.get('/search/photos', {
      params: { query: `${term}+surf` }
    });

    this.setState({ images: response.data.results })
  }

  render() {
    return (
      <div className="ui container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <InspirationList images={this.state.images} />
      </div>
    )
  }
}

export default InspirationApp;