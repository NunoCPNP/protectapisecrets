import React, { useState, useEffect } from "react"
import axios from "axios"

import "./App.css"

const App = () => {
	const [movies, setMovies] = useState(null)
  
  async function fetchMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`
    
    const response = await axios.get(url)
    const data = response.data.results
    setMovies(data)
  }

	useEffect(() => {
    fetchMovies()
	}, [])
  
  console.log(movies)

	return (
		<>
			{movies === null ? (
        <div className="loading">
          <h2>Loading ...</h2>
        </div>
      ) : (
        <>
          <div className="container">
            {movies.map((movie) => (
              <div className="movie" key={movie.id}>
                <img src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} alt={movie.title} />
              </div>
            ))}
          </div>
        </>
      )}
		</>	
	)
}

export default App