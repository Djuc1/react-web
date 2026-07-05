import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

export default function Register() {
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
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password Confirmation" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into Account</button>
                </div>
            </div>
        </div>
    </div>
  )
}
