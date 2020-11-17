import React from "react";

const Song = ({currentSong, isPlaying}) => {
    return(
        <div className="song-container" >
            <img style={{animation: isPlaying ? 'spin 7s infinite linear ' : undefined }} alt={currentSong.name} src={currentSong.cover}></img>
            <h2>{currentSong.name}</h2>
            <h3>{currentSong.artist}</h3>
        </div>
    )
}

export default Song;