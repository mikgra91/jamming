import React from 'react';
import './tracklistCss.css';
import Track from './Track.js';

class TrackList extends React.Component {
	render() {
		return(
			<div className="TrackList">
				<Track track={this.props.track}/>
				<Track />
				<Track />
			</div>
		);
	}
	
}

export default TrackList;