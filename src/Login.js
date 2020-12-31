import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link, Redirect } from "react-router-dom";
import A from './A'
import B from './B'
import './Login.css'

export default function Login() {




	const [name,setName] = useState("");
	const [password,setPassword] = useState("");
	const [val,setValue] = useState("abc");
	const [p,setP] = useState("123");
	const [token,setToken] = useState("");
  const [instruction, setInstruction] = useState("Enter your credentials");

	const onSubmit=(e)=>{
	e.preventDefault();
	if(name=='John' && password==12345){
    setToken('1')
  }else if (name=="MICKY" && password==98765)
		{setToken('2')}
    else{
      setName("");
      setPassword("");
      setInstruction("Wrong UserName or Password");
        
    }
	
	}
	
	


const log = ()=>{
	return (
		<div className="Login">
		 <Form className="lgC">
      { (instruction =="Enter your credentials")?
        <h3 style={{color:"blue"}} >{instruction}</h3>: <h3 style={{color:"red"}} >{instruction}</h3>
       }
        <Form.Group size="lg" controlId="UserName">
          <Form.Label style={{marginRight:"10px", fontSize:"20px"}}>UserName</Form.Label>
          <Form.Control
            autoFocus
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            
          />
          
        </Form.Group>
        <Form.Group size="lg" controlId="password">
          <Form.Label   style={{marginRight:"10px", fontSize:"20px"}}>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
          
        </Form.Group>
        <Button block size="lg" type="submit"  onClick={onSubmit}>
          Login
        </Button>
      </Form>
      </div>
		);
}

  return (
    <div className="Login">
     
      {token=='1' ?<Redirect to="/a1" /> :token=='2'? <Redirect to="/a2" />:log()}
      
    </div>
  );
}