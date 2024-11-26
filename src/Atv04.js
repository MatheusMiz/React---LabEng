import { Link } from "react-router-dom";
import React from "react";
import "./App.css"
import Toolbar from "./Toolbar";
import Gallery2 from "./Gallery2";
import Counter from "./Counter";
import Form from "./Form";
import MovingDot from "./MovingDot";
import Form2 from "./Form2";
import Form3 from "./Form3";
import List from "./List";
import List2 from "./List2";

function Atv04(){
    return(
        
        <div >
    <h1>Atividade Componentes</h1>
    <div>
        <Toolbar></Toolbar>
        <br></br>
        <Gallery2></Gallery2>
        <br></br>
        <Counter></Counter>
        <br></br>
        <Form></Form>
        <br></br>
        <MovingDot></MovingDot>
        <br></br>
        <Form2></Form2>
        <br></br>
        <Form3></Form3>
        <br></br>
        <List></List>
        <br></br>
        <List2></List2>
    </div>
    <div>
        <Link to="/" className="btn btn-secondary">
        Voltar para página principal
      </Link>
    </div>
    </div>
    )
}

export default Atv04;