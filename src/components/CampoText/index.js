import './CampoText.css'

const CampoText = ({ label, placeholder }) => {
    return (
        <div className="campoText">
            <label className="campoText__label">{label}</label>
            <input className="campoText__input" placeholder={placeholder} />
        </div>
    )
}

export default CampoText