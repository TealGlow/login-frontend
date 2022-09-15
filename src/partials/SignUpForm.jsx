import React from "react";
import ReactDOM from "react-dom";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Form.css';



function SignUpForm(){

  const {register, getValues, handleSubmit, watch, formState: {errors}} = useForm();
  const navigate = useNavigate();
  var loggedIn = false;


  //https://melvingeorge.me/blog/show-or-hide-password-ability-reactjs
  const [passwordShown, setPasswordShown] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState(null);

  const togglePassword = (e)=>{
    e.preventDefault();
    setPasswordShown(!passwordShown);
  }


  const onSubmit = async (data)=>{

    const result = await axios.post("http://localhost:4000/signup", data)
    .then((response)=>{
      console.log(response)
      if(response.status == 200){
        navigate("/");
      }
    })
    .catch((r)=>{
        if(r.response.status  == 409){
          setErrorMsg("Username Taken")
        }else{
          setErrorMsg("Server error: please try again!")
        }
      }
    );

  };

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign up</h1>

      Already have an account?&nbsp;<a href="/Login">Login!</a><br/><br/>

      { /* username validation */ }
      <label class="input-label" for="username">Username: </label><br />
      <div class="information">Please keep your username between 3 and 25 characters. Letters, numbers, space, underscore, and period are allowed</div> <br/>
      <input type="text" id="username" name="username" {...register("username", { required: true, maxLength: 25, minLength: 3,  pattern: {value:/^[A-Z0-9. _]+$/i, message: "Please enter a valid username" }})} /><br/>
      {errors.username && <div role="error-message" class="form-error">{errors.username.message || errorMsg || "Username is required" }</div>}
      {errorMsg ? <div role="error-message" class="form-error">{errorMsg }</div> : ""}
      <br/>

      { /* display name, can be blank for now */ }
      <label class="input-label" for="displayname">Displayname:</label><br />
      <div class="information">Please keep your displayname between 3 and 25 characters.  This can be changed at any time.</div><br/>
      <input type="text" id="displayname" name="displayname" {...register("displayname", { maxLength: 25,  pattern: {value:/^[\w-_.]*$/i} })} /><br/>
      <br/>

      { /* password validation */ }
      <label class="input-label" for="password">Password:</label><br/>
      <div class="information">Password must be at least 5 characters long.</div><br/>
      <div class="password-field">
        <input type={passwordShown ? "text" : "password"} id="password" name="password" {...register("password", { required: true, minLength: { value: 5, message:"Password is not long enough!" }})} /><br/>
        <button onClick={togglePassword}>Show</button>
      </div>
      <br/>
      {errors.password && <div class="form-error">{errors.password.message || "Password is required"}</div>}
      <br/>

      { /* confirm password validation */ }
      <label class="input-label" for="password">Confirm Password:</label><br/>
      <div class="information">Please enter your password again.</div><br/>
      <input type="password" id="confirmpassword" name="confirmpassword" {...register("confirmPassword", {
        required: true,
        validate: {
          passwordEqual: value => (value === getValues().password) || 'passwords need to match!',
        },
        message: "Required field"
      })} /><br/>
      {errors.confirmPassword && <div class="form-error">{errors.confirmPassword.message || "Please confirm password"}</div>}
      <br/>

      { /* email validation */ }
      <label class="input-label" for="email">Email:</label><br/>
      <div class="information">To confirm account.</div><br/>
      <input type="text" id="email" name="email" {...register("email",
      {
        required: true,
        pattern: {
          value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          message: "Please enter a valid email"
        }
      })} /><br/>
      {errors.email && <div class="form-error">{errors.email?.message || "Email is required"}</div>}

      <br/>
      <input type="submit" value="Submit"/>
    </form>

  );
}

export default SignUpForm;
