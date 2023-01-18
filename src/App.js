import { useState } from "react";
import moviesFromJson from "./data/movies.json";

import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

import './App.css';


function App() {

  const [moviesArr, setMoviesArr] = useState(moviesFromJson);

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [imgURL, setImgURL] = useState("");
  


  const deleteMovie = (movieTitle) => {

    //calc the new list of movies
    const newListOfMovies = moviesArr.filter((movie) => {
      return movie.title !== movieTitle;
    });

    //update state
    setMoviesArr(newListOfMovies);
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      "title": title,
      "rating": rating,
      "imgURL": imgURL
    };

    //update list of movies
    setMoviesArr( (prevListOfMovies) => {
      const newList = [newMovie, ...prevListOfMovies];
      return newList;
    });

    //clear form
    setTitle("");
    setRating("");
    setImgURL("");
  }


  return (
    <div className="App">
      <Header numberOfMovies={moviesArr.length} />


      <form onSubmit={handleSubmit}>

        <label>
          Title:
          <input 
            type="text" 
            name="title" 
            required={true}
            placeholder="enter the title" 
            value={title} 
            onChange={(e) => { setTitle(e.target.value) }} />
        </label>

        <label>
          Rating:
          <input 
            type="number" 
            name="rating" 
            required={true}
            min="1"
            max="10"
            placeholder="5" 
            value={rating} 
            onChange={(e) => { setRating(e.target.value) }} />
        </label>

        <label>
          Image URL:
          <input 
            type="url" 
            name="imgURL" 
            placeholder="image url" 
            value={imgURL} 
            onChange={(e) => { setImgURL(e.target.value) }} />
        </label>

        <button>Create</button>
      </form>


      <Main moviesArr={moviesArr} callbackToDelete={deleteMovie} />
      <Footer />
    </div>
  );
}

export default App;
