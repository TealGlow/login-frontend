import React from "react";
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import './SignUpForm.css';


function SignUpForm(){

  const {register, getValues, handleSubmit, watch, formState: {errors}} = useForm();
  const navigate = useNavigate();
  let errorMsg="";
  var loggedIn = false;

  const onSubmit = async (data)=>{
    const result = await fetch("http://localhost:4000/signup",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data),
    })
    .then((response) => response)
    .then((actualData) => {
      return actualData.status
    })
    .catch((err)=>{
      console.log("error: ", err.message);
      return 500
    });
    console.log("result ", result)
    if(result == 200){

      navigate("/");
    }else if(result == 409){
      console.log("username taken")
      errorMsg = "Username Taken"
    }else{
      console.log("Server error: please try again!")
      errorMsg = "Server error: please try again!"
    }
  };

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign up</h1>

      { /* username validation */ }
      <label for="username">Username (max length: 25): </label> <br/>
      <input type="text" id="username" name="username" {...register("username", { required: true, maxLength: 25,  pattern: {value:/^[A-Z0-9. _-]+$/i, message: "Please enter a valid username" }})} /><br/>
      {errors.username && <div class="form-error">{errors.username.message || "Username is required" }</div>}


      { /* display name, can be blank for now */ }
      <label for="displayname">Displayname (max length: 25):</label><br/>
      <input type="text" id="displayname" name="displayname" {...register("displayname", { maxLength: 25,  pattern: {value:/^[\w-_.]*$/i} })} /><br/>


      { /* password validation */ }
      <label for="password">Password</label><br/>
      <input type="text" id="password" name="password" {...register("password", { required: true})} /><br/>
      {errors.password && <div class="form-error">Password is required</div>}


      { /* confirm password validation */ }
      <label for="password">Confirm Password:</label><br/>
      <input type="text" id="confirmpassword" name="confirmpassword" {...register("confirmPassword", {
        required: true,
        validate: {
          passwordEqual: value => (value === getValues().password) || 'passwords need to match!',
        },
        message: "Required field"
      })} /><br/>
      {errors.confirmPassword && <div class="form-error">{errors.confirmPassword.message || "Please confirm password"}</div>}


      { /* email validation */ }
      <label for="email">Email:</label><br/>
      <input type="text" id="email" name="email" {...register("email",
      {
        required: true,
        pattern: {
          value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Please enter a valid email"
        }
      })} /><br/>
      {errors.email && <div class="form-error">{errors.email?.message || "Email is required"}</div>}

      {errorMsg? errorMsg: ""}
      <input type="submit" value="Submit"/>
    </form>

  );
}

export default SignUpForm;
