import React, { useContext } from 'react';
import { AuthContext } from '../authProvider/AuthProvider';
import { Link } from 'react-router-dom';

const Home = () => {
    const {user,logOut}=useContext(AuthContext)
    const handleLogOut=()=>{
        logOut()
        .then(result=>{})
        .catch(error=>{
            console.log(error);
        })
    }
    console.log(user);
    return (
        <div>
            <h1>this is home page</h1>
           {
            user ? <> <span>{user.email}
            <button onClick={handleLogOut} className='btn btn-xs'>Sign Out</button>
            </span></>:<Link to='/login' >Login</Link>
           }
        </div>
    );
};

export default Home;