import React from 'react';
import './searchResultCss.css';
import TrackList from './TrackList.js';
class SearchResult extends React.Component {
	render() {
		return(
			<div className="SearchResults">
			<h2>Results</h2>
			<TrackList tracks={this.props.searchResult}/>
			</div>
		);
	}
}

export default SearchResult;