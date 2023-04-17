import Players from "./Players";
import {Button,Form} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment, useState,useEffect } from "react";
import { Link,useNavigate } from "react-router-dom";


const Edit=()=>{
    const[name,setName]=useState("");
    const[age,setAge]=useState("");
    const[id,setId]=useState("");

    let history=useNavigate();


    var index=Players.map((e)=>{
        return e.id;
    }).indexOf(id);
    

    const handleSubmit=(e)=>{
        e.preventDefault();
        
        let a =Players[index]||{};
        a.Name = name; 
        a.Age = age;    
        history('/');
    }

    useEffect(()=>{
       setName(localStorage.getItem('Name'))
       setAge(localStorage.getItem('Age'))
       setId(localStorage.getItem('Id'))
    },[])

    return(<Fragment>
        <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1>Edit Operation</h1>
        </div>
        <br/>
        <Link to={'/'}><Button className="btn btn-dark ">Go Back</Button></Link>
        <Form className="d-grid gap-2" style={{margin:"8rem"}} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control className="form-control-lg" type="text" value={name} 
                placeholder="Enter Name" 
                required 
                onChange={(e)=>setName(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formAge">
                <Form.Control className="form-control-lg" type="number" value={age}
                placeholder="Enter Age" 
                required 
                onChange={(e)=>setAge(e.target.value)}/>
            </Form.Group>
            <Button 
            className="form-control-lg" type="submit" >Update Player</Button>
        </Form>
    </Fragment>)

}

export default Edit;
