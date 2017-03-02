import React from 'react';

const Player = props => {
  return (
    <div className="player-wrapper">
      <div className="player">
        <div className="controls">
          <div className="control">
            <i className="material-icons">skip_previous</i>
          </div>
          <div className="control">
            <i className="material-icons">play_arrow</i>
          </div>
          <div className="control">
            <i className="material-icons">skip_next</i>
          </div>
        </div>
        <div className="progress-wrapper">
          <span className="elapsed">0:00</span>
          <div className="progress-background"></div>
          <div className="progress-bar"></div>
          <div className="progress-marker"></div>
          <span className="total">2:57</span>
        </div>
        <div className="volume">
          <i className="material-icons">volume_up</i>
        </div>
        <div className="track-details">
          <div className="track-art">
            art
          </div>
          <div className="track-title">
            My song title
          </div>
          <div className="like">
            <i className="material-icons">star_border</i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
