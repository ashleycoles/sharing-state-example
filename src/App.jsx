import { useState } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import NewsFeed from './Components/NewsFeed'
import SideMenu from './Components/SideMenu'
import UserContext from './UserContext'

function App() {
  const [username, setUsername] = useState('Herbert')

  function logout() {
    setUsername('')
  }

  return (
    <>
      {/* Any component contained within the Provider can now access the data */}
      <UserContext.Provider value={ {user: username, logout: logout} }>


        <Navbar />
        <div className='content'>
          <SideMenu />
          <NewsFeed />
        </div>

      </UserContext.Provider>

    </>
  )
}

export default App
