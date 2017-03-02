import React, { Component } from 'react';
import sc from 'soundcloud';
import Sound from 'react-sound';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.client_id = 'nEiIRmC7WeW4uk5Oqz1V3Zxelh2XosRn';
    this.state = {
      currentTrack: 0
    };
  }
  componentDidMount() {
    sc.initialize({
      client_id: this.client_id
    });

    this.streamSound();
  }

  streamSound() {
    axios.get(`https://api.soundcloud.com/playlists/303998296?client_id=${this.client_id}`)
      .then(res => res.data)
      .then(playlist => playlist.tracks[this.state.currentTrack])
      .then(track => this.setState({ track }))
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.track);
    return (
      <div id="app">
        <Sound
          url={`https://api.soundcloud.com/tracks/196278622/stream?client_id=${this.client_id}`}
          playStatus={Sound.status.PLAYING}
        />
      </div>
    );
  }
}

export default App;
