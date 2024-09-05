import { Link } from "react-router-dom"
export default function Login() {
    return (
        <section className="frm-section">
            <form className="frm" action="">
                <h1>Start you Fitness Journey</h1>
                <input className="inp" placeholder="Please enter Email" type="email" name="Email" />
                <input className="inp" placeholder="Please enter Password" type="password" name="Password" />
                <button className="btn">Login</button>
                <p>Dont have a account ? <Link to={'/register'}>Register</Link> </p>
            </form>
            </section>
    )
}