import "./CampoTexto.css";

const CampoTexto = ({ label, placeholder, obrigatorio, valor, aoAlterado }) => {
  const placeholderModificado = `${placeholder} ...`;

  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className="campo-texto">
      <label>{label}</label>
      <input
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        placeholder={placeholderModificado}
      ></input>
    </div>
  );
};

export default CampoTexto;
