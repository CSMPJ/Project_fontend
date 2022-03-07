import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";
import './Register.css'
import Axios from "axios"


function Res() {
  const[usernameReq, setUsernameReq] = useState("");
  const[passwordReq, setPasswordReq] = useState("");

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");

  const [result, setResult] = useState('');

  const[LoginStatus, setLoginStatus] = useState('');
  const[RegisterStatus, setRegisterStatus] = useState('');

  const { register1, handleSubmit } = useForm();
  const onSubmit = (data) => setResult(JSON.stringify(data));


const register = () => {
  Axios.post("http://localhost:3001/Register", {
    username: usernameReq,
    password: passwordReq,
  }).then((response) => {
    console.log(response);
    if(response.data.message){
      setRegisterStatus(response.data.message);
    } else{
      setRegisterStatus(response.data.rows[0].username);
    }
  });
  
};

const Login = () =>{
  Axios.post("http://localhost:3001/login", {
    username: username,
    password: password,
  }).then((response) =>{
        console.log(response);
    if(response.data.message){
      setLoginStatus(response.data.message);
    } else{
      setLoginStatus(response.data.rows[0].username);
    }
  });
};

return(

  <form onSubmit={handleSubmit(onSubmit)} className='Re'>
   
    <Headers />
    <div classname = "Reg">
      <div>
   
        <input type="text" className ='Reg'
            placeholder="Username" 
            onChange={(e) =>{
              setUsernameReq(e.target.value);
    }}
      />
      <input type="password" className ='Reg'
    placeholder="Password"  
    onChange={(e) =>{
      setPasswordReq(e.target.value);
    }}
  />
  <button onClick={register} className='Sub'>Register</button>
    <br></br>
    <h1>{RegisterStatus}</h1>
    <br></br>
  </div>
  

  <div>
  
  <input type="text" className ='Reg'
    placeholder="Username" 
    onChange={(e) =>{
      setUsername(e.target.value);
    }}
  />
   <input type="password" className ='Reg'
    placeholder="Password" 
    onChange={(e) =>{
      setPassword(e.target.value);
    }}
  />
  <button onClick={Login} className='Sub'>Login</button>
  
  </div>
  <h1>{LoginStatus}</h1>
</div>
</form>
)
};
export default Res;




