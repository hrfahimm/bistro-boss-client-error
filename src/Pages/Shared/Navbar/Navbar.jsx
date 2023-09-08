import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../Hooks/UseCart";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    const handleLogOut = () => {
        logOut()
            .then(() => {})
            .catch((error) => console.log(error));
    };
    const navOption = (
        <>
            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/menu'>Menu</Link>
            </li>
            <li>
                <Link to='/order/salad'>Order</Link>
            </li>
            <li>
                <Link to='/about'>About</Link>
            </li>
            <li>
                <Link to='/secret'>Secret</Link>
            </li>

            {user ? (
                <>
                    {/* <span>{user?.displayName}</span> */}
                    <li>
                        <Link onClick={handleLogOut}>Logout</Link>
                    </li>
                </>
            ) : (
                <>
                    {" "}
                    <li>
                        <Link to='/login'>LogIn</Link>
                    </li>
                </>
            )}
            <li>
                <Link to='/dashboard/mycart'>
                    <button className='btn-xs border-0 border-b-2   text-white btn btn-outline'>
                        <FaShoppingCart />
                        <div className=' badge text-xs  '>+{cart?.length || 0}</div>
                    </button>
                </Link>
            </li>
        </>
    );
    return (
        <>
            <div className='navbar fixed z-10 bg-opacity-50 rounded bg-black max-w-screen-xl uppercase text-white'>
                <div className='navbar-start'>
                    <div className='dropdown'>
                        <label
                            tabIndex={0}
                            className='btn btn-ghost lg:hidden '>
                            <svg
                                xmlns='http://www.w3.org/2000/svg'
                                className='h-5 w-5'
                                fill='none'
                                viewBox='0 0 24 24'
                                stroke='currentColor'>
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth='2'
                                    d='M4 6h16M4 12h8m-8 6h16'
                                />
                            </svg>
                        </label>
                        <ul
                            tabIndex={0}
                            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
                            {navOption}
                        </ul>
                    </div>
                    <Link
                        to='/'
                        className='btn btn-ghost normal-case text-xl'>
                        BISTRO{" "}
                        <span className='italic text-xs text-black font-extrabold'>Boss</span>{" "}
                    </Link>
                </div>
                <div className='navbar-center hidden lg:flex'>
                    <ul className='menu menu-horizontal px-1'>{navOption}</ul>
                </div>
                <div className='navbar-end'>
                    <a className='btn-xs border-1 border-b-4    text-white btn btn-outline'>
                        {user?.displayName}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
