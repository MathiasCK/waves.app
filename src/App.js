import React, {useState, useRef} from 'react';
import Player from './components/Player';
import Song from './components/Song'
import './css/app.scss';
import data from './data';
import Libary from './components/Libary';
import Nav from './components/Nav';

function App() {
   // Ref
   const audioRef = useRef(null);

   // States

   // Song length
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
        animationPercentage: 0,
    }) 

    // Add song length 
    const timeUpdateHandler = (e) => {
      const current = e.target.currentTime;
      const duration = e.target.duration;
      // calc percentage
      const roundedCurrent = Math.round(current);
      const roundedDuration = Math.round(duration);
      const animation = Math.round((roundedCurrent / roundedDuration) * 100);

      setSongInfo({...songInfo, currentTime: current, duration, animationPercentage: animation});
  }

    // Functuon after song has ended
    const songEndHandler = async () => {
      let currentIndex = songs.findIndex((song) => song.id === currentSong.id);
      await setCurrentSong(songs[(currentIndex + 1) % songs.length])
      if (isPlaying) audioRef.current.play();
    }
  

    // Active libary
    const [libaryStatus, setLibaryStatus] = useState(false);

    // State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[0]);
    const [isPlaying, setIsPlaying] = useState(false);


    return (
      <div className={`App ${libaryStatus ? "libary-active" : ""}`}>
        <Nav libaryStatus={libaryStatus} setLibaryStatus={setLibaryStatus} />
        <Song currentSong={currentSong} isPlaying={isPlaying} />
        <Player setSongs={setSongs} setCurrentSong={setCurrentSong} songs={songs} setSongInfo={setSongInfo} songInfo={songInfo} audioRef={audioRef} currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        <Libary setIsPlaying={setIsPlaying} libaryStatus={libaryStatus} setSongs={setSongs} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} isPlaying={isPlaying} />
        <audio onEnded={songEndHandler} onTimeUpdate={timeUpdateHandler} onLoadedMetadata={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
      </div>
    );
  }

export default App;
