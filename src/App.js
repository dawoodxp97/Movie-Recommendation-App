import { useState } from "react";

const moviesData = {
  Action: [
    { name: "Black Panther (2018)", rating: "96% Rotten Tomatoes" },
    { name: "Avengers Endgame (2019)", rating: "94% Rotten Tomatoes" },
    {
      name: "Misson Impossible: Fallout (2018)",
      rating: "97% Rotten Tomatoes",
    },
    {
      name: "Spider-Man: Into the spider-verse (2018)",
      rating: "97% Rotten Tomatoes",
    },
    { name: "Wonder Women (2017) ", rating: "93% Rotten Tomatoes" },
    { name: "Coco (2017)", rating: "97% Rotten Tomatoes" },
  ],

  ScienceFiction: [
    {
      name: "Star Wars Visions",
      rating: "7.4 IMDB",
    },
    {
      name: "Star Trek: Next Generations",
      rating: "8.6 IMDB",
    },
  ],
  Horror: [
    {
      name: "Maligant",
      rating: "6.3 IMDB",
    },
    {
      name: "Old (2021)",
      rating: "5.8 IMDB",
    },
    {
      name: "Halloween Kills (2021)",
      rating: "7.6 IMDB",
    },
  ],
};

function App() {
  const [genre, setGenre] = useState("");

  return (
    <div className="App">
      <h1> 🤩 Best Movies 🔥</h1>
      <p>
        {" "}
        Checkout my Favorite Recommended Movies. Select a genre to get started{" "}
      </p>
      <div>
        {Object.keys(moviesData)?.map((genre) => (
          <button onClick={() => setGenre(genre)}>{genre}</button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {moviesData[genre]?.map((item) => (
            <li
              key={item?.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem",
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {item?.name} </div>
              <div style={{ fontSize: "smaller" }}> {item?.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
