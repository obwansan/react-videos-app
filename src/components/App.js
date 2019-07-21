import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';

class App extends React.Component {
  state = { videos: [] };

  // The URL for a search for 'buildings' looks like this: https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&key=AIzaSyADjMF1SzxmoyDfGS1hXR9aWPBcYxMB7jY&q=buildings
  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });
    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onTermSubmit={this.onTermSubmit} />
        I have {this.state.videos.length} videos
      </div>
    )
  }
}

export default App;