import React from "react";
import { Link } from "react-router-dom";

const Home = ()=> {
    return (
        <div className="container text-center">
            <h1 className="my-4">Atividades de React</h1>
            <nav>
                <ul className="nav flex-column align-items-center">
                    <li className="nav-item mb-2">
                        <Link className="nav-link btn btn-primary mx-2" to="/Atv01">Atividade 01</Link>
                    </li>
                    <li className="nav-item mb-2">
                        <Link className="nav-link btn btn-primary mx-2" to="/Atv02">Atividade 02</Link>
                    </li>
                </ul>
            </nav>
        </div>
  );
}

export default Home;