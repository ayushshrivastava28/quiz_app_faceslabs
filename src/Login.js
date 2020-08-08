import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, ListGroup} from 'react-bootstrap'

export default function Login() {
  const [name, setName] = useState("");
  return (
    <div className="input_name">
        <ListGroup>
              <h2><input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}></input></h2>
        <center><Button className="mt-2" variant={"info"} style={{ width: '50%',marginTop:20,backgroundColor:"#368fda3b"}}>
          <h3><Link to={`quiz/${name}`}><strong style={{color:"black"}}>Submit</strong></Link></h3></Button></center>
      </ListGroup>
          
    </div>
  );
}