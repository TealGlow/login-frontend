import React from "react";

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

  return(
    <form>
      <h1>Login :)</h1>
      <textarea></textarea>
    </form>
  );
}

export default LoginForm;
