import React, { useState } from 'react';
import './styles/app.scss';
//Adding Components
import Song from './components/Song';
import Player from './components/Player';
import { songlist } from './util';

function App() {
    //state
    const [songs, setSongs] = useState(songlist);
    const [currentSong, setCurrentSong] = useState(songlist[0]);
    const [isPlaying, setIsPlaying] = useState(false);
    return (
        <div className="App">
            <Song currentSong={currentSong} />
            <Player
                setIsPlaying={setIsPlaying}
                isPlaying={isPlaying}
                currentSong={currentSong}
            />
        </div>
    );
}

export default App;
