import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function Login() {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();
    
    const handleLogin = () => {
        axios
          .post('http://localhost:3000/api/login', { email })
          .then((response) => {
            console.log('Login successful:', response.data);
            alert('login successful')
            navigate('/Welcome');
          })
          .catch((error) => {
            console.error('Login failed:', error);
            alert('E-mail not found or registered')
           
          });
      };

  return (
    <>
      <div className='login-container' style={{
        margin:0,
        height: '1000px',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        backgroundSize: 'cover',
        backgroundImage: 'url("images/airplane.png")'
        }}>
           <div className='title'>
            <h2>(Airways Fast Delivery)</h2>
           </div>
          <div className='fieldset'>
                <fieldset>
                    <legend>SIGN IN</legend>
                    <p>Login with your user email</p>
                    <input type='email' value={email} onChange={(event) => setEmail(event.target.value)} placeholder='E-mail Address'></input>
                    <button onClick={handleLogin}>Log in</button>
                </fieldset>
                <p>if you dont have account already, then click on the link below</p>
                <p> Click on the link to <strong> <Link to = './createUser'>Create user</Link></strong></p>
               
            </div>     
       </div>
       <img src='images/map.png' alt='map' style={{display: 'none'}}></img>
        <img  src='images/Transportation.png' alt='transport' style={{display: 'none'}}></img>   
        <img  src='images/parcel.png' alt='parcel' style={{display: 'none'}}></img> 
        <img  src='images/box.png' alt='box' style={{display:'none'}}></img>
    </>
  )
}

export default Login