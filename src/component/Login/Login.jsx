import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        form.reset()
        console.log(email, password);
    }
    const [showPassword, setShowPassword] = useState(false);
    const handleCheckboxChange = () => {
        setShowPassword(!showPassword);
    };
    return (
        <>
            <div className="hero min-h-screen bg-base-200 mt-8 ">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder=" Enter Your Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name='password' placeholder=" Enter Your Password" className="input input-bordered" required />



                                {/* click on show password  */}

                                <div className="form-control">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Show Password</span>
                                        <input onChange={handleCheckboxChange} type="checkbox" checked={showPassword} className="checkbox" />
                                    </label>
                                </div>




                                <label className="label">
                                    <Link to='/register' className="label-text-alt link link-hover">Please Register?</Link>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login Now </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;