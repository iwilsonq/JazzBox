import React, { Component } from 'react';
import Sound from 'react-sound';
import axios from 'axios';
import Player from './Player';

//METHODS

class App extends Component {
  constructor(props) {
    super(props);
    this.client_id = 'nEiIRmC7WeW4uk5Oqz1V3Zxelh2XosRn';
    this.state = {
      track: { stream_url: '', title: '', artwork_url: '' },
      tracks: [],
      playStatus: Sound.status.STOPPED,
      elapsed: '00:00',
      total: '00:00',
      position: 0,
      playFromPosition: 0
    };
  }

  componentDidMount() {
    this.randomTrack();
  }

  prepareURL(url) {
    return `${url}?client_id=${this.client_id}`;
  }

  streamSound() {
    axios.get(`https://api.soundcloud.com/playlists/303998296?client_id=${this.client_id}`)
      .then(res => res.data)
      .then(playlist => playlist.tracks[this.state.currentTrack])
      .then(track => this.setState({ track }))
      .catch(err => console.log(err));
  }

  randomTrack() {
    axios.get(`https://api.soundcloud.com/playlists/303998296?client_id=${this.client_id}`)
      .then(res => {
        const tracksCount = res.data.tracks.length;
        const randomNumber = Math.floor(Math.random() * tracksCount);
        this.setState({ track: res.data.tracks[randomNumber]});
      });
  }

  render() {
    console.log(this.state.track);
    //Sound also takes onPlaying, playFromPosition, onFinishedPlaying
    return (
      <div id="app">
        <Sound
          url={this.prepareURL(this.state.track.stream_url)}
          playStatus={Sound.status.STOPPED}
        />
        <Player />
      </div>
    );
  }
}

export default App;
