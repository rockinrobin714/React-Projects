import React, { Component } from 'react';
import SearchBar from './SearchBar/SearchBar.js';

import searchSpotify from '../utils/searchSpotify';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      initialMessage: 'greeting',
      song: '',
    };
  }
fetchSongs = () => {
	searchSpotify(this.state.song)
		.then((tracks) => console.log('tracks',tracks))
}
  render() {
    const { initialMessage, song } = this.state;
    console.log(song)
    return (
      <div>
      	<SearchBar fetchSongs={this.fetchSongs} updateText={(song) => this.setState({song})}/>
        {initialMessage}
      </div>
    );
  }
}
