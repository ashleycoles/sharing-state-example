import { useContext } from "react"
import UserContext from "../../UserContext"

function LoginInfo() {
    // useContext allows us to consume the data provided by our context
    const {user, logout} = useContext(UserContext)

    return (
        <div>
            <p>Logged in as {user}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default LoginInfo