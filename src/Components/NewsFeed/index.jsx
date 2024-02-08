import { useContext } from 'react'
import './NewsFeed.css'
import UserContext from '../../UserContext'

function NewsFeed() {

    const {user} = useContext(UserContext)

    return (
        <section className='news-feed'>
            <h2>Newsfeed for {user}</h2>
        </section>
    )
}

export default NewsFeed