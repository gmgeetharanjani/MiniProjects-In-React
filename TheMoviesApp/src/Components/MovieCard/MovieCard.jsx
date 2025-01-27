import React, { useContext } from 'react'
import { WatchListContext } from '../../App'

export default function MovieCard({movie}) {
    const { watchList, addMovieToWatchList, removeMovieFromWatchList } = useContext(WatchListContext)
    const isMovieInWatchList = watchList.find((watchListMovie) => watchListMovie.title === movie.title)
    // Main div should be relation position to allow absolute positioning of the watchlist icon
    return (
        <div style={{ backgroundImage: `url(${movie.url})` }}
            className='w-[200px] h-[300px] bg-cover bg-center m-2 relative rounded-lg justfy-center items-end content-end hover:scale-110'>
                {
                (!isMovieInWatchList) ? 
                     <div className='flex items-center absolute top-2 right-2 text-3xl cursor-pointer' onClick={() => addMovieToWatchList(movie)}> 
                        &#128525;
                    </div>
                : 
                    <div className='flex items-center absolute top-2 right-2 text-3xl cursor-pointer' onClick={() => removeMovieFromWatchList(movie)}>
                        &#10060;
                    </div>
            }
            <div className='text-white w-full font-bold bg-black bg-opacity-50 text-xl'>
                <h1>{movie.title}</h1>
            </div>

        </div>
    )
}


