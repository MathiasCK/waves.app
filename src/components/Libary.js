import React from 'react';
import LibarySong from './LibarySong';

const Libary = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libaryStatus, setIsPlaying}) => {
    return(
        <div className={`libary ${libaryStatus ? 'active-libary' : ""}`} >
            <h2>Libary</h2>
            <div className="libary-songs">
                {songs.map((song) => (
                    <LibarySong setIsPlaying={setIsPlaying} libaryStatus={libaryStatus} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} song={song} id={song.id} key={song.id} />
                ))}
            </div>
        </div>
    )
}

export default Libary;