import {useState, useEffect} from 'react';
import Axios from "axios";
import Header from './components/Header';
import MovieScreen from './components/MovieScreen';
import Watchlist from './components/Watchlist';
import './App.css';

const apiKey = process.env.REACT_APP_API_KEY;

function App() {

  const [movieList, setMovieList] = useState([])
  const [watchList, setWatchList] = useState([])
  const [page, setPage] = useState(1)
  const getData = () => {
    Axios
        .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`)
        .then((res) => {
            // console.log(res.data.results);
            setMovieList(res.data.results);
        });
  };

  useEffect(() => {
      getData();
  }, [page]);

  const addMovie = (movie) => {
    console.info(movie)
    setWatchList([...watchList, movie])
  }
  
  const removeMovie = (movie) => {
    const newState = watchList.filter((watchListItem)=> {
      return (
        watchListItem !== movie
      )
    })
    setWatchList(newState)
  }


  return (
    <div className="App">
      <Header />
      <main>
        <MovieScreen 
        removeMovie={removeMovie}
        addMovie={addMovie}
        watchList={watchList} 
        page={page} 
        setPage={setPage} 
        movieList={movieList}/>
        <Watchlist 
        watchList={watchList}
        removeMovie={removeMovie}/>
      </main>
    </div>
  );
}

export default App;
