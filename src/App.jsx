import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NewsFeed from './Components/NewsFeed'
import SideMenu from './Components/SideMenu'

function App() {
  const [username, setUsername] = useState('')
  
  return (
    <>
      <Navbar />
      <div className='content'>
        <SideMenu />
        <NewsFeed />
      </div>
    </>
  )
}

export default App
