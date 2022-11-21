import React from "react";
import MovieCard from "./MovieCard";

const MovieScreen = ({watchList, page, setPage, movieList, addMovie, removeMovie}) => {

    const movieDisplay = movieList.map((movie)=>{
        return(
            <MovieCard 
            removeMovie={removeMovie}
            watchList={watchList}
            movie={movie}
            addMovie={addMovie}
            key={movie.id}/>
        )
    })

    const decrement = () => page !== 1 && setPage(page-1)

    const increment = () => setPage(page+1)

    return (
        <div className="page">
            <h1>Jess's Movie Theater</h1>
            <h3>Add a movie to your watchlist!</h3>
            <div className="btn-container">
                <button onClick={page !== 1 && decrement}>Previous</button>
                <button onClick={increment}>Next</button>
            </div>
            <div className="movie-container">{movieDisplay}</div>
        </div>

    )
}

export default MovieScreen;