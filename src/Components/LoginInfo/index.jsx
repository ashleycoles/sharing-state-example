function LoginInfo({user, logout}) {
    return (
        <div>
            <p>Logged in as {user}</p>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default LoginInfo