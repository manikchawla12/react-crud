import Players from "./Players";
import {Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import {v4 as uuid} from "uuid";

const Add=()=>{
    let history=useNavigate();
    const[name,setName]=useState("");
    const[age,setAge]=useState("");

    const handleSubmit=(e)=>{
        e.preventDefault();
        const ids=uuid();
        let uniqueId=ids.slice(0,8);
    
        Players.push({id:uniqueId,Name:name,Age:age})
        history('/');
    }

    return(<Fragment>
        <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>ADD Operation</h1>
        </div>
        <br/>
        <Link to={'/'}><Button className="btn btn-dark ">Go Back</Button></Link>
        <Form className="d-grid gap-2" style={{margin:"8rem"}} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control className="form-control-lg" type="text"
                placeholder="Enter Name" 
                required 
                onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control className="form-control-lg" type="number"
                placeholder="Enter Age" 
                required 
                onChange={(e)=>setAge(e.target.value)}/>
            </Form.Group>
            <Button 
            className="form-control-lg" type="submit" >Add Player</Button>
        </Form>
    </Fragment>)
}

export default Add;
