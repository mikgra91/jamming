import React from 'react';
import './App.css';
import SearchBar from './SearchBar.js';
import SearchResult from './SearchResult.js';
import Playlist from './Playlist.js';

class App extends React.Component {
  constructor(props){
	  super(props);
	  
	  this.state = {
		  searchResult: [name, artist, album]
	  };
  }
  
  render() {
    return (
		<div>
		<h1>Ja<span className="highlight">mmm</span>ing</h1>
		<div className="App">
			<SearchBar />
			<div className="App-playlist">
			<SearchResult searchResult={this.state.searchResult} />
			<Playlist />
			</div>
		</div>
		</div>
    );
  }
}

export default App;
