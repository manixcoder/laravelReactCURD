import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../Home';
import Users from '../Users/Users';
import CreatUsers from '../Users/CreateUsers';
import EditUsers from '../Users/EditUsers';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-dark bg-dark">
                <div className="navbar-nav mr-auto">
                    <li>
                        <Link to={'/'} className='nav-item'>Home</Link>
                    </li>

                    <li>
                        <Link to={'/users'} className='nav-item'>Users</Link>
                    </li>

                    
                </div>
            </nav>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home />} ></Route>
                    <Route path='/users' element={<Users />}></Route>
                    <Route path='/createusers' element={<CreatUsers />}></Route>
                    <Route path='/edit/:id' element={<EditUsers />}></Route>
                </Routes>
            </div>



        </>
    )
}

export default NavBar