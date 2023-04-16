import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../authProvider/AuthProvider';

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {user,createUser}=useContext(AuthContext)
    const handleRegister = (event) => {
        event.preventDefault()
        const form = event.target;
        const name = form.text.value;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        createUser(email,password)
        .then(result=>{
            const loggedUser=result.user;
           
        })
        .catch(error=>{
            console.log(error);
        })
        console.log(name, email, password);
    }

    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className="hero min-h-screen bg-base-200 mt-8 ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Register now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='text' placeholder="Enter Your Name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input  type={showPassword ? "text" : "password"}  name='password' placeholder="Enter Your Password" className="input input-bordered" required />



                                {/* click on show password  */}

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Show Password</span>
                                        <input onChange={handleCheckboxChange} type="checkbox" checked={showPassword} className="checkbox" />
                                    </label>
                                </div>



                                <label className="label">
                                    <span> Already an account? <Link to='/login' className="label-text-alt link link-hover text-xl"> Login </Link></span>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register Now</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;