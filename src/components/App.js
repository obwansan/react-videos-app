import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  onTermSubmit = term => {
    // 'youtube' is a preconfigured instance of axios
    // '/search' is appended to the base URL. q:term is appended to the params.
    // The GET request URL looks like this: https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyADjMF1SzxmoyDfGS1hXR9aWPBcYxMB7jY&q=buildings
    youtube.get('/search', {
      params: {
        q: term
      }
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
      </div>
    )
  }
}

export default App;