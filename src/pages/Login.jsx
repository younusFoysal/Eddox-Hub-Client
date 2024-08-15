import React, {useState} from 'react';
import logo from '/logo.png'
import {SiSpinrilla} from "react-icons/si";
import useAxiosCommon from "../hooks/useAxiosCommon.jsx";
import {useLocation, useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth.js";
import {FcGoogle} from "react-icons/fc";
import toast from "react-hot-toast";
import {useQuery} from "@tanstack/react-query";

const Login = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const from = location?.state || '/'
    const {
        signInWithGoogle,
        signIn,
        loading,
        setLoading,
        saveUser,
    } = useAuth()
    const [email, setEmail] = useState('')
    const axiosCommon = useAxiosCommon();

    // Fetch Employees
    // const { data: userL = [], isLoading, refetch } = useQuery({
    //     queryKey: ['userIsFired', email],
    //     queryFn: async () => {
    //         const { data } = await axiosCommon.get(`/user/${email}`);
    //         console.log("Email:", email);
    //         return data;
    //     },
    // });
    //
    // console.log("Outside", userL)


    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        try {
            setLoading(true)



                // 1. sign in user
                await signIn(email, password)
                navigate(from)
                toast.success('Signup Successful')



        } catch (err) {
            console.log(err)
            toast.error(err.message)
            toast("Try Again Login!")
            setLoading(false)
        }
    }


    // handle google signin
    const handleGoogleSignIn = async () => {
        try {
            const result = await signInWithGoogle()
            console.log(result)

            const email = result.user.email
            setEmail(email)


                const role = "user"
                const name = result.user.displayName

                await saveUser(
                    result.user,
                    name,
                    role,
                )


                navigate(from)
                toast.success('Login Successful')



        } catch (err) {
            console.log(err)
            toast.error(err.message)
            toast("Try Again Login!")
            setLoading(false)
        }
    }






    return (
        <div
            className=" min-h-screen flex items-center justify-center bg-gray-50  px-4 sm:px-6 lg:px-8">
            <div className="relative py-3 sm:max-w-xs sm:mx-auto">
                <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white   rounded-xl shadow-lg">

                    <form onSubmit={handleSubmit}>
                        <div className="flex flex-col justify-center items-center h-full select-none">
                            <div className="flex flex-col items-center justify-center gap-2 mb-8">
                                <a href="/">
                                    <img src={logo} className="w-8"/>
                                </a>
                                <p className="m-0 text-[16px] font-semibold ">Login to your Account</p>
                                <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">Get started with our app, just start section and enjoy experience.
                    </span>
                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label className="font-semibold text-xs text-gray-400 ">Email</label>
                                <input
                                    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none "
                                    type='email'
                                    name='email'
                                    onChange={e => setEmail(e.target.value)}
                                    id='email'
                                    required
                                    placeholder="user@gmail.com"/>

                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2">
                            <label className="font-semibold text-xs text-gray-400 ">Password</label>
                            <input
                                type="password"
                                className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none "
                                name='password'
                                autoComplete='current-password'
                                id='password'
                                required
                                placeholder="••••••••"/>

                        </div>
                        <div className="mt-5">
                            <button
                                disabled={loading}
                                type='submit'
                                className="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
                            >

                                {loading ? (
                                    <SiSpinrilla className='animate-spin m-auto'/>
                                ) : (
                                    'Login'
                                )}

                            </button>
                        </div>
                    </form>

                    <button
                        disabled={loading}
                        onClick={handleGoogleSignIn}
                        className=" flex items-center gap-2 mt-4 py-2 px-6 bg-white hover:bg-blue-800 hover:text-white focus:ring-offset-blue-200 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
                    >
                        {loading ? (
                            <SiSpinrilla className='animate-spin m-auto'/>
                        ) : (<>
                                <FcGoogle size={32}/>
                                <p>Continue with Google</p>
                            </>

                        )}


                    </button>

                </div>
            </div>
        </div>
    );
};

export default Login;