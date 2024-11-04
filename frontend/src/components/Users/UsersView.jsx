import React, { useEffect, useState } from 'react';
import http from '../http'
import { useNavigate, useParams } from 'react-router-dom';

const UsersView = () => {
    const navigate =useNavigate();

    const [inputs, setInputs] = useState({});

    const [users,setUsers]=useState([]);
    const {id} = useParams();

    useEffect(()=>{
        fetchUser();
    },[]);

    const fetchUser = ()=>{
        http.get('/users/'+id+'/edit').then((res)=>{
            setInputs({
                name:res.data.name,
                email:res.data.email,
            });
        });
    }
  
  
    return (
        <>
            <div className="container mt-4">
                <h2 className="mb-4 text-center">View User</h2>
                <div className="row justify-content-center">
                    <div className="col-sm-6">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" name="name" id="name" className="form-control" value={inputs.name || ''} disabled />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" name="email" id="email" className="form-control" value={inputs.email || ''}  disabled/>
                            </div>
                           
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UsersView