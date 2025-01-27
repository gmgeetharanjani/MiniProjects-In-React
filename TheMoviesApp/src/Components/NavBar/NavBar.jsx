import React, { useContext } from 'react'
import logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../App'

export default function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const backgroundClass = (theme === 'light') ? 'bg-white text-black' : 'bg-gray-800 text-white'
  return (
    <div className={`flex space-x-11 items-center py-3 ${backgroundClass}`}>
      <Link to="/">
        <img src={logo} className='w-[90px]' alt="logo" />
      </Link>

      <Link className='text-3xl font-bold text-blue-500' to="/">
        Home
      </Link>

      <Link className='text-3xl font-bold text-blue-500' to="/watchList">
        WatchList
      </Link>

      <button onClick={() => toggleTheme(theme)} className='text-3xl font-bold text-blue-500'> Toggle Theme </button>
    </div>
  )
}
