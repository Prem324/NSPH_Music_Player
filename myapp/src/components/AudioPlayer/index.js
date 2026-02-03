import React, { Component } from "react";
import {
  FaPlay,
  FaPause,
  FaVolumeUp,
  FaVolumeMute,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaRetweet,
  FaHeart,
  FaRegHeart,
  FaListUl,
} from "react-icons/fa";
import "./index.css";

class AudioPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: props.autoPlay || false,
      currentTime: 0,
      duration: 0,
      volume: 1,
      trackIndex: props.currentTrackIndex || 0,
      isMuted: false,
      isShuffle: false,
      isLoop: false,
    };

    this.audioRef = React.createRef();
    this.playPromise = null;
    this.touchStartX = 0;
    this.touchStartY = 0;
  }

  handleTouchStart = (e) => {
    this.touchStartX = e.touches[0].clientX;
    this.touchStartY = e.touches[0].clientY;
  };

  handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;

    const dx = touchEndX - this.touchStartX;
    const dy = touchEndY - this.touchStartY;

    // Thresholds: at least 50px horizontal, and more horizontal than vertical
    if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
      if (dx < 0) {
        // Swipe Left -> Next
        this.handleNextTrack();
      } else {
        // Swipe Right -> Prev
        this.handlePrevTrack();
      }
    }
  };

  componentDidMount() {
    this.loadTrack(this.state.trackIndex, this.props.autoPlay);
    this.audioRef.current.addEventListener("timeupdate", this.handleTimeUpdate);
    this.audioRef.current.addEventListener(
      "loadedmetadata",
      this.handleMetadataLoaded
    );
  }

  componentDidUpdate(prevProps) {
    if (prevProps.currentTrackIndex !== this.props.currentTrackIndex || prevProps.playlist !== this.props.playlist) {
      this.setState({ trackIndex: this.props.currentTrackIndex }, () => {
        this.loadTrack(this.props.currentTrackIndex, true);
      });
    }
  }

  componentWillUnmount() {
    if (this.audioRef.current) {
      this.audioRef.current.pause();
      this.audioRef.current.src = "";
      this.audioRef.current.removeEventListener(
        "timeupdate",
        this.handleTimeUpdate
      );
      this.audioRef.current.removeEventListener(
        "loadedmetadata",
        this.handleMetadataLoaded
      );
    }
  }

  loadTrack = (index, shouldPlay) => {
    const { playlist } = this.props;
    if (!playlist || !playlist[index]) return;

    if (this.playPromise !== null) {
      this.playPromise.then(() => this.executeLoad(index, shouldPlay)).catch(() => this.executeLoad(index, shouldPlay));
    } else {
      this.executeLoad(index, shouldPlay);
    }
  };

  executeLoad = (index, shouldPlay) => {
    const audio = this.audioRef.current;
    const { playlist } = this.props;

    audio.pause();
    audio.src = playlist[index].src;
    audio.load();

    if (shouldPlay) {
      this.safePlay();
    }
  };

  safePlay = () => {
    const audio = this.audioRef.current;
    this.playPromise = audio.play();

    if (this.playPromise !== undefined) {
      this.playPromise
        .then(() => {
          this.setState({ isPlaying: true });
          this.playPromise = null;
        })
        .catch((error) => {
          console.error("Playback interrupted:", error);
          this.setState({ isPlaying: false });
          this.playPromise = null;
        });
    }
  };

  handlePlayPause = () => {
    const audio = this.audioRef.current;
    if (this.state.isPlaying) {
      audio.pause();
      this.setState({ isPlaying: false });
    } else {
      this.safePlay();
    }
  };

  handleSeek = (e) => {
    const audio = this.audioRef.current;
    const progressBar = e.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = progressBar.offsetWidth;
    const newTime = (clickX / width) * this.state.duration;
    if (Number.isFinite(newTime)) {
      audio.currentTime = newTime;
    }
  };

  handleVolumeChange = (e) => {
    const volume = parseFloat(e.target.value);
    this.setState({ volume, isMuted: volume === 0 });
    this.audioRef.current.volume = volume;
    this.audioRef.current.muted = volume === 0;
  };

  toggleMute = () => {
    this.setState(prevState => {
      const newMuted = !prevState.isMuted;
      this.audioRef.current.muted = newMuted;
      return { isMuted: newMuted };
    });
  };

  handleNextTrack = () => {
    const { playlist } = this.props;
    const { trackIndex, isShuffle } = this.state;
    let nextIndex;

    if (isShuffle) {
      nextIndex = Math.floor(Math.random() * playlist.length);
    } else {
      nextIndex = (trackIndex + 1) % playlist.length;
    }

    this.setState({ trackIndex: nextIndex }, () => {
      this.loadTrack(nextIndex, true);
    });
  };

  handlePrevTrack = () => {
    const { playlist } = this.props;
    const { trackIndex } = this.state;
    const prevIndex = (trackIndex - 1 + playlist.length) % playlist.length;
    this.setState({ trackIndex: prevIndex }, () => {
      this.loadTrack(prevIndex, true);
    });
  };

  toggleShuffle = () => {
    this.setState(prevState => ({ isShuffle: !prevState.isShuffle }));
  };

  toggleLoop = () => {
    this.setState(prevState => {
      const newLoop = !prevState.isLoop;
      this.audioRef.current.loop = newLoop;
      return { isLoop: newLoop };
    });
  };

  handleTimeUpdate = () => {
    const audio = this.audioRef.current;
    this.setState({ currentTime: audio.currentTime });
  };

  handleMetadataLoaded = () => {
    const audio = this.audioRef.current;
    this.setState({ duration: audio.duration });
  };

  formatTime = (seconds) => {
    if (!seconds || !Number.isFinite(seconds)) return "0:00";
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds}`;
  };

  render() {
    const { playlist, isLiked, toggleLike } = this.props;
    const {
      isPlaying,
      currentTime,
      duration,
      volume,
      trackIndex,
      isMuted,
      isShuffle,
      isLoop
    } = this.state;

    if (!playlist || playlist.length === 0) return null;
    const track = playlist[trackIndex] || playlist[0];
    const progressPercent = (currentTime / duration) * 100 || 0;

    const colors = ['#e91429', '#1db954', '#2196f3', '#ff9800', '#9c27b0', '#795548']
    // track.id is our songId passed from App.js
    const bgColor = colors[track.id % colors.length]
    const displayTitle = track.title.replace(/^\d+\s+/, '').trim()
    const displayLetter = displayTitle[0] || track.title[0]

    return (
      <div
        className="audio-player"
        onTouchStart={this.handleTouchStart}
        onTouchEnd={this.handleTouchEnd}
      >
        <div className="current-track-info-section">
          <div className="track-art-placeholder" style={{ backgroundColor: bgColor, color: '#fff' }}>
            {displayLetter}
          </div>
          <div className="track-text-container">
            <h4 className="track-name-display">{displayTitle}</h4>
            {track.credits && <p className="track-credits-display">{track.credits}</p>}
          </div>
          <button className="like-btn" onClick={toggleLike}>
            {isLiked ? <FaHeart color="#ef4444" /> : <FaRegHeart />}
          </button>
        </div>

        <div className="player-controls-section">
          <div className="control-buttons-row">
            <button className={`control-icon-btn ${isShuffle ? 'active-icon' : ''}`} onClick={this.toggleShuffle}>
              <FaRandom size={16} color={isShuffle ? 'var(--accent-primary)' : 'inherit'} />
            </button>
            <button className="control-icon-btn" onClick={this.handlePrevTrack}><FaStepBackward size={18} /></button>
            <button className="play-pause-circle-btn" onClick={this.handlePlayPause}>
              {isPlaying ? <FaPause size={14} /> : <FaPlay size={14} style={{ marginLeft: '2px' }} />}
            </button>
            <button className="control-icon-btn" onClick={this.handleNextTrack}><FaStepForward size={18} /></button>
            <button className={`control-icon-btn ${isLoop ? 'active-icon' : ''}`} onClick={this.toggleLoop}>
              <FaRetweet size={16} color={isLoop ? 'var(--accent-primary)' : 'inherit'} />
            </button>
          </div>

          <div className="progress-interactive-area">
            <span className="time-stamp">{this.formatTime(currentTime)}</span>
            <div className="progress-bar-container" onClick={this.handleSeek}>
              <div className="progress-fill" style={{ width: `${progressPercent}%` }}>
                <div className="progress-knob"></div>
              </div>
            </div>
            <span className="time-stamp">{this.formatTime(duration)}</span>
          </div>
        </div>

        <div className="player-utility-section">
          <button className="utility-icon-btn"><FaListUl size={14} /></button>
          <div className="volume-interaction-container">
            <button className="utility-icon-btn" style={{ padding: 0 }} onClick={this.toggleMute}>
              {isMuted || volume === 0 ? <FaVolumeMute size={18} /> : <FaVolumeUp size={18} />}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              className="volume-slider-input"
              value={isMuted ? 0 : volume}
              onChange={this.handleVolumeChange}
              style={{ '--volume-percent': `${(isMuted ? 0 : volume) * 100}%` }}
            />
          </div>
        </div>

        <audio ref={this.audioRef} onEnded={isLoop ? undefined : this.handleNextTrack}></audio>
      </div>
    );
  }
}

export default AudioPlayer;
