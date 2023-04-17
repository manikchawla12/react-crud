import Players from "./Players";
import {Table,Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fragment } from "react";
import { Link,useNavigate } from "react-router-dom";

const Home=()=>{

    let history = useNavigate();

    const handleEdit=(id,name,age)=>{
        localStorage.setItem('Name',name);
        localStorage.setItem('Age',age);
        localStorage.setItem('Id',id);
    }
    
    
    const handleDelete=(id)=>{

        
        var index=Players.map((e)=>{
            return e.id;
        }).indexOf(id);

        Players.splice(index,1)
        history("/");

    }

    return(<Fragment>
        <div className="container-fluid p-5 bg-primary text-white text-center">
        <h1 >CRUD operations using Reactjs</h1>
        </div>
        <div style={{margin:"5rem"}}>
            <Table stripped="true" bordered hover size="md">
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Age</td>
                        <td>Operations</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        Players && Players.length>0
                        ?
                        Players.map((item)=>{
                            return(
                                <tr key={item.id}>
                                    <td>{item.Name}</td>
                                    <td>{item.Age}</td>
                                    <td>
                                        <Link to={`/edit`}>
                                        <Button onClick={()=>handleEdit(item.id,item.Name,item.Age)}>Edit</Button>
                                        </Link>
                                        &nbsp;
                                        <Button onClick={()=>handleDelete(item.id)}>Delete</Button>
                                    </td>
                                </tr>
                            )
                        })
                        :
                        "No Record available!"
                    }
                </tbody>
            </Table>
            <br/>
            <Link className="d-grid gap-2" to={`/add`}>
                <Button size="lg" >Add Player</Button>
            </Link>
        </div>
    </Fragment>)
}

export default Home;