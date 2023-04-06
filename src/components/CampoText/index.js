import "./CampoText.css";

const CampoText = ({ label, placeholder, obrigatorio, onChange, value }) => {
  const aoSalvar = (evento) => {
    onChange(evento.target.value);
  };

  return (
    <div className="campoText">
      <label className="campoText__label">{label}</label>
      <input
        className="campoText__input"
        placeholder={placeholder}
        required={obrigatorio}
        onChange={aoSalvar}
        value={value}
      />
    </div>
  );
};

export default CampoText;
