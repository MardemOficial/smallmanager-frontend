import './PrimaryButton.css';
import '../../../style/global.css';

function PrimaryButton(props) {
    return (
        <button className="PrimaryButton button"> {props.value} </button>
    );
}

export default PrimaryButton;