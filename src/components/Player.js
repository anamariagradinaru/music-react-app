import React, { useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {
    const audioRef = useRef(null);
    console.log(audioRef);

    const playSongHandler = () => {
        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };
    const skipBack = () => {
        audioRef.current.skip();
    };

    return (
        <div className="player">
            <div className="time-control">
                <p>Start Time</p>
                <input type="range" />
                <p>End Time</p>
            </div>
            <div className="play-control">
                <FontAwesomeIcon
                    onClick={skipBack}
                    className="skip-back"
                    size="2x"
                    icon={faAngleLeft}
                />
                {isPlaying ? (
                    <FontAwesomeIcon
                        onClick={playSongHandler}
                        className="pause"
                        size="2x"
                        icon={faPause}
                    />
                ) : (
                    <FontAwesomeIcon
                        onClick={playSongHandler}
                        className="play"
                        size="2x"
                        icon={faPlay}
                    />
                )}

                <FontAwesomeIcon
                    className="skip-forward"
                    size="2x"
                    icon={faAngleRight}
                />
            </div>
            <audio
                ref={audioRef}
                controls={false}
                src={currentSong.audio}
            ></audio>
        </div>
    );
};
export default Player;
