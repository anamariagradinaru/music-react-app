import React, { useRef, useState } from 'react';
import './styles/app.scss';
//Adding Components
import Song from './components/Song';
import Player from './components/Player';
import { songlist } from './util';
import Library from './components/Library';

function App() {
    const audioRef = useRef(null);
    //state
    const [songs, setSongs] = useState(songlist);
    const [currentSong, setCurrentSong] = useState(songlist[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration;
        setSongInfo({ ...songInfo, currentTime: current, duration });
    };

    return (
        <div className="App">
            <Song currentSong={currentSong} />
            <Player
                setSongInfo={setSongInfo}
                songInfo={songInfo}
                audioRef={audioRef}
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                currentSong={currentSong}
            />
            <Library
                audioRef={audioRef}
                songs={songs}
                setCurrentSong={setCurrentSong}
                isPlaying={isPlaying}
                setSongs={setSongs}
            />
            <audio
                onTimeUpdate={timeUpdateHandler}
                onLoadedMetadata={timeUpdateHandler}
                ref={audioRef}
                controls={false}
                src={currentSong.audio}
            ></audio>
        </div>
    );
}

export default App;
