import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Movies from '../../Components/Movies/Movies'
import { useContext } from 'react'
import { ThemeContext } from '../../App'

export default function Home() {
   const themeContext = useContext(ThemeContext)
   const backgroundClass = (themeContext.theme === 'light') ? 'bg-white text-black' : 'bg-gray-800 text-white'
  return (
    <div className={`${backgroundClass}`}>
      <Banner />
      <Movies />
    </div>
  )
}
