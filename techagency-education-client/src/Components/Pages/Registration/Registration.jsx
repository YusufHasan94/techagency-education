import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';
import registrationIcon from "../../../assets/registration.png";
import Swal from 'sweetalert2';

const imgUploadKey = import.meta.env.VITE_image_upload_token;

const Registration = () => {
    const {createUser, updateUser, logout} = useContext(AuthContext);
    const imgUploadURL = `https://api.imgbb.com/1/upload?key=${imgUploadKey}`;
    const navigate = useNavigate();
    const createNewUser = e=>{
        e.preventDefault();
        const form = e.target;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const name = firstName + lastName; 
        const email = form.emailAddress.value;
        const password = form.password.value;
        const image = form.image;

        const formData = new FormData();
        formData.append('image', image.files[0]);
        fetch(imgUploadURL, {
            method: 'POST',
            body: formData
        })
        .then(res=>res.json())
        .then(imgRes=> {
            if(imgRes.success){
                const photoURL = imgRes?.data?.display_url;
                createUser(email, password)
                .then(()=>{
                    updateUser(name, photoURL);
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                      })                    
                    logout();
                    navigate('/');
                }).catch(err=>{
                    console.log(err.message);
                })
            }
        })
        
    }

    return (
        <div className='max-w-screen-xl mx-auto my-40 grid grid-cols-1 md:grid-cols-2'>
            <div className='p-4 shadow-2xl rounded-xl m-4'>
                <div className='flex justify-start items-center gap-5'>
                <img src={registrationIcon} alt="" className='w-20' />
                <h1 className='text-center font-semibold text-2xl text-blue-950'>
                    Registration
                </h1>
                </div>
                <div className='my-10'>
                    <form action="" className='text-center' onSubmit={createNewUser}>
                        <input type="text" name="firstName" id="" className='p-2 border-2 rounded-lg text-lg w-full my-2' placeholder='First Name' required />
                        <input type="text" name="lastName" id="" className='p-2 border-2 rounded-lg text-lg w-full my-2' placeholder='Last Name' required />
                        <input type="email" name="emailAddress" id="" className='p-2 border-2 rounded-lg text-lg w-full my-2' placeholder='Email Address' required />
                        <input type="password" name="password" id="" className='p-2 border-2 rounded-lg text-lg w-full my-2' placeholder='Password' required />
                        <div className='text-left text-lg'>
                            <h1>Insert your image here</h1>
                            <input type="file" name="image" id="" className='p-2 border-2 rounded-lg text-lg w-full my-2' placeholder='User Name' required />
                        </div>
                        <input type="submit" value="Registration" className='w-fit md:w-1/4 my-2 bg-blue-950 text-white text-xl font-semibold  px-4 py-2 rounded-xl' />
                    </form>
                    <div className='flex justify-center mt-4 text-xl'>
                        <h1 className='opacity-70'>Already have an account?</h1>
                        <Link to="/login" className='ml-2 text-blue-950 font-semibold'>
                            Login
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Registration;