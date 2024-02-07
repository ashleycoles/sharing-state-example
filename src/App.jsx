import './App.css'
import Navbar from './Components/Navbar'
import NewsFeed from './Components/NewsFeed'
import SideMenu from './Components/SideMenu'

function App() {

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
