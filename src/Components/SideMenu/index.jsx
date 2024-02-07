import UserMenu from "../UserMenu"
import './SideMenu.css'

function SideMenu({user}) {
    return (
        <section className="side-menu">
            <UserMenu user={user} />
        </section>
    )
}

export default SideMenu