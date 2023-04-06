import "./ListaSuspensa.css";

const ListaSuspensa = ({ label, options, obrigatorio, onChange, value }) => {
  const aoSalvar = (evento) => {
    onChange(evento.target.value);
  };

  return (
    <div className="listaSuspensa">
      <label className="listaSuspensa__label">{label}</label>
      <select
        className="listaSuspensa__select"
        required={obrigatorio}
        onChange={aoSalvar}
        value={value}
      >
        {options.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default ListaSuspensa;
