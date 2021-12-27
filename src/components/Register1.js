import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Headers from "./Header";
import './Register.css'
import Axios from "axios"


function Res() {
  const[usernameReq, setUsernameReq] = useState('');
  const[passwordReq, setPasswordReq] = useState('');

  const[username, setUsername] = useState("");
  const[password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const[loginStatus, setloginStatus] = useState("");

  const { register1, handleSubmit } = useForm();
  const onSubmit = (data) => setResult(JSON.stringify(data));


const register = () => {
  Axios.post("http://localhost:3001/Register", {
    username: usernameReq,
    password: passwordReq,
  }).then((response) => {
    console.log(response);
  });
};

const Login = () =>{
  Axios.post("http://localhost:3001/login", {
    username: usernameReq,
    password: passwordReq,
  }).then((response) =>{
    if(response.data.message){
      setloginStatus(response.data.message)
    } else{
      setloginStatus(response.data[0])
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
  <h1>{loginStatus}</h1>
</div>
</form>
)
};
export default Res;




// export default function Registers1() {
//   const { register, handleSubmit } = useForm();
//   const [result, setResult] = useState("");
//   const onSubmit = (data) => setResult(JSON.stringify(data));

//   return ( 
//     <form onSubmit={handleSubmit(onSubmit)} className='Re'>
//       <Headers />
//       <input className ='Reg' {...register("firstName")} placeholder="First name" />
//       <input className ='Reg' {...register("lastName")} placeholder="Last name" />
//       <select className ='Reg' {...register("category")}>
//         <option className ='Reg' value="">Select...</option>
//         <option className ='Reg' value="A">Category A</option>
//         <option className ='Reg' value="B">Category B</option>
//       </select>

//       <p>{result}</p>
//       <input type="submit" value="Submit" className='Sub'/>
//     </form>
//   );
// }

