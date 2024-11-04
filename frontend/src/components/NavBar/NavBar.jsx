import React from 'react';
import { Routes, Route, Link } from 'react-router-dom'
import Home from '../Home';
import Users from '../Users/Users';
import CreatUsers from '../Users/CreateUsers';
import EditUsers from '../Users/EditUsers';
import UsersView from '../Users/UsersView';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">

                    <Link to="/" className="navbar-brand">MyApp</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to="/" className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/users" className="nav-link">Users</Link>
                            </li>
                            
                        </ul>
                    </div>


                    


                </div>
            </nav>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home />} ></Route>
                    <Route path='/users' element={<Users />}></Route>
                    <Route path='/create-users' element={<CreatUsers />}></Route>
                    <Route path='/edit/:id' element={<EditUsers />}></Route>
                    <Route path='/view/:id' element={<UsersView />}></Route>
                    <Route path='/delete/:id' element={<UsersView />}></Route>
                </Routes>
            </div>



        </>
    )
}

export default NavBar