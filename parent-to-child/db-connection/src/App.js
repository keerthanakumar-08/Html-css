import React,{useState} from 'react';
import MoviesList from  './components/MoviesList'
import './App.css';

function App() {
  const[movies, setMovies] = useState([]);
  const [isLoading,setIsLoading] = useState(false);

  async function fetchMoviesHandler(){
    const response = await fetch('https://swapi.dev/api/films/');
    const data = await response.json();

    const transformeMovies =data.results.map((movieData=>{
      return {
        id:movieData.episode_id,
        title:movieData.title,
        openingText:movieData.opening_crawl,

      };
    }));
  
     setMovies(data.results);
     setIsLoading(false);  
  }

  return (
    <React.Fragment>
      <selection>
        <button onclick={fetchMoviesHandler}>Fetch Movies</button>
      </selection>
      <selection>
        {!isLoading &&  <MoviesList movies = {movies} />}
        {isLoading && <p>Loading ....</p>}
      </selection>
    </React.Fragment>
    
  );
}

export default App;
