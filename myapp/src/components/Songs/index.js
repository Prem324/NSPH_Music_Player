import { FaPlay } from 'react-icons/fa'
import './index.css'

const Songs = (props) => {
    const { songDetails, onClickSong, isActive } = props
    const { songTitle, songId, credits } = songDetails

    // Remove numbers and leading/trailing spaces for the placeholder text
    const displayTitle = songTitle.replace(/^\d+\s+/, '').trim()
    const displayLetter = displayTitle[0] || songTitle[0]

    const colors = ['#e91429', '#1db954', '#2196f3', '#ff9800', '#9c27b0', '#795548']
    const bgColor = colors[songId % colors.length]

    return (
        <li className={`song-item ${isActive ? 'active-track' : ''}`} onClick={onClickSong}>
            <div className="song-card-wrapper">
                <div
                    className="song-image-placeholder"
                    style={{
                        backgroundColor: bgColor,
                        width: '100%',
                        aspectRatio: '1/1',
                        borderRadius: '6px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        padding: '16px',
                        textAlign: 'center',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.5)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    <span style={{
                        opacity: 0.15,
                        position: 'absolute',
                        fontSize: '100px',
                        right: '-10px',
                        bottom: '-10px',
                        fontWeight: '900',
                        lineHeight: '1'
                    }}>
                        {displayLetter}
                    </span>
                    <span style={{
                        zIndex: 1,
                        fontSize: '20px',
                        fontWeight: '800',
                        color: '#fff',
                        textShadow: '0 2px 8px rgba(0,0,0,0.4)',
                        wordBreak: 'break-word',
                        display: '-webkit-box',
                        WebkitLineClamp: '3',
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden'
                    }}>
                        {displayTitle || songTitle}
                    </span>
                </div>
                <div className="play-overlay">
                    {isActive ? <div className="playing-bars"><span></span><span></span><span></span></div> : <FaPlay />}
                </div>
            </div>
            <div className="song-container" style={{ marginTop: '8px' }}>
                <h1 className="song-title" style={{ fontSize: '16px', margin: '0 0 4px 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{displayTitle}</h1>
                {credits && <p className="song-credits" style={{ fontSize: '12px', margin: '2px 0 0 0', color: 'var(--text-secondary)', fontStyle: 'italic' }}>{credits}</p>}
            </div>
        </li>
    )
}

export default Songs