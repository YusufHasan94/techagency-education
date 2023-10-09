import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import loginIcon from "../../../assets/key.png";
import { FcGoogle } from "react-icons/fc";
import {AuthContext} from "../../../providers/AuthProvider"; 

const Login = () => {
    const {loginUser, loginWithGoogle} = useContext(AuthContext);
    const handleLogin = (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.emailAddress.value;
        const password = form.password.value;
        const user = {email, password}
        console.log(user);
        loginUser(email, password)
        .then(()=>{
            console.log("Success login");
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    const handleGoogleLogin = ()=>{
        loginWithGoogle()
        .then(res =>{
            const loggedUser = res.user;
            console.log(loggedUser);
        })
        .catch(err=>{
            console.log(err.message);
        })
    }
    return (
        <div className='max-w-screen-xl mx-auto my-40 grid grid-cols-1 md:grid-cols-2'>
            <div className='p-4 shadow-2xl rounded-xl m-4'>
                <div className='flex justify-start items-center gap-5'>
                <img src={loginIcon} alt="" className='w-20' />
                <h1 className='text-center font-semibold text-2xl text-blue-950'>
                    Login
                </h1>
                </div>
                <div className='my-10'>
                    <form onSubmit={handleLogin} className='text-center'>
                        <input type="email" name="emailAddress" id="" className='p-2 border-2 rounded-lg text-lg w-full my-2' placeholder='Email Address' required />
                        <input type="password" name="password" id="" className='p-2 border-2 rounded-lg text-lg w-full my-2' placeholder='Password' required />
                        <input type="submit" value="Login" className='w-fit md:w-1/4 my-2 bg-blue-950 text-white text-xl font-semibold  px-4 py-2 rounded-xl' />
                    </form>
                    <div className='flex justify-center'>
                        <button className='flex gap-1 justify-center items-center my-2 text-xl' onClick={handleGoogleLogin}>
                            <FcGoogle/> 
                            <h1>Login with google</h1>
                        </button>
                    </div>
                    <div className='flex justify-center mt-4 text-xl'>
                        <h1 className='opacity-70'>Don't have account yet?</h1>
                        <Link to="/registration" className='ml-2 text-blue-950 font-semibold'>
                            Registration
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;