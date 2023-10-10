import React from 'react'
import { useState } from 'react'

const PersonalDetails = () => {

  const [details,setDetails] = useState({
    fullName : "lol",
    email: "xyz@gmail.com",
    phoneNumber:"12345678",
    address: "ang mo kio blk 179"
  })

  const handleChange = (event) =>{
    const {name, value } = event.target;
    setDetails(prevDetails =>({
      ...prevDetails,
      [name]:value
    }));
  };

  return (
    <div>
      <h2>Personal Details</h2>

      <h3>Full Name</h3>
      <input name='fullName' type='text' placeholder='Full Name' onChange={handleChange}></input>

      <h3>Email</h3>
      <input name="email" type='text' placeholder="Email" onChange={handleChange}></input>

      <h3>Phone Number</h3>
      <input name="phoneNumber" type='text' placeholder="12345678" onChange={handleChange}></input>

      <h3>Address</h3>
      <input name="address" type='text' placeholder="Address" onChange={handleChange}></input>
      
      </div>
  )
}

export default PersonalDetails