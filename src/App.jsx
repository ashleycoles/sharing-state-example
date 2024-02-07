import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NewsFeed from './Components/NewsFeed'
import SideMenu from './Components/SideMenu'

function App() {
  const [username, setUsername] = useState('Cuthbert')

  return (
    <>
      <Navbar user={username} />
      <div className='content'>
        <SideMenu />
        <NewsFeed />
      </div>
    </>
  )
}

export default App
