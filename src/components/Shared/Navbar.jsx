import Container from './Container'
import { AiOutlineMenu } from 'react-icons/ai'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import avatarImg from '/placeholder.jpg'
import logo from '/logo.png'

const Navbar = () => {

    const { user, logOut } = useAuth()
    const [isOpen, setIsOpen] = useState(false)


    return (
        <div className='fixed w-full bg-white z-10 shadow-sm'>
            <div className='border-b-[1px]'>
                <Container>
                    <div className='flex flex-row  items-center justify-between gap-3 md:gap-0'>


                        <div className="flex justify-center items-center gap-2">
                            {/* Logo */}
                            <Link to='/'>
                                <img
                                    // className='hidden md:block'
                                    src={logo}
                                    alt='logo'
                                    className="w-full h-10"
                                />
                            </Link>
                            <Link to='/'>
                            <h1 className="text-2xl md:text-3xl font-bold text-pretty">
                                <span className="text-[#3B8AC9]">Eddox </span>
                                <span className="text-[#AA69AB]">Hub </span>
                            </h1>
                            </Link>
                        </div>


                        <div className=" sm:flex sm:justify-center lg:justify-start p-4">


                            <Link to='/'>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <div
                                        className="w-full flex items-center justify-center px-4 py-2 text-sm leading-5 font-bold rounded-md text-white bg-[#3B8AC9] hover:bg-blue-200 hover:text-[#3B8AC9] focus:ring ring-offset-2 ring-green-100 focus:outline-none transition duration-150 ease-in-out md:py-2 md:text-sm md:px-6">
                                        Cart
                                    </div>
                                </div>
                            </Link>


                            <Link to='/contact'>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <div
                                        className="w-full flex items-center justify-center px-4 py-2 text-sm leading-5 font-bold rounded-md text-white bg-[#3B8AC9] hover:bg-blue-200 hover:text-[#3B8AC9] focus:ring ring-offset-2 ring-green-100 focus:outline-none transition duration-150 ease-in-out md:py-2 md:text-sm md:px-6">
                                        Contact
                                    </div>
                                </div>
                            </Link>

                        </div>


                        {/* Dropdown Menu */}
                        <div className='relative'>
                            <div className='flex flex-row items-center gap-3'>

                                {
                                    user ?
                                        <div onClick={() => setIsOpen(!isOpen)}
                                             className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
                                            <AiOutlineMenu/>
                                            <div className='hidden md:block'>
                                                {/* Avatar */}
                                                <img
                                                    className='rounded-full'
                                                    referrerPolicy='no-referrer'
                                                    src={user && user.photoURL ? user.photoURL : avatarImg}
                                                    alt='profile'
                                                    height='30'
                                                    width='30'
                                                />
                                            </div>
                                        </div>
                                        :
                                        <div className="flex flex-col w-full sm:w-auto sm:flex-row p-4">

                                            <Link to='/login'>
                                                <div className="flex flex-row items-center justify-center w-full px-2 py-2 mb-2 text-xs font-bold bg-[#3B8AC9] text-white leading-5 capitalize duration-100 transform rounded-sm shadow cursor-pointer focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:mb-0 sm:w-auto sm:mr-2 md:px-4 xl:px-6 hover:shadow-lg hover:-translate-y-1">
                                                    Login
                                                    <span className="ml-2">
                                                    <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"
                                                         className="w-4 h-4 fill-current"><path fill="currentColor" d="M17.92,11.62a1,1,0,0,0-.21-.33l-5-5a1,1,0,0,0-1.42,1.42L14.59,11H7a1,1,0,0,0,0,2h7.59l-3.3,3.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0l5-5a1,1,0,0,0,.21-.33A1,1,0,0,0,17.92,11.62Z"></path>
                                                    </svg>
                                                </span>
                                                </div>
                                            </Link>

                                            <Link to='/signup'>
                                                <div className="flex items-center justify-center w-full px-2 py-2 text-xs font-bold text-[#3B8AC9] capitalize duration-100 transform border-2 rounded-sm cursor-pointer border-[#3B8AC9] focus:ring-4 focus:ring-green-500 focus:ring-opacity-50 focus:outline-none sm:w-auto sm:px-4 hover:shadow-lg hover:-translate-y-1">
                                                    Register
                                                </div>
                                            </Link>
                                        </div>
                                }




                            </div>

                            {isOpen && (
                                <div
                                    className='absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-white overflow-hidden right-0 top-12 text-sm'>
                                    <div className='flex flex-col cursor-pointer'>
                                        <Link
                                            to='/'
                                            className='block md:hidden px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                        >
                                            Home
                                        </Link>

                                        {user ? (
                                            <>
                                                <Link
                                                    to='/'
                                                    className='block px-4 py-3 hover:bg-neutral-100 transition font-semibold'
                                                >
                                                    Cart
                                                </Link>
                                                <div
                                                    onClick={logOut}
                                                    className='px-4 py-3 hover:bg-neutral-100 transition font-semibold cursor-pointer'
                                                >
                                                    Logout
                                                </div>
                                            </>
                                        ) : (
                                            <>

                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar
