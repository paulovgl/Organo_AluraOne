import "./Campo.css";

const Campo = ({ type = 'text', label, placeholder, obrigatorio, onChange, value }) => {
  const aoSalvar = (evento) => {
    onChange(evento.target.value);
  };

  return (
    <div className="campo">
      <label className="campo__label">{label}</label>
      <input
        className={`campo__input campo__${type}`}
        type={type}
        placeholder={placeholder}
        required={obrigatorio}
        onChange={aoSalvar}
        value={value}
      />
    </div>
  );
};

export default Campo;
