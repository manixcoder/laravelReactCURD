import React, { useEffect, useState } from 'react';
import http from '../http'
import { useNavigate, useParams } from 'react-router-dom';

const EditUsers = (props) => {
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
  
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
  
      setInputs(values => ({ ...values, [name]: value }))
    }
  
    const submitForm = () => {
      console.log(inputs);
  
      http.put('users/'+id, inputs).then((res) => {
        navigate('/users')
      })
    }
    return (
        <div className="container mt-4">
            <h2 className="mb-4 text-center">Edit User</h2>
            <div className="row justify-content-center">
                <div className="col-sm-6">
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" name="name" id="name" className="form-control" value={inputs.name || ''} onChange={handleChange} />
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" name="email" id="email" className="form-control" value={inputs.email || ''} onChange={handleChange} />
                        </div>

                        

                        <button type="button" onClick={submitForm} className="btn btn-info w-100 mt-3">Create</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditUsers