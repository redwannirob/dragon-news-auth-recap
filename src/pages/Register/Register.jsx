import { useContext } from "react";
import { AuthContex } from "../../authProvider/AuthProvider";

const Register = () => {
    // const {createUser} = useContext(AuthContex);
    // console.log(createUser)
    const handleRegister = e =>{
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        // createUser(email,password)
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Create your account</h1>

                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleRegister}  className="card-body">
                        <div className="form-control">
                            <input name="email" type="email"    placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            
                            <input name="password"   type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;