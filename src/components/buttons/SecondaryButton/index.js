import './SecondaryButton.css';
import '../../../style/global.css';

function SecondaryButton(props) {
    return (
        <button className="SecondaryButton button"> {props.value} </button>
    );
}

export default SecondaryButton;