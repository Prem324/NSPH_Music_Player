import React, { Component, createRef } from "react";
import { FaHome, FaSearch, FaBook, FaHeart, FaBars, FaTimes, FaYoutube } from "react-icons/fa";
import TabItem from "./components/TabItem";
import Songs from "./components/Songs";
import Promos from "./components/Promos";
import AudioPlayer from "./components/AudioPlayer";
import "./App.css";

const promosList = [
  {
    promoId: "ABBA THANDRI",
    promoTitle: "Abba Thandri Promo",
    promoUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713427599/Promos/Abba%20Tandri.mp4",
  },
  {
    promoId: "PRANAMAA STHUTHINCHU",
    promoTitle: "Pranamaa Sthuthinchu Promo",
    promoUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713427610/Promos/Pranam%20Sthuthinchu.mp4",
  },
  {
    promoId: "NEEVE ALPHA",
    promoTitle: "Neeve Alpha Promo",
    promoUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713427592/Promos/Neeve%20Alpha.mp4",
  },
];

const tabsList = [
  { tabId: "ABBA THANDRI", displayText: "Abba Thandri" },
  { tabId: "PRANAMAA STHUTHINCHU", displayText: "Pranamaa Sthuthinchu" },
  { tabId: "NEEVE ALPHA", displayText: "Neeve Alpha" },
];

const songsList = [
  {
    songId: 0,
    category: "ABBA THANDRI",
    songTitle: "Intro",
    artist: "Rev Ch Samuel Victor",
    credits: "Intro by Rev. Samuel Victor",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713371523/Albums/Abba%20Thandri/Intro.mp3",
  },
  {
    songId: 1,
    category: "ABBA THANDRI",
    songTitle: "02 Abba Thandri",
    artist: "Stanley",
    credits: "Lyrics & Tune: Stanley Titus",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713371525/Albums/Abba%20Thandri/Abba%20Thandri.mp3",
  },
  {
    songId: 2,
    category: "ABBA THANDRI",
    songTitle: "03 Viduvani Devudavu",
    artist: "Sharon",
    credits: "Sung by Sis. Sharon",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713371525/Albums/Abba%20Thandri/Viduvani%20Devudavu.mp3",
  },
  {
    songId: 3,
    category: "ABBA THANDRI",
    songTitle: "04 Nennu Vidachi",
    artist: "Stanley, Sharon",
    credits: "Duo: Stanley & Sharon",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713371525/Albums/Abba%20Thandri/Nennu%20Vidachi.mp3",
  },
  {
    songId: 4,
    category: "ABBA THANDRI",
    songTitle: "05 Naa Papamu Kshamiyinchu",
    artist: "Kripal",
    credits: "Sung by Bro. Kripal Mohan",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713371525/Albums/Abba%20Thandri/Naa%20Papamu%20Kshamiyinchu.mp3",
  },
  {
    songId: 5,
    category: "ABBA THANDRI",
    songTitle: "06 Manchivaadu Naa Yessayya",
    artist: "Stanley",
    credits: "Lyrics & Tune: Stanley Titus",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713371526/Albums/Abba%20Thandri/Manchivaadu%20Naa%20Yessayya.mp3",
  },
  {
    songId: 6,
    category: "ABBA THANDRI",
    songTitle: "07 Naa Athikramame",
    artist: "Stanley, Shakeena",
    credits: "Duo: Stanley & Shakeena",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713371526/Albums/Abba%20Thandri/Manchivaadu%20Naa%20Yessayya.mp3",
  },
  {
    songId: 7,
    category: "ABBA THANDRI",
    songTitle: "08 Padhe Padhe Nennu",
    artist: "Stanley",
    credits: "Lyrics & Tune: Stanley Titus",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713371526/Albums/Abba%20Thandri/Padhe%20Padhe%20Nennu.mp3",
  },
  {
    songId: 8,
    category: "ABBA THANDRI",
    songTitle: "09 El Shaddai",
    artist: "Kripal",
    credits: "Sung by Bro. Kripal Mohan",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713371527/Albums/Abba%20Thandri/El%20Shaddai.mp3",
  },
  {
    songId: 9,
    category: "ABBA THANDRI",
    songTitle: "10  Closing",
    artist: "Rev Dr Ch Samson",
    credits: "Prayer by Rev. Dr. Samson",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713371526/Albums/Abba%20Thandri/Closing.mp3",
  },

  {
    songId: 10,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "Intro",
    artist: "Rev. Samuel Victor",
    credits: "Intro by Rev. Samuel Victor",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372416/Albums/Pranama%20Sthuthinchu/Intro.mp3",
  },
  {
    songId: 11,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "02 Nee Prema Leni Kshnam",
    artist: "Stanley",
    credits: "Tune, Lyric & Sung by Stanley",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372418/Albums/Pranama%20Sthuthinchu/Nee%20Prema%20Leni%20Kshnam.mp3",
  },
  {
    songId: 12,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "03 Yemaina Neevu",
    artist: "Shakeena",
    credits: "Tune: Stanley, Sung by Shakeena",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372417/Albums/Pranama%20Sthuthinchu/Yemaina%20Neevu%20Cheyagalavayya.mp3",
  },
  {
    songId: 13,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "04 Lekinchaleni Sthotramul",
    artist: "Sharon",
    credits: "Sung by Sis. Sharon",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372418/Albums/Pranama%20Sthuthinchu/Lekinchaleni%20Sthotramul.mp3",
  },
  {
    songId: 14,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "05 Preminchedhan",
    artist: "Stanley",
    credits: "Sung by Bro. Stanley",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372421/Albums/Pranama%20Sthuthinchu/Preminchedhan.mp3",
  },
  {
    songId: 15,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "06 Pranama Stuthinchu",
    artist: "Stanley",
    credits: "Lead Vocal: Stanley Titus",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372421/Albums/Pranama%20Sthuthinchu/Pranama%20Stuthinchu.mp3",
  },
  {
    songId: 16,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "07 Deva Prasannatha",
    artist: "Stanley",
    credits: "Sung by Bro. Stanley",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372419/Albums/Pranama%20Sthuthinchu/Deva%20Prasannatha.mp3",
  },
  {
    songId: 17,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "08 Yehovaye",
    artist: "Dolly",
    credits: "Sung by Sis. Dolly",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372420/Albums/Pranama%20Sthuthinchu/Yehovaye.mp3",
  },
  {
    songId: 18,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "09 Deevenalatho",
    artist: "Stanley",
    credits: "Sung by Bro. Stanley",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372421/Albums/Pranama%20Sthuthinchu/Naa%20Devudu.mp3",
  },
  {
    songId: 19,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "10 Aadedan Paadedan",
    artist: "Samuel Mories",
    credits: "Sung by Bro. Samuel Mories",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372420/Albums/Pranama%20Sthuthinchu/Aadedan%20Paadedan.mp3",
  },
  {
    songId: 20,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "11 Naa Pranama",
    artist: "Stanley",
    credits: "Tune, Lyric & Sung by Stanley",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372421/Albums/Pranama%20Sthuthinchu/Naa%20Pranama%20Yela.mp3",
  },
  {
    songId: 21,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "12 Ganaparachedanu",
    artist: "Stanley",
    credits: "Tune, Lyric & Sung by Stanley",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372423/Albums/Pranama%20Sthuthinchu/Ganaparachedanu.mp3",
  },
  {
    songId: 22,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "13 Nee Parishudhathanu",
    artist: "Lydia",
    credits: "Sung by Sis. Lydia",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372424/Albums/Pranama%20Sthuthinchu/Nee%20Parishudhathanu.mp3",
  },
  {
    songId: 23,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "14 El Shaddai",
    artist: "Dolly",
    credits: "Sung by Sis. Dolly",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372424/Albums/Pranama%20Sthuthinchu/El%20Shaddai.mp3",
  },
  {
    songId: 24,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "15 Neeve Naa Ashrayam",
    artist: "Rajesh Noble",
    credits: "Sung by Bro. Rajesh Noble",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372424/Albums/Pranama%20Sthuthinchu/Neeve%20Naa%20Ashrayam.mp3",
  },
  {
    songId: 25,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "16 Nee Sannidhe",
    artist: "Stanley",
    credits: "Tune, Lyric & Sung by Stanley",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372424/Albums/Pranama%20Sthuthinchu/Nee%20Sannidhe.mp3",
  },
  {
    songId: 26,
    category: "PRANAMAA STHUTHINCHU",
    songTitle: "17 Closing",
    artist: "Rev. Dr. Ch. Samson",
    credits: "Prayer by Ref. Dr. Ch. Samson",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713372423/Albums/Pranama%20Sthuthinchu/Closing.mp3",
  },
  {
    songId: 27,
    category: "NEEVE ALPHA",
    songTitle: "01 Sthuthiyu Mahima",
    artist: "Chorus NSPH",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713373520/Albums/Neeve%20Alpha/STHUTHIYU.mp3",
  },
  {
    songId: 28,
    category: "NEEVE ALPHA",
    songTitle: "02 Neeve Alpha",
    artist: "Chorus NSPH",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713373521/Albums/Neeve%20Alpha/NEEVE%20ALPHA.mp3",
  },
  {
    songId: 29,
    category: "NEEVE ALPHA",
    songTitle: "03 Neeve Chaalu",
    artist: "Chorus NSPH",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713373520/Albums/Neeve%20Alpha/NEEVE%20CHAALU.mp3",
  },
  {
    songId: 30,
    category: "NEEVE ALPHA",
    songTitle: "04 Maha Ghanuda",
    artist: "Chorus NSPH",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713373520/Albums/Neeve%20Alpha/MAHA%20GHANUDA.mp3",
  },
  {
    songId: 31,
    category: "NEEVE ALPHA",
    songTitle: "05 Ye Papamu Leni",
    artist: "Chorus NSPH",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713373520/Albums/Neeve%20Alpha/YE%20PAPAMU%20LENI.mp3",
  },
  {
    songId: 32,
    category: "NEEVE ALPHA",
    songTitle: "06 Sthothram",
    artist: "Chorus NSPH",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713373521/Albums/Neeve%20Alpha/STHOTHRAM.mp3",
  },
  {
    songId: 33,
    category: "NEEVE ALPHA",
    songTitle: "07 Vandhanam",
    artist: "Chorus NSPH",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713373525/Albums/Neeve%20Alpha/VANDHANAM.mp3",
  },
  {
    songId: 34,
    category: "NEEVE ALPHA",
    songTitle: "08 Priyamaina Deevudavu",
    artist: "Chorus NSPH",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713373525/Albums/Neeve%20Alpha/PRIYAMAINA%20DEVUDAVU.mp3",
  },
  {
    songId: 35,
    category: "NEEVE ALPHA",
    songTitle: "09 Paapinaya",
    artist: "Chorus NSPH",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713373525/Albums/Neeve%20Alpha/PAAPINAYA.mp3",
  },
  {
    songId: 36,
    category: "NEEVE ALPHA",
    songTitle: "10 Kapari",
    artist: "Chorus NSPH",
    songUrl:
      "https://res.cloudinary.com/dlakv8a0n/video/upload/v1713373528/Albums/Neeve%20Alpha/KAPARI.mp3",
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTabId: tabsList[0].tabId,
      currentSongIndex: 0,
      isPlaying: false,
      searchInput: "",
      playingPlaylist: songsList.filter(s => s.category === tabsList[0].tabId),
      likedSongIds: [],
      isMenuOpen: false,
    };
    this.searchInputRef = createRef();
  }

  toggleMenu = () => {
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  handleAlbumClick = (tabId) => {
    this.clickTabItem(tabId);
    this.setState({ isMenuOpen: false });
  };

  clickTabItem = (tabValue) => {
    const newPlaylist = songsList.filter(s => s.category === tabValue);
    this.setState({
      activeTabId: tabValue,
      searchInput: "",
      currentSongIndex: 0,
      playingPlaylist: newPlaylist,
      isPlaying: false,
    });
  };

  handleHomeClick = () => {
    this.clickTabItem(tabsList[0].tabId);
  };

  handleSearchSidebarClick = () => {
    this.setState({ activeTabId: 'SEARCH' }, () => {
      if (this.searchInputRef.current) {
        this.searchInputRef.current.focus();
      }
    });
  };

  handlePlaySong = (index) => {
    const filteredSongs = this.getFilteredSongs();
    this.setState({
      playingPlaylist: filteredSongs,
      currentSongIndex: index,
      isPlaying: true
    });
  };

  handleSearchChange = (event) => {
    this.setState({ searchInput: event.target.value, activeTabId: event.target.value ? 'SEARCH' : this.state.activeTabId });
  };

  toggleLikeSong = (songId) => {
    this.setState(prevState => {
      const { likedSongIds } = prevState;
      if (likedSongIds.includes(songId)) {
        return { likedSongIds: likedSongIds.filter(id => id !== songId) };
      }
      return { likedSongIds: [...likedSongIds, songId] };
    });
  };

  getFilteredSongs = () => {
    const { activeTabId, searchInput } = this.state;
    if (activeTabId === 'SEARCH' || searchInput !== "") {
      return songsList.filter(each =>
        each.songTitle.toLowerCase().includes(searchInput.toLowerCase())
      );
    }
    if (activeTabId === 'LIKED') {
      return songsList.filter(s => this.state.likedSongIds.includes(s.songId));
    }
    return songsList.filter(
      (eachsongDetails) => eachsongDetails.category === activeTabId
    );
  };

  getPromoUrl = () => {
    const { activeTabId } = this.state;
    const currentTab = tabsList.find(t => t.tabId === activeTabId);
    if (!currentTab) return [promosList[0]]; // Default promo if in special view
    return promosList.filter(
      (eachPromo) => eachPromo.promoId === activeTabId
    );
  };

  renderSidebar = () => {
    const { likedSongIds, activeTabId, searchInput } = this.state;
    const isHomeActive = activeTabId === tabsList[0].tabId && !searchInput;
    const isSearchActive = activeTabId === 'SEARCH';

    return (
      <aside className="sidebar">
        <nav className="sidebar-nav">
          <div
            className={`nav-item ${isHomeActive ? 'active' : ''}`}
            onClick={this.handleHomeClick}
          >
            <FaHome size={26} />
            <span>Home</span>
          </div>
          <div
            className={`nav-item ${isSearchActive ? 'active' : ''}`}
            onClick={this.handleSearchSidebarClick}
          >
            <FaSearch size={26} />
            <span>Search</span>
          </div>
          <div
            className={`nav-item mobile-only ${activeTabId === 'LIKED' ? 'active' : ''}`}
            onClick={() => this.setState({ activeTabId: 'LIKED', searchInput: "" })}
          >
            <FaBook size={26} />
            <span>Library</span>
          </div>
        </nav>

        <div className="sidebar-library">
          <div className="nav-item" style={{ cursor: 'default', opacity: 1 }}>
            <FaBook size={26} />
            <span>Your Library</span>
          </div>

          <div style={{ marginTop: '8px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            <div className={`nav-item ${activeTabId === 'LIKED' ? 'active' : ''}`}
              style={{ padding: '8px 12px' }}
              onClick={() => this.setState({ activeTabId: 'LIKED', searchInput: "" })}>
              <div style={{
                width: '48px',
                height: '48px',
                background: 'linear-gradient(135deg, #450af5, #c4efd9)',
                borderRadius: '4px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '12px'
              }}>
                <FaHeart size={20} color="white" />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '14px', fontWeight: '700' }}>Liked Songs</span>
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Playlist • {likedSongIds.length} songs</span>
              </div>
            </div>

            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)', margin: '8px 12px' }}></div>

            {tabsList.map(tab => (
              <div
                key={tab.tabId}
                className={`nav-item ${this.state.activeTabId === tab.tabId && !searchInput ? 'active' : ''}`}
                style={{ fontSize: '14px', minHeight: '40px', padding: '8px 12px' }}
                onClick={() => this.clickTabItem(tab.tabId)}
              >
                {tab.displayText}
              </div>
            ))}
          </div>
        </div>
      </aside>
    );
  };

  getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  render() {
    const { activeTabId, currentSongIndex, isPlaying, searchInput, playingPlaylist, likedSongIds, isMenuOpen } = this.state;
    const filteredPromos = this.getPromoUrl();
    const filteredSongs = this.getFilteredSongs();

    const currentPlayingSong = playingPlaylist[currentSongIndex];
    const isCurrentSongLiked = currentPlayingSong ? likedSongIds.includes(currentPlayingSong.songId) : false;

    return (
      <div className="app-container">
        {this.renderSidebar()}

        {/* Mobile Sidebar Menu Drawer */}
        <div className={`mobile-menu-overlay ${isMenuOpen ? 'open' : ''}`} onClick={this.toggleMenu}>
          <div className="mobile-menu-drawer" onClick={e => e.stopPropagation()}>
            <div className="mobile-menu-header">
              <h2 className="mobile-menu-title">Explore Albums</h2>
              <button className="close-menu-btn" onClick={this.toggleMenu}>
                <FaTimes size={24} />
              </button>
            </div>
            <ul className="mobile-album-list">
              {tabsList.map(tab => (
                <li
                  key={tab.tabId}
                  className={`mobile-album-item ${activeTabId === tab.tabId ? 'active' : ''}`}
                  onClick={() => this.handleAlbumClick(tab.tabId)}
                >
                  {tab.displayText}
                </li>
              ))}
              <li
                className={`mobile-album-item ${activeTabId === 'LIKED' ? 'active' : ''}`}
                onClick={() => this.handleAlbumClick('LIKED')}
                style={{ marginTop: '12px', color: 'var(--accent-primary)' }}
              >
                <FaHeart style={{ marginRight: '12px' }} /> Liked Songs
              </li>
            </ul>
          </div>
        </div>

        <main className="main-content">
          <header className="top-bar">
            <div className="hamburger-container mobile-only" onClick={this.toggleMenu}>
              <FaBars size={24} />
            </div>
            <div className="search-container" style={{ position: 'relative' }}>
              <FaSearch style={{
                position: 'absolute',
                left: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: searchInput ? '#fff' : '#b3b3b3',
                fontSize: '18px',
                transition: 'color 0.3s'
              }} />
              <input
                type="text"
                ref={this.searchInputRef}
                placeholder="What do you want to play?"
                className="search-input"
                value={searchInput}
                onChange={this.handleSearchChange}
              />
              {searchInput && (
                <button
                  onClick={() => this.setState({ searchInput: "" })}
                  style={{
                    position: 'absolute',
                    right: '16px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '20px'
                  }}
                > × </button>
              )}
            </div>

            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <a
                href="https://www.youtube.com/@chstanleytitus"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <div className="profile-icon">
                  <FaYoutube size={20} />
                </div>
              </a>
            </div>
          </header>

          <div className="music-album-container">
            <header style={{ marginBottom: '32px' }}>
              <div className="album-header">
                <div className="album-icon-container" style={{
                  backgroundColor: activeTabId === 'ABBA THANDRI' ? '#e91429' : (activeTabId === 'PRANAMAA STHUTHINCHU' ? '#1db954' : '#2196f3'),
                }}>
                  {activeTabId === 'ABBA THANDRI' ? 'A' : (activeTabId === 'PRANAMAA STHUTHINCHU' ? 'P' : (activeTabId === 'LIKED' ? '❤' : 'S'))}
                </div>
                <div className="album-info-text">
                  <p className="playlist-label">Playlist</p>
                  <h1 className="album-title">
                    {activeTabId === 'LIKED' ? 'Liked Songs' :
                      (activeTabId === 'SEARCH' ? (searchInput ? `Results for "${searchInput}"` : 'Browse Catalog') :
                        (activeTabId === 'ABBA THANDRI' ? 'Abba Father' :
                          (activeTabId === 'PRANAMAA STHUTHINCHU' ? 'Pranamaa Sthuthinchu' : this.getGreeting())))}
                  </h1>
                  {activeTabId === 'ABBA THANDRI' && (
                    <p className="album-subtitle">
                      <span className="artist-highlight">Bro. Stanley Titus</span> • An Intimate Worship • 10 songs
                    </p>
                  )}
                  {activeTabId === 'PRANAMAA STHUTHINCHU' && (
                    <p className="album-subtitle">
                      <span className="artist-highlight">Bro. Stanley Titus</span> • Bless the Lord • 17 tracks
                    </p>
                  )}
                </div>
              </div>

              {activeTabId !== 'LIKED' && activeTabId !== 'SEARCH' && (
                <div className="promo-credits-wrapper">
                  <div className="promo-section">
                    {filteredPromos.map((promoDetails) => (
                      <Promos promoDetails={promoDetails} key={promoDetails.promoId} />
                    ))}
                  </div>

                  {activeTabId === 'ABBA THANDRI' && (
                    <div className="album-credits-card">
                      <h3 className="credits-title">Album Credits</h3>
                      <div className="credits-list">
                        <p><span className="label">Lyrics & Tunes:</span> Bro. Stanley Titus Chappidi</p>
                        <p><span className="label">Music & Harmony:</span> Bro. Kripal Mohan</p>
                        <p><span className="label">Recorded at:</span> Krupa Studio (Vizag)</p>
                        <p><span className="label">Mastered by:</span> Bro. Solomon Raj</p>
                      </div>
                      <p className="ministry-tag">Living God Ministries Presents</p>
                    </div>
                  )}
                  {activeTabId === 'PRANAMAA STHUTHINCHU' && (
                    <div className="album-credits-card">
                      <h3 className="credits-title">Album Credits</h3>
                      <div className="credits-list">
                        <p><span className="label">Lyrics:</span> Bro. Stanley Titus Chappidi</p>
                        <p><span className="label">Music & Keyboard:</span> Samuel Mories</p>
                        <p><span className="label">Guitars:</span> Manohar Sujit</p>
                        <p><span className="label">Recorded @:</span> Wave Editor Digital Studio (RJY)</p>
                      </div>
                      <p className="ministry-tag">Living God Ministries Presents</p>
                    </div>
                  )}
                </div>
              )}
            </header>

            <section className="songs-section">
              <div className="songs-section-header">
                <h2 className="section-title" style={{ margin: 0 }}>
                  {activeTabId === 'LIKED' ? `${filteredSongs.length} Tracks` :
                    (activeTabId === 'SEARCH' ? 'Top Results' :
                      `Featured in ${tabsList.find(t => t.tabId === activeTabId)?.displayText || ''}`)}
                </h2>
                {activeTabId !== 'LIKED' && activeTabId !== 'SEARCH' && (
                  <ul className="tabs-list-container">
                    {tabsList.map((tabDetails) => (
                      <TabItem
                        tabDetails={tabDetails}
                        key={tabDetails.tabId}
                        clickTabItem={this.clickTabItem}
                        isActive={activeTabId === tabDetails.tabId}
                      />
                    ))}
                  </ul>
                )}
              </div>

              {filteredSongs.length > 0 ? (
                <ul className="songs-list-container">
                  {filteredSongs.map((songDetails, index) => (
                    <Songs
                      songDetails={songDetails}
                      key={songDetails.songId}
                      onClickSong={() => this.handlePlaySong(index)}
                      isActive={songDetails.songId === currentPlayingSong?.songId && isPlaying}
                    />
                  ))}
                </ul>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '100px 40px',
                  color: 'var(--text-secondary)',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '16px'
                }}>
                  <FaSearch size={48} style={{ opacity: 0.2 }} />
                  <h3 style={{ margin: 0 }}>
                    {activeTabId === 'LIKED' ? "Your liked songs will appear here" :
                      (activeTabId === 'SEARCH' && !searchInput ? "Search for songs, artists, or albums" :
                        `No results found for "${searchInput}"`)}
                  </h3>
                  <p style={{ margin: 0, fontSize: '14px' }}>Check your spelling or try searching for something else.</p>
                </div>
              )}
            </section>
          </div>
        </main>

        <footer className="player-bar">
          <AudioPlayer
            playlist={playingPlaylist.map(s => ({
              id: s.songId,
              title: s.songTitle,
              artist: s.artist,
              credits: s.credits,
              src: s.songUrl
            }))}
            currentTrackIndex={currentSongIndex}
            autoPlay={isPlaying}
            isLiked={isCurrentSongLiked}
            toggleLike={() => currentPlayingSong && this.toggleLikeSong(currentPlayingSong.songId)}
          />
        </footer>
      </div>
    );
  }
}

export default App;
