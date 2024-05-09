import React from 'react'
import Header from './Header';
import Footer from './Footer';
import Navigation from './Navigation';





function Welcome() {
  return (
    <div className="welcome" style={{
      backgroundSize: 'cover',
      backgroundImage: 'url("images/airplane.png")'
    }}>  
      <Header name =" AWFD">
        <h3>(Airways Fast Delivery)</h3>
      </Header>
      <Navigation/>
      <img src='images/map.png' alt='map'></img>
      <img className='allTransport' src='images/Transportation.png' alt='transport'></img>
      <img  src='images/parcel.png' alt='parcel'></img>
      <img className='allTransport'  src='images/box.png' alt='box'></img>
      <Footer/>
      
    </div>
  )
}

export default Welcome