import './PrimaryButton.css';
import '../../../style/global.css';

function PrimaryButton(props) {
    return (
        <button className="PrimaryButton button" onClick={props.onClick}> {props.value} </button>
    );
}

export default PrimaryButton;