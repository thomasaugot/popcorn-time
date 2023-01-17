import { useState } from "react";
import moviesFromJson from "../data/movies.json"
import "./Main.css"

function Main() {


  const [moviesArr, setMoviesArr] = useState(moviesFromJson);

  const deleteMovie = (idOfTheMovieToDelete) => {

    //calc the new list of movies
    const newListOfMovies = moviesArr.filter( (movie) => {
      return movie.id !== idOfTheMovieToDelete;
    });

    //update state
    setMoviesArr(newListOfMovies);
  }
  

  // Conditional Rendering with "Element Variables"
  let titleMessage;
  if(moviesArr.length > 0){
    titleMessage = <h2>Current number of movies: {moviesArr.length}</h2>;
  } else {
    titleMessage = <h2>Sorry, no movies to display</h2>
  }


  return (
    <div className="Main">

      {titleMessage}

      {moviesArr.map( (movieDetails) => {
        return(
          <div key={movieDetails.id} className="card movie">
            <p>{movieDetails.title}</p>

            { movieDetails.imgURL 
              ? <img src={movieDetails.imgURL} alt="movie cover" /> 
              : <img src="https://via.placeholder.com/182x268" alt="placeholder image" />
            }

            

            <p>Rating: {movieDetails.rating}</p>

            {/*  Conditional Rendering with "Logical && Operator"  */}
            {movieDetails.rating > 8 && <p className="badge">RECOMMENDED</p>}

            <button onClick={() => {deleteMovie(movieDetails.id)}}>Delete this movie</button>
          </div>
        );
      })}

      
    </div>
  )
}

export default Main;