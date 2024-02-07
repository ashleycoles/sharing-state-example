import LoginInfo from "../LoginInfo"
import './Navbar.css'

function Navbar({user, logout}) {
    return (
        <nav>
            <span>Not Facebook</span>

            <LoginInfo user={user} logout={logout} />
        </nav>
    )
}

export default Navbar