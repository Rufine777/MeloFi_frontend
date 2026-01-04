import "./login.css"
import { Link } from "react-router-dom"; 

const Login = () => {
   return(
    
    <div className="login-background">
        <h1 className="login-logo">MeloFi</h1>
        <div className="login-glass-card">
            <h2 className="login-heading">Login</h2>
            <form>
                <input type ="text" placeholder ="Enter UserName" className = "login-input"/>
                <input type ="password" placeholder = "password" className="login-input"/>
                <div className="login-forgot">
                    <Link to="/forgotPassword" >Forgot password?</Link>
                </div>
                <Link to = "/dashboard" className = "login-button"> Login </Link>
           </form>
           <div className ="login-new-to-melofi">
            <span className='login-newuser'>New to MeloFi?</span>
            <Link to = "/signUp" className= "login-create-Account"> Create Account </Link>
           </div>
        </div>
    </div>
   );
}

export default Login