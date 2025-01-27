import React from 'react'
import { useState, useEffect } from 'react'
import Pagination from '../Pagination/Pagination'
import Spinner from '../Commons/Spinner/Spinner'
import axios from 'axios'
import MovieCard from '../MovieCard/MovieCard'

export default function Movies() {
  const [movies, setMovies] = useState(defaultMovies)
  const [isLoading, setIsLoading] = useState(true)
  const [pageNumber, setPageNumber] = useState(1)

  const fetchMovies = async () => {
    const response = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=3ba0287a7ec66fb88c173aa63ffb30a5&page=${pageNumber}`)
    const data = response.data.results
    const movies = data.map((movie) => {
      return {
        id: movie.id,
        url: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
        title: movie.title,
        backdrop_path: movie.backdrop_path,
        vote_average: movie.vote_average,
        popularity: movie.popularity,
        genre_ids: movie.genre_ids
      }
    })
    setMovies(movies)
    setIsLoading(false)
  }

  useEffect(() => {
    fetchMovies()
  }
  , [pageNumber])

  const onPrevClick = () => {
    if (pageNumber === 1) {
      return
    }
    setPageNumber(pageNumber - 1)
  }

  const onNextClick = () => {
    setPageNumber(pageNumber + 1)
  }

  return <div>
    <div className='m-5 font-bold text-2xl'>
      <h1>Trending Movies</h1>
    </div>

    {
      isLoading ? <Spinner />: <div className='flex flex-wrap gap-8 justify-evenly'>
        {
              movies.map((movie) => {
                return <MovieCard movie={movie} />
              }
              )
            }
          </div> 
}

    
    <Pagination pageNumber={pageNumber} onPrevClick={onPrevClick} onNextClick={onNextClick} />
  </div>
}

const defaultMovies = [
  {
    "id": 1,
    "url": "https://image.tmdb.org/t/p/w500/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg",
    "title": "Movie 1"
  },
  {
    "id": 2,
    "url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    "title": "Movie 2"
  },
  {
    "id": 3,
    "url": "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    "title": "Movie 3"
  },
  {
    "id": 4,
    "url": "https://image.tmdb.org/t/p/w500/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg",
    "title": "Movie 4"
  },
  {
    "id": 5,
    "url": "https://image.tmdb.org/t/p/w500/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
    "title": "Movie 5"
  },
  {
    "id": 6,
    "url": "https://image.tmdb.org/t/p/w500/c6H7Z4u73ir3cIoCteuhJh7UCAR.jpg",
    "title": "Movie 6"
  },
  {
    "id": 7,
    "url": "https://image.tmdb.org/t/p/w500/mGVrXeIjyecj6TKmwPVpHlscEmw.jpg",
    "title": "Movie 7"
  },
  {
    "id": 8,
    "url": "https://image.tmdb.org/t/p/w500/vXHzO26mJaOt4VO7ZFiM6No5ScT.jpg",
    "title": "Movie 8"
  },
  {
    "id": 9,
    "url": "https://image.tmdb.org/t/p/w500/8UlWHLMpgZm9bx6QYh0NFoq67TZ.jpg",
    "title": "Movie 9"
  },
  {
    "id": 10,
    "url": "https://image.tmdb.org/t/p/w500/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg",
    "title": "Movie 10"
  }
]