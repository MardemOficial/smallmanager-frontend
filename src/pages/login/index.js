import './Login.css';
import '../../style/global.css';
import PrimaryButton from '../../components/buttons/PrimaryButton';
import SecondaryButton from '../../components/buttons/SecondaryButton';
import InputText from '../../components/inputs/InputText';
import logo from '../../assets/images/logo.png';
import api from '../../services/api';
import {useState} from 'react';

function Login() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    function clear(event){
        event.preventDefault();
        setLogin('');
        setPassword('');
        console.log("Entrou em clear")
    }
    
    function logar(event){
        event.preventDefault();
        api();
        console.log("Entrou em logar");
    }

    return (

        <div className="Login">
            <form>
                <img src={logo} alt='Logo'/>
                <InputText
                    name="login"
                    type="text"
                    label="Login:"
                    placeholder="Ex.: 628.182.687-58"
                    value={login}
                    change={value => setLogin(value)}
                 />
                <InputText
                    name="password"
                    type="password"
                    label="Senha:"
                    placeholder="Ex.: 123"
                    value={password}
                    change={value => setPassword(value)}
                />
                <section className="buttons">
                    <PrimaryButton value="Acessar" onClick={logar}/>
                    <SecondaryButton value="Limpar" onClick={clear}/>
                </section>
            </form>
        </div>
    );
}

export default Login;