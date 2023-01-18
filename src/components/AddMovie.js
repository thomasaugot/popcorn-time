import { useState } from "react";

function AddMovie(props) {

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState("");
  const [imgURL, setImgURL] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();

    const newMovie = {
      "title": title,
      "rating": rating,
      "imgURL": imgURL
    };

    props.callbackToCreate(newMovie);

    //clear form
    setTitle("");
    setRating("");
    setImgURL("");
  }


  return (
    <div className="AddMovie">

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
    </div>
  )
}

export default AddMovie;