
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "./provider/AuthProvider";
import { useContext } from "react";


const Navbar = () => {

    const {user, logOut} = useContext(AuthContext);
    console.log(user);

    const links =
        <>
            <li className="text-base text-[#84869A] lg:text-lg">
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? " border-2 border-green-600"
                                : ""
                    }
                >
                    <span>Home</span>
                </NavLink>
            </li>
            <li className="text-base lg:text-lg text-[#84869A]">
                <NavLink
                    to="/rooms"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? " border-2 border-green-600"
                                : ""
                    }
                >
                    <span>Rooms</span>
                </NavLink>
            </li>

            <li className="text-base lg:text-lg text-[#84869A]">
                <NavLink
                    to="/mybookings"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? " border-2 border-green-600"
                                : ""
                    }
                >
                    <span>My Bookings</span>
                </NavLink>
            </li>
            <li className="text-base lg:text-lg text-[#84869A]">
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? " border-2 border-green-600"
                                : ""
                    }
                >
                    <span>About Us</span>
                </NavLink>
            </li>
            <li className="text-base lg:text-lg text-[#84869A]">
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                                ? " border-2 border-green-600"
                                : ""
                    }
                >
                    <span>Contact Us</span>
                </NavLink>
            </li>

        </>

    // handle logOut
    const handleLogOut = () => {
        logOut()
            .then(result => {
                console.log(result.user);
            })
    }

    return (
        <div className="navbar border-b-2 shadow-sm h-20 bg-white top-0 sticky z-50 px-1 lg:px-8">
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
                        className="menu menu-sm dropdown-content z-[1] mt-3 w-32 p-2 bg-white">
                       {links}
                    </ul>
                </div>
                <Link to="/" className="text-xl lg:text-3xl  cursor-pointer font-bold">Dream <span className="text-teal-700">Hostel</span></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                   
                    {links}
                    
                </ul>
            </div>
            <div className="navbar-end gap-4 text-base lg:text-lg">
                <Link to="/signup" className="cursor-pointer bg-[#FFAD00] text-[#FFFFFF] px-4 py-2 rounded-md ">SignUp</Link>
                {user ? <Link onClick={handleLogOut}  className="cursor-pointer bg-[#7AA93C] text-[#FFFFFF] px-4 py-2 rounded-md">SignOut</Link> :  <Link to = "/signin" className="cursor-pointer bg-[#7AA93C] text-[#FFFFFF] px-4 py-2 rounded-md">SignIn</Link> 
                
                }
                
            </div>
        </div>
    );
};

export default Navbar;