import LoginInfo from "../LoginInfo"
import './Navbar.css'

function Navbar({user}) {
    return (
        <nav>
            <span>Not Facebook</span>

            <LoginInfo user={user} />
        </nav>
    )
}

export default Navbar