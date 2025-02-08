import './Login.css';
import '../../style/global.css';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import InputText from '../../components/inputs/InputText';
import logo from '../../assets/images/logo.png';

function Login() {
    return (
        <div className="Login">
            <form>
                <img src={logo} alt='Logo'/>
                <InputText name="login" type="text" label="Login:" placeholder="Ex.: 628.182.687-58" />
                <InputText name="password" type="password" label="Senha:" placeholder="Ex.: 123" />
                <section className="buttons">
                    <PrimaryButton value="Acessar" />
                    <SecondaryButton value="Limpar" />
                </section>
            </form>
        </div>
    );
}

export default Login;