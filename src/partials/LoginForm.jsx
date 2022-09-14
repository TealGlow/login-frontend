import React from "react";
import {useForm} from "react-hook-form"
import { useNavigate } from "react-router-dom";
import axios from "axios";


function LoginForm(){
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
      <label for="username">Username: </label> <br/>
      <input type="text" id="username" name="username" {...register("username", { required: true, maxLength: 25, minLength: 3,  pattern: {value:/^[A-Z0-9. _]+$/i, message: "Please enter a valid username" }})} /><br/>
      {errors.username && <div class="form-error">{errors.username.message || "Username is required" }</div>}

      { /* password validation */ }
      <label for="password">Password:</label><br/>
      <input type="text" id="password" name="password" {...register("password", { required: true, minLength: { value: 5, message:"Password is not long enough!" }})} /><br/>
      {errors.password && <div class="form-error">{errors.password.message || "Password is required"}</div>}

      <input type="submit" value="Submit"/>
    </form>
  );
}

export default LoginForm;
