import "./colaborador.css";

const Colaborador = ({ nome, cargo, imagem, corDeFundo }) => {
  return (
    <div className="colaborador">
      <header className="cabecalho" style={{ backgroundColor: corDeFundo }}>
        <img src={imagem} alt="Helder"></img>
      </header>
      <section className="rodape">
        <h4>{nome}</h4>
        <h5>{cargo}</h5>
      </section>
    </div>
  );
};

export default Colaborador;
