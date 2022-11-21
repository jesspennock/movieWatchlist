import React from "react";
import MovieCard from "./MovieCard";

const Watchlist = ({watchList, removeMovie}) => {
    const movieDisplay = watchList.map ((movie)=> {
        return (
            <MovieCard
            watchList={watchList}
            removeMovie={removeMovie}
            movie={movie}
            key={movie.id}/>
        )
    })
    return (
        <div className = "watchlist">
            <h1>My Watchlist</h1>
            <div className="movie-container">{movieDisplay}</div>
        </div>
    )
}
export default Watchlist