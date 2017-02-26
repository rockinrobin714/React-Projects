import React, { Component } from 'react';
import styles from './app.css';
import SearchBar from './SearchBar/SearchBar.js';
import SongItem from './SongItem/SongItem.js';
import SongList from './SongList/SongList.js';

import searchSpotify from '../utils/searchSpotify';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      song: '',
      tracks: {},
      songPosition: 0,
    };
  }

	fetchSongs = () => {
		searchSpotify(this.state.song)
			.then(( {tracks}) => this.setState({ tracks }))
	}
  render() {
    const { tracks, songPosition } = this.state;

    return (
      <div className={styles.root}>
      	<SearchBar fetchSongs={this.fetchSongs} updateText={(song) => this.setState({song})}/>
        {tracks.items && <SongItem songData={tracks.items[songPosition]} />}
      	{tracks.items && <SongList listOfSongs={tracks.items} selectSong={(songPosition)=> this.setState({ songPosition })} />}
      </div>
    );
  }
}
