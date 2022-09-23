import React from "react";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import './Form.css';


function LoginForm(){

  //https://melvingeorge.me/blog/show-or-hide-password-ability-reactjs
  const [passwordShown, setPasswordShown] = React.useState(false);

  const togglePassword = (e)=>{
    e.preventDefault();
    setPasswordShown(!passwordShown);
  }

  /*const [data, setData] = React.useState([]);

  React.useEffect(() => {
  fetch(`http://localhost:4000/test`,
    {
      method: "POST",
      dataType:"json"
    })
    .then((response) => response.json())
    .then((actualData) => setData(actualData))
    .catch((err)=>{
      console.log(err.message);
    });
  }, []);
*/

  const {register, getValues, handleSubmit, watch, formState: {errors}} = useForm();
  const onSubmit = async (data)=>{console.log(data)}

  return(
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Login</h1>

      Need an account?&nbsp;<a href="/SignUp">Sign Up!</a><br/><br/>

      { /* username validation */ }
      <label class="input-label" for="username">Username: </label> <br/>
      <input type="text" id="username" name="username" {...register("username", { required: true, maxLength: 25, minLength: 3,  pattern: {value:/^[A-Z0-9. _]+$/i, message: "Please enter a valid username" }})} /><br/>
      {errors.username && <div class="form-error">{errors.username.message || "Username is required" }</div>}
      <br/>

      { /* password validation */ }
      <label class="input-label" for="password">Password:</label><br/>
      <div class="information">Password must be at least 5 characters long.</div><br/>
      <div class="password-field">
        <input type={passwordShown ? "text" : "password"} id="password" name="password" {...register("password", { required: true, minLength: { value: 5, message:"Password is not long enough!" }})} /><br/>
        <button onClick={togglePassword}>Show</button>
      </div>
      <br/>
      { errors.password && <div class="form-error">{errors.password.message || "Password is required"}</div> }
      <br/>

      <input type="submit" value="Submit"/>
    </form>
  );
}

export default LoginForm;
