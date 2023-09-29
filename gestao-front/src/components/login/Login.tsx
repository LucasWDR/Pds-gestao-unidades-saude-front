/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/img-redundant-alt */
import { useState } from 'react';
import imgIntroApp from '../../assets/login/introJp.png'
import './styles/loginStyles.css';

export function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className='container'>
            <div className="container-login">
                <div className="wrap-login">
                    <form className="login-form">
                        <span className="login-form-title">Bem vindo!</span>
                        <span className="login-form-title">
                            <img src={imgIntroApp} alt="Image intro Login" />
                        </span>

                        <div className="wrap-input">
                            <input
                                className={email !== "" ? 'has-val input' : 'input'}
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder='Email'></span>
                        </div>

                        <div className="wrap-input">
                            <input
                                className={password !== "" ? 'has-val input' : 'input'}
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                            />
                            <span className="focus-input" data-placeholder='Password'></span>
                        </div>

                        <div className="container-login-form-btn">
                            <button className="login-form-btn">Login</button>
                        </div>

                        {/* vai ser criado, porem nao sei se terá  */}

                        <div className="text-center">
                            <span className="txt-not-account">Problemas para conectar?</span>
                            <a className='retrieve-account' href='#'>recuperar minha senha</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

}