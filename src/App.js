import React, { useState, useRef } from "react";
import "./Styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
    //Ref
    const audioRef = useRef(null);
    //State
    const [songs, setSongs] = useState(data());
    const [currentSong, setCurrentSong] = useState(songs[6]);
    const [isPlaying, setIsPlaying] = useState(false);
    const [songInfo, setSongInfo] = useState({
        currentTime: 0,
        duration: 0,
    });
    const [libraryStatus, setLibraryStatus] = useState(false);
    const timeUpdateHandler = (e) => {
        const current = e.target.currentTime;
        const duration = e.target.duration || 0;
        setSongInfo({ ...songInfo, currentTime: current, duration });
    };

    return (
        <div className="App">
            <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
            <Song currentSong={currentSong} />
            <Player timeUpdateHandler={timeUpdateHandler} songInfo={songInfo} setSongInfo={setSongInfo} audioRef={audioRef} currentSong={currentSong} setCurrentSong={setCurrentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} songs={songs} setSongs={setSongs} />
            <Library libraryStatus={libraryStatus} currentSong={currentSong} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} />
        </div>
    );
}

export default App;
