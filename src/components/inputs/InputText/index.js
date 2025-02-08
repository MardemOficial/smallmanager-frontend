import './InputText.css';

function InputText(props) {
    return (
        <div className="input-container">
            <label className="input-label">{props.label}</label>
            <input name={props.name} className="input-text" type={props.type} placeholder={props.placeholder} />
        </div>
    );
}

export default InputText;