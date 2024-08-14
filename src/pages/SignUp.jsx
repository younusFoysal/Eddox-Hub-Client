import React, {useState} from 'react';
import logo from '/logo.png'
import useAuth from "../hooks/useAuth.js";
import {useNavigate} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import {axiosCommon} from "../hooks/useAxiosCommon.jsx";
import toast from 'react-hot-toast'
import {SiSpinrilla} from "react-icons/si";
import {FcGoogle} from "react-icons/fc";

const SignUp = () => {

    const navigate = useNavigate()
    const {
        createUser,
        signInWithGoogle,
        updateUserProfile,
        loading,
        setLoading,
        saveUser,
        logOut
    } = useAuth()

    const [email, setEmail] = useState('')

    // Fetch Employees
    const { data: userL = [], isLoading, refetch } = useQuery({
        queryKey: ['userIsFired', email],
        queryFn: async () => {
            const { data } = await axiosCommon.get(`/user/${email}`);
            console.log("Email:", email);
            return data;
        },
    });

    const handleSubmit = async e => {
        e.preventDefault()
        const form = e.target

        const name = form.name.value
        const email = form.email.value
        const password = form.password.value
        const role = "user"



        // Validate password
        if (password.length < 6) {
            toast.error('Password is less than 6 characters')
            return
        }

        if (!/[A-Z]/.test(password)) {
            toast.error('Password must contain at least one capital letter')
            return
        }

        if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
            toast.error('Password must contain at least one special character')
            return
        }

        if (!role) {
            toast.error('Please select a role')
            return
        }

        try {
            setLoading(true)

            // 2. User Registration
            const result = await createUser(email, password)
            console.log(result)

            // 4. Save user to the database with role
            await saveUser(
                result.user,
                name,
                role
            )
            navigate('/')
            toast.success('Signup Successful')
        } catch (err) {
            console.log(err)
            toast.error(err.message)
        } finally {
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

            const {data: refetchedData} = await refetch();
            console.log("Inside Function:", email, refetchedData);



                const role = "user"
                const name = result.user.displayName


                await saveUser(
                    result.user,
                    name,
                    role,
                )
                //console.log(saveUser)
                navigate('/')
                toast.success('Signup Successful')



        } catch (err) {
            console.log(err)
            toast.error(err.message)
        }
    }


    return (
        <div
            className=" min-h-screen flex items-center justify-center bg-gray-50 px-4 sm:px-6 lg:px-8">
            <div className="relative py-3 sm:max-w-xs sm:mx-auto">
                <div className="min-h-96 px-8 py-6 mt-4 text-left bg-white   rounded-xl shadow-lg">

                    <form onSubmit={handleSubmit}>


                        <div className="flex flex-col justify-center items-center h-full select-none">
                            <div className="flex flex-col items-center justify-center gap-2 mb-8">
                                <a href="/">
                                    <img src={logo} className="w-8"/>
                                </a>
                                <p className="m-0 text-[16px] font-semibold ">Register An Account</p>
                                <span className="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">Get started with our app, just start section and enjoy experience.
                    </span>
                            </div>

                            <div className="w-full flex flex-col gap-2">
                                <label className="font-semibold text-xs text-gray-400 ">Name</label>
                                <input
                                    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none "
                                    type='text'
                                    name='name'
                                    id='name'
                                    data-temp-mail-org='0'
                                    required
                                    placeholder="Enter your Name"/>

                            </div>
                            <div className="w-full flex flex-col gap-2">
                                <label className="font-semibold text-xs text-gray-400 ">Email</label>
                                <input
                                    className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none "
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder="user@gmail.com"/>

                            </div>

                        </div>

                        <div className="w-full flex flex-col gap-2">
                            <label className="font-semibold text-xs text-gray-400 ">Password</label>
                            <input type="password"
                                   className="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none"
                                   name='password'
                                   autoComplete='new-password'
                                   id='password'
                                   required
                                   placeholder="••••••••"/>

                        </div>
                        <div className="mt-5">
                            <button
                                disabled={loading}
                                className="py-2 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
                                type='submit'
                            >
                                {loading ? (
                                    <SiSpinrilla className='animate-spin m-auto'/>
                                ) : (
                                    'Register'
                                )}


                            </button>
                        </div>

                    </form>

                    <button
                        disabled={loading}
                        onClick={handleGoogleSignIn}
                        className=" flex items-center gap-2 mt-4 py-2 px-6 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none"
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

export default SignUp;