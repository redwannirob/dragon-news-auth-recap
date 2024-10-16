import { useContext } from "react";
import { AuthContex } from "../../authProvider/AuthProvider";
import { Link } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";

const Register = () => {
    const {createUser,user} = useContext(AuthContex);
    
    const handleRegister = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const photoUrl = form.get('photo-url')
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        createUser(email,password)
        .then(result =>{
            const user = result.user
            alert('account created successfully')
        })
        .catch(error =>{
            console.error(error)
        })
        // console.log(name,email,password,photoUrl)
        // createUser(email,password)
    }
    return (

        <div>
            <Navbar></Navbar>
        
        <div>
            <h2 className="text-3xl font-semibold text-center my-10">Create your account</h2>

            <form onSubmit={handleRegister} className="md:3/4 lg:w-1/2 mx-auto">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <input name="name" type="text" autoComplete="off" placeholder="Name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input name="photo-url" type="text" autoComplete="off" placeholder="Photo URL " className="input input-bordered" required />
                </div>
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
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center">Already have an account? <Link className="font-bold" to="/login">Login</Link></p>
        </div>
        </div>
    );
};

export default Register;