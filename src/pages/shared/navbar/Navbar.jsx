import { Link, NavLink } from "react-router-dom";
import userDefaultPicture from "../../../assets/user.png";


const Navbar = () => {
    const links = <>
        <NavLink className="m-4 btn" to="/">Home</NavLink>
        <NavLink className="m-4 btn" to="/about">About</NavLink>
        <NavLink className="m-4 btn" to="/carrer">Career</NavLink>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img
                            // alt="Tailwind CSS Navbar component"
                            src={userDefaultPicture} />
                    </div>
                </div>
                <Link to="/login">
                    <button className="btn">Login</button>
                </Link>
                <Link to="/register">
                    <button className="btn">Register</button>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;