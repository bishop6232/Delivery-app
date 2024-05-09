import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

function CreateUser() {
  
  
    const [userData, setUserData] = useState({
        name: '',
        email: '',
        location: '',
      });
      const nav = useNavigate();
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/users', userData)
          .then((response) => {
            console.log('User created successfully:', response.data);
            alert('User created successfully');
            nav('/Welcome');
          })

          .catch((error) => {
            console.error('Error creating user:', error);
          });
      };
  
  
  
  
  
  
  
  
    return (

    <div className='user-container'>
       
          <div className='user-h2'>
            <h2>Create New User</h2>
          </div>
      <div className='user-form'>
        <form onSubmit={handleSubmit}>
          
          <label>Name:</label>
          <input type="text" name="name" value={userData.name} onChange={handleChange} required />

          <label>Email:</label>
          <input type="email" name="email" value={userData.email} onChange={handleChange} required />

          <label>Location:</label>
          <input type="text" name="location" value={userData.location} onChange={handleChange} required />

          <button  type="submit"> Create User </button>
        </form>
      
      </div>
    
    </div>
  )
}
export default CreateUser;