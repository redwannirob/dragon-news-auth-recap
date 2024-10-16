import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import { useContext } from "react";
import { AuthContex } from "../../authProvider/AuthProvider";



const Login = () => {
    const{logIn,user} = useContext(AuthContex);
    const location = useLocation();
    const navigate = useNavigate();
    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        logIn(email,password)
        .then(user => {
            console.log(user.user)
            // navigate after login
            navigate(location?.state ? location.state : '/')
        })
        .catch(error =>{
            console.error(error)
        })
        console.log(form.get('password'),form.get('email'));
    }
    return (




        <div>
            <Navbar></Navbar>

            <div>
                <h2 className="text-3xl font-semibold text-center my-10">Please Login</h2>

                <form onSubmit={handleLogin} className="md:3/4 lg:w-1/2 mx-auto">
                    
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input name="email" type="email" id="emailInput" autoComplete="off" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input name="password" id="passwordInput" autoComplete="off" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                {
                    user? <p>User logged in successfully <Link className="text-xl font-bold underline" to="/">EXPLORE</Link></p> : <p className="text-center">Do not have an account? <Link className="font-bold" to="/register">Register</Link></p>
                }
                
            </div>

        </div>
    );
};

export default Login;