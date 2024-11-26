import { Link } from "react-router-dom";
import './App.css';
import Gallery from "./Gallery.js";
import {Profile} from "./Gallery.js";
import TodoList from "./TodoList.js";
import Card from "./Card.js"
import PackingList from "./PackingList.js";
import TeaSet from "./Tea.js";
import Receita from "./ComponentePuro.js";

function Atv03() {
    return(
    <article>
    <h1>Atividade Componentes</h1>
    <div>
        <Gallery/>
        <Profile/>
        <TodoList/>
        <Card></Card>
        <PackingList/>
        <Receita></Receita>
        <TeaSet></TeaSet>
    </div>
    <div>
        <Link to="/" className="btn btn-secondary">
        Voltar para página principal
      </Link>
    </div>
    </article>)
}

export default Atv03;