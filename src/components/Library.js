import React from "react";
import LibrarySong from "./LibrarySong";

const Library = ({ songs, setCurrentSong, audioRef, isPlaying, setSongs, currentSong, libraryStatus }) => {
    return (
        <div className={`library ${libraryStatus ? "active-library" : ""} `}>
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong currentSong={currentSong} setSongs={setSongs} isPlaying={isPlaying} audioRef={audioRef} songs={songs} setCurrentSong={setCurrentSong} song={song} key={song.id} />
                ))}
            </div>
        </div>
    );
};

export default Library;
