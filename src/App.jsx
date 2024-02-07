import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NewsFeed from './Components/NewsFeed'
import SideMenu from './Components/SideMenu'

function App() {
  const [username, setUsername] = useState('Herbert')

  return (
    <>
      <Navbar user={username} />
      <div className='content'>
        <SideMenu user={username} />
        <NewsFeed />
      </div>
    </>
  )
}

export default App
