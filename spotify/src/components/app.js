import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar.js';
import SongItem from './SongItem/SongItem.js';

import searchSpotify from '../utils/searchSpotify';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      song: '',
      tracks: {},
    };
  }

	fetchSongs = () => {
		searchSpotify(this.state.song)
			.then(( {tracks}) => this.setState({ tracks }))
	}
  render() {
    const { tracks } = this.state;
    console.log(tracks)
    return (
      <div>
      	<SearchBar fetchSongs={this.fetchSongs} updateText={(song) => this.setState({song})}/>
        {tracks.items && <SongItem songData={tracks.items[0]} />}
      </div>
    );
  }
}
