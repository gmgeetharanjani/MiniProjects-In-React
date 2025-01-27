import React, { useState, useContext } from 'react'
import genreIdMappings from '../../Configurations/genreConfigs'
import { WatchListContext } from '../../App'
import { ThemeContext } from '../../App'

export default function WatchList() {
  const { watchList, removeMovieFromWatchList } = useContext(WatchListContext)
  const { theme } = useContext(ThemeContext)
  const genreIds = new Set()
  watchList.forEach((movie) => {
    genreIds.add(genreIdMappings[movie.genre_ids[0]])
  })
  const genreArray = Array.from(genreIds);
  genreArray.unshift("All Genres");

  const [watchListMoviesInDisplay, setWatchListMoviesInDisplay] = useState(watchList);

  const onSearch = (event) => {
    const searchQuery = event.target.value;
    if (searchQuery === "") {
      setWatchListMoviesInDisplay(watchList);
    } else {
      const filteredMovies = watchList.filter((movie) => {
        return movie.title.toLowerCase().includes(searchQuery.toLowerCase());
      });
      setWatchListMoviesInDisplay(filteredMovies);
    }
  }

  const sortByName = () => {
    const sortedMovies = [...watchListMoviesInDisplay].sort((a, b) => {
      return a.title.localeCompare(b.title);
    });
    setWatchListMoviesInDisplay(sortedMovies);
  } 

  const sortByRating = () => {
    const sortedMovies = [...watchListMoviesInDisplay].sort((a, b) => {
      return b.vote_average - a.vote_average;
    });
    setWatchListMoviesInDisplay(sortedMovies);
  }

  const sortByPopularity = () => {
    const sortedMovies = [...watchListMoviesInDisplay].sort((a, b) => {
      return b.popularity - a.popularity;
    });
    setWatchListMoviesInDisplay(sortedMovies);
  }

  const sortByGenre = () => {
    const sortedMovies = [...watchListMoviesInDisplay].sort((a, b) => {
      return a.genre_ids[0] - b.genre_ids[0];
    });
    setWatchListMoviesInDisplay(sortedMovies);
  }

  const filterByGenre = (genre) => {
    if (genre === "All Genres") {
      setWatchListMoviesInDisplay(watchList);
    } else {
      const filteredMovies = watchList.filter((movie) => {
        return genreIdMappings[movie.genre_ids[0]] === genre;
      });
      setWatchListMoviesInDisplay(filteredMovies);
    }
  }
  const backgroundClass = (theme === 'light') ? 'bg-white text-black' : 'bg-gray-800 text-white'
  return <div className={`${backgroundClass}`}>
    <div className='p-1'>
    <div className='flex justify-around items-center m-1'>
      {
        genreArray.map((genre) => {
          return <div className="bg-blue-400 h-[3rem] w-[9rem] mx-4 flex justify-center items-center text-white font-bolder rounded-xl text-lg cursor-pointer" onClick={() => filterByGenre(genre)}> {genre} </div>
        })
      }
    </div></div>
    <div className='m-5'>
      <input className="h-[3rem] w-[20rem] px-4 border font-lg" type="text" placeholder="Search Movie" onChange={onSearch}/>
    </div>

    <div>
      <table className="w-full border my-10">
        <thead>
          <tr className="border">
            <th className="cursor-pointer underline" onClick={sortByName}> Name </th>
            <th className="cursor-pointer underline" onClick={sortByRating}> Rating </th>
            <th className="cursor-pointer underline" onClick={sortByPopularity}> Popularity </th>
            <th className="cursor-pointer underline" onClick={sortByGenre}> Genre </th>
          </tr>
        </thead>
        <tbody>
          {
            watchListMoviesInDisplay.map((movie) => {
              return <tr className="border">
                <td className="flex items-center gap-5">
                  <img className="h-[10rem] w-[12rem]" src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} />
                  <span className="font-medium"> {movie.title} </span>
                </td>
                <td className=" items-center ">
                  <span className="font-medium"> {movie.vote_average} </span>
                </td>
                <td className=" items-center ">
                  <span className="font-medium"> {movie.popularity} </span>

                </td>
                <td className=" items-center ">
                  <span className="font-medium"> {genreIdMappings[movie.genre_ids[0]]} </span>
                </td>
                <td className=" items-center ">
                  <span onClick={() => removeMovieFromWatchList(movie)} className="cursor-pointer font-medium text-red-500">Delete </span>
                </td>
              </tr>
            })
          }

        </tbody>

      </table>
    </div>
  </div>
}
