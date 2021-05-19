import React, { useState } from "react";
import "./Styles/app.scss";
import Player from "./components/Player";
import Song from "./components/Song";
import data from "./data";
import Library from "./components/Library";

function App() {
    const [songs, setSongs] = useState(data());
    const [currentSong, setcurrentSong] = useState(songs[6]);
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <div className="App">
            <Song currentSong={currentSong} />
            <Player currentSong={currentSong} isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
            <Library songs={songs} />
        </div>
    );
}

export default App;
