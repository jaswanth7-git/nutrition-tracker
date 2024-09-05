import { Link } from "react-router-dom"
export default function Register(){
    return(
 
        <section className="frm-section">
            <form className="frm" action="">
                <h1>Start you Fitness Journey</h1>
                <input className="inp" placeholder="Please enter Name" type="text" name="Name" />
                <input className="inp" placeholder="Please enter Email" type="email" name="Email" />
                <input className="inp" placeholder="Please enter Password" type="password" name="Password" />
                <input className="inp" placeholder="Please confirm Password" type="password" name="Confirm Password" />
                <button className="btn">Register</button>
                <p>Already have a account ?<Link to={'/login'}>Login</Link> </p>
            </form>
            </section>

    )
}