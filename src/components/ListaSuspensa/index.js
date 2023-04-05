import './ListaSuspensa.css'

const ListaSuspensa = ({label, options}) => {
    return (
        <div className='listaSuspensa'>
            <label className='listaSuspensa__label'>{label}</label>
            <select className='listaSuspensa__select'>
                {options.map(item => <option>{item}</option>)}
            </select>
        </div>
    )
}

export default ListaSuspensa;