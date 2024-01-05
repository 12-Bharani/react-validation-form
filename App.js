import { useState } from 'react';
import React from 'react'
import {useFormik} from 'formik';
import Popup from './componenets/Popup';
import './style.css'




const validate=values=>{
  const errors={};
  if(!(values.username)){
    errors.username="required"
  }else if(values.username.length > 8){
    errors.username="must be 8 character "
  }
  
  if(!values.email){
    errors.email="required"
  }else if(!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)){
    errors.email="invalid email"
  } 
  
  if(!values.password){
    errors.password="required"
  }else if(values.password.length >8){
    errors.password="max legnth 8 characters"
  }else if(values.password.length <4){
    errors.password="min length 4"
  }
   if(!values.confirmpassword){
    errors.confirmpassword="required"

  }else if(values.confirmpassword !== values.password){
    errors.confirmpassword="password must match"
  }
  return(errors)
}



const App = () => {
  const [bool, setBool] = useState(0)
  const formik= useFormik({
    initialValues:{
      username:'',
      emil:'',
      password:'',
      confirmpassword:'',
    },
    validate,
    onSubmit:values=>{
      if(bool){
        setBool(0)
        
      }
      else{
        setBool(1)
        console.log(values)
      }
     
    }
  });

  console.log(formik.values);
  return (
    
      <div class="main">
        <div className="signUp-form">
          
        <form onSubmit={formik.handleSubmit} className='form'>
        <h2>Sign Up</h2>
          <div className="inputs">
            <label htmlFor="username" className="form-label">Username</label>
          <input type="text"
          placeholder='enter your username'
          name='username'
          onChange={formik.handleChange}
          value={formik.values.username}
          required
          className="form-input"

           />
           {formik.values.username ? <span>{formik.errors.username}</span>:null}
          </div>

           <div className='inputs'>
            <label htmlFor="email" className="form-label">Email</label>
           <input type="email"
          placeholder='enter your email'
          name='email'
          onChange={formik.handleChange}
          value={formik.values.email}
          required
          className="form-input"
           />

           {formik.values.email ? <span>{formik.errors.email}</span>:null}
           </div>

           <div className="inputs">
            <label htmlFor="password" className="form-label">Password</label>
           <input type="password"
          placeholder='enter your password'
          name='password'
          onChange={formik.handleChange}
          value={formik.values.password}
          required
          className="form-input"
           />
           {formik.values.password ? <span>{formik.errors.password}</span>:null}
           </div>

           <div className="inputs">
            <label htmlFor="confirmpassword" className="form-label">Conform Password</label>
           <input type="password"
          placeholder='confirm password'
          name='confirmpassword'
          onChange={formik.handleChange}
          value={formik.values.confirmpassword}
          required
          className="form-input"
           />
        
           {formik.values.confirmpassword ? <span>{formik.errors.confirmpassword}</span>:null}
           </div>

           <div>
           <button  className="submit-btn" type='submit'>submit</button>
           <span id='bottom-text'>Already have account? <a href="#">login</a></span>
           
           <div className="message-box">
          {
            bool ? (<Popup onclick={formik.handleSubmit}/>):null
          }
        </div>
          
           </div>  
        </form>
        <div className="left-content">
          <img src="https://images.pexels.com/photos/287227/pexels-photo-287227.jpeg?auto=compress&cs=tinysrgb&w=600" alt="left" className='form-image' />
        </div>


        </div>
        
        
        
    </div>
      
    
  )
}

export default App

