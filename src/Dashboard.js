import React, {useState} from 'react'
import Unsplash, { toJson } from "unsplash-js";
import './Dashboard.css'
const unsplash = new Unsplash({
    accessKey: "WY0hlxYcXBJweA8RwmhC25mV6QiAssEDAEp3D-Mz9R0",
  });

function Dashboard() {

    const [query, setQuery] = useState("");
    const [pics, setPics] = useState([]);


  const searchPhotos = async (e) => {
    e.preventDefault();

    unsplash.search
      .photos(query)
      .then(toJson)
      .then((json) => {
        // console.log(json);
        setPics(json.results);
      });

  };
    return (
    <div className = "Dashboard">
      <div className = "container">   
      <form className="form" onSubmit={searchPhotos}>
        {" "}
        <label className="label" htmlFor="query">
          {" "}
        </label>
        <input
          type="text"
          name="query"
          className="input"
          placeholder={`Search`}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" className="button">
          Search
        </button>
      </form>

      <div className="card-list">
        {pics.map((pic) => (
          <div className="card" key={pic.id}>
            <img
              className="card--image"
              alt={pic.alt_description}
              src={pic.urls.full}
              width="50%"
              height="50%"
            ></img>
          </div>
        ))}{" "}
      </div>
    </div>
    </div>
    )
}

export default Dashboard
