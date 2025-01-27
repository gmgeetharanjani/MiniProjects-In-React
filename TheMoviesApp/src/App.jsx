import React, { useEffect, useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import WatchList from './Pages/WatchList/WatchList'
import './App.css'
import NavBar from './Components/NavBar/NavBar'

export const WatchListContext = React.createContext()
export const ThemeContext = React.createContext()

function App() {

  let existingMoviesInWatchList = JSON.parse(localStorage.getItem('watchList'))

  if (existingMoviesInWatchList == null) {
    existingMoviesInWatchList = []
  }

  console.log(existingMoviesInWatchList)

  const [watchList, setWatchList] = useState(existingMoviesInWatchList)
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      if (prevTheme === 'light') {
        return 'dark'
      } else {
        return 'light'
      }
    })
  }

  useEffect(() => {
    localStorage.setItem('watchList', JSON.stringify(watchList))
  }, [watchList])

  const addMovieToWatchList = (movie) => {
    setWatchList([...watchList, movie])
  }

  const removeMovieFromWatchList = (movie) => {
    setWatchList(watchList.filter((watchListMovie) => watchListMovie.title !== movie.title))
  }
  return (
    <>
      <BrowserRouter>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <NavBar />
          <WatchListContext.Provider value={{ watchList, addMovieToWatchList, removeMovieFromWatchList }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/watchList" element={<WatchList />} />
            </Routes>
          </WatchListContext.Provider>
        </ThemeContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
