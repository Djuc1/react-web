
export default function login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">React Jobs</h3>
                <span className="loginDesc">
                   React Jobs helps you connect and find Jobs 
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email address or phone number" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgotten Password?</span>
                    <hr className="loginHr" />
                    <button className="loginRegisterButton">Create a New Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
