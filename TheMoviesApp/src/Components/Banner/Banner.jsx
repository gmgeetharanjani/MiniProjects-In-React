import React, { useEffect } from 'react'
import { useState } from 'react'
import placeholder from '../../assets/placeholder.jpg'
import axios from 'axios'
import { getRandomNumber } from '../../utils'

export default function Banner() {
    const [bannerImage, setBannerImage] = useState(placeholder)
    const [movieName, setMovieName] = useState('Placeholder Movie')

    // const fetchBannerImage = async () => {
    //     const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=3ba0287a7ec66fb88c173aa63ffb30a5')
    //     const data = await response.json()
    //     const randomIndex = Math.floor(Math.random() * data.results.length)
    //     setBannerImage(`https://image.tmdb.org/t/p/original/${data.results[randomIndex].backdrop_path}`)
    // }

    const fetchBannerImage = async () => {
        const response = await axios.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3ba0287a7ec66fb88c173aa63ffb30a5')
        const randomIndex = getRandomNumber(0, response.data.results.length - 1)
        setBannerImage(`https://image.tmdb.org/t/p/original/${response.data.results[randomIndex].backdrop_path}`)
        setMovieName(response.data.results[randomIndex].title)
    }

    useEffect(() => {
        fetchBannerImage()
    }, [])

  return (
    <div className='h-[75vh] border bg-cover bg-center flex items-end justify-center ' style={{backgroundImage: `url(${bannerImage})`}}>
        <h1 className='text-1xl text-white font-bold text-4xl'>{movieName}</h1>
    </div>
  )
}
