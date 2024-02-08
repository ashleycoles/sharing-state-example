import { useContext } from "react"
import UserContext from "../../UserContext"

function UserMenu() {
    const {user} = useContext(UserContext)

    return (
        <p>Logged in as {user}</p>
    )
}

export default UserMenu