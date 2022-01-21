import Link from "next/link";
import { useState, FC, useContext } from "react";
// import { setCookie } from "nookies";
// import Router from "next/router";
import { AuthContext } from "stores/authContext";

const Navbar: FC = ({ children }) => {
  const [active, setActive] = useState(false);
  const authContext = useContext(AuthContext);

  // const [isLogin, setIsLogin] = useState(false);
  // useEffect(() => {
  //   const datatoken = localStorage.getItem("datalocalstorage");
  //   console.log(datatoken);
  //   if (datatoken) {
  //     setIsLogin(true);
  //   }
  // }, []);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className="flex items-center flex-wrap bg-green-400 p-3 fixed w-full">
        <Link href="/">
          <a className="inline-flex items-center p-2 mr-4 ">
            {/* <svg
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
                className='fill-current text-white h-8 w-8 mr-2'
              >
                <path d='M150 0 L75 200 L225 200 Z' />
              </svg> */}
            <span className="text-xl text-white font-bold uppercase tracking-wide">
              TumTumMai
            </span>
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className="lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto">
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white ">
                Home
              </a>
            </Link>
            {!authContext.isAuth ? (
              <Link href="/login">
                <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                  Login
                </a>
              </Link>
            ) : (
              <a
                onClick={() => authContext.logout()}
                className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white"
              >
                Logout
              </a>
            )}
            {/* <Link href='/Login/login'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                                {islogin ? 'Logout' : 'Login'}
                            </a>
                        </Link>
                        <Link href='/Login/login'>
                            <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white'>
                                {islogin ? 'Logout' : 'Login'}
                            </a>
                        </Link> */}
            <Link href="/backoffices/calendar">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Calendar
              </a>
            </Link>
            <Link href="/">
              <a className="lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-white font-bold items-center justify-center hover:bg-green-600 hover:text-white">
                Contact us
              </a>
            </Link>
          </div>
        </div>
      </nav>
      {children}
    </>
  );
};

export default Navbar;
