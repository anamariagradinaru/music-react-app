import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPlay,
    faAngleLeft,
    faAngleRight,
    faPause,
} from '@fortawesome/free-solid-svg-icons';

const Player = ({
    setSongInfo,
    songInfo,
    audioRef,
    currentSong,
    isPlaying,
    setIsPlaying,
}) => {
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

    const getTime = (time) => {
        return (
            Math.floor(time / 60) +
            ':' +
            ('0' + Math.floor(time % 60)).slice(-2)
        );
    };

    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({ ...songInfo, currentTime: e.target.value });
    };
    return (
        <div className="player">
            <div className="time-control">
                <p>{getTime(songInfo.currentTime)}</p>
                <input
                    min={0}
                    max={songInfo.duration || 0}
                    value={songInfo.currentTime}
                    type="range"
                    onChange={dragHandler}
                />
                <p>{getTime(songInfo.duration)}</p>
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
        </div>
    );
};
export default Player;
