import "./botao.css";

const Botao = (props) => {
  return (
    <button onClick={props.onClick} type={props.type} className="botao">
      {props.children}
    </button>
  );
};

export default Botao;
