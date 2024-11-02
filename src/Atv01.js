import Relogio from "./Relogio";
import Letreiro from "./Letreiro";
import { Link } from "react-router-dom";

function Atv01() {
  return (
    <div className="container text-center mt-5">
      <h2 className="mb-4">Atividade 01</h2>
      <div className="row mb-4">
        <div className="col-md-6">
          <Relogio />
        </div>
        <div className="col-md-6">
          <Letreiro />
        </div>
      </div>

      <Link to="/" className="btn btn-secondary">
        Voltar
      </Link>
    </div>
  );
}

export default Atv01;