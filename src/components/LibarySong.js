import React from "react";

const LibarySong = ({song, songs, setCurrentSong, audioRef, id, isPlaying, setSongs, setIsPlaying}) => {
    const songSelectHandler =  async () => {
        await setCurrentSong(song);
        audioRef.current.play();

        setIsPlaying(true);
        
        // Add active state highlight
        const newSongs = songs.map((song) => {
            if (song.id === id) {
                return {
                    ...song,
                    active: true,
                } 
            } else {
                return {
                    ...song,
                    active: false,
                }
            }
        });
        setSongs(newSongs);

        // check if the song is is playing
        if(isPlaying) audioRef.current.play();
        
    }
    return(
        <div onClick={songSelectHandler} className={`libary-song ${song.active ? 'selected': ""}`}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibarySong;