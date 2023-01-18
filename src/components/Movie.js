function Movie(props) {

  return (
    <div className="card movie">
      <p>{props.movieDetails.title}</p>

      {/*  Conditional Rendering with "Ternary Operator"  */}
      {props.movieDetails.imgURL
        ? <img src={props.movieDetails.imgURL} alt="" />
        : <img src="https://via.placeholder.com/182x268" />
      }


      <p>Rating: {props.movieDetails.rating}</p>

      {/*  Conditional Rendering with "Logical && Operator"  */}
      {props.movieDetails.rating > 8 && <p className="badge">RECOMMENDED</p>}


      <button onClick={() => { props.callbackToDelete(props.movieDetails.title) }}>
        Delete this movie
      </button>
      
    </div>
  )
}

export default Movie;