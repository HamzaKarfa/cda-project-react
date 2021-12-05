import { useEffect} from "react";
import {
  useHistory,
} from "react-router-dom";
import './login.css'
import authProvider from "../App/authProvider";
const Login = () => {
  const history = useHistory();

  useEffect (()=>{
    const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');
		signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
		signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));
  })


  async function sendFormLogin(e){
    e.preventDefault()
    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value
    await authProvider.login({email, password})
    history.push("/payment")
  }
  async function sendFormRegister(e){
    e.preventDefault()
    const email = document.querySelector('.email-register').value
    const username = document.querySelector('.username-register').value
    const password = document.querySelector('.password-register').value
    await authProvider.register({email, password, username})
    history.push("/payment")
  }

  return (
    <section className="login-section">
      <h3 className="text-center">Connectez vous pour accédez à votre compte</h3>
      <div className="form-style">
            <div className="container" id="container">
              <div className="form-container sign-up-container">
                <form onSubmit={(e)=>sendFormRegister(e)}>
                  <h1>Inscrivez-vous</h1>
                  <input className="username-register" type="text" placeholder="Name" />
                  <input className="email-register" type="email" placeholder="Email" />
                  <input className="password-register" type="password" placeholder="Password" />
                  <button className="btn bg-color-secondary text-white">S'inscrire</button>
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form onSubmit={(e)=>sendFormLogin(e)}>
                  <h1>Connexion</h1>
                  <input className="email" type="email" placeholder="Email" />
                  <input className="password" type="password" placeholder="Password" />
                  <a href="/" className="forgot-password">Forgot your password?</a>
                  <button className="btn bg-color-secondary text-white">Connexion</button>
                </form>
              </div>
              <div className="overlay-container">
                <div className="overlay">
                  <div className="overlay-panel overlay-left">
                    <h1>Identifiez-vous</h1>
                    <p>Vous avez déjà un compte ? </p>
                    <button className="ghost btn bg-color-secondary text-white" id="signIn">Se connecter</button>
                  </div>
                  <div className="overlay-panel overlay-right">
                    <h1>Bienvenue</h1>
                    <p>Vous n’avez pas de compte ?</p>
                    <button className="ghost btn bg-color-secondary text-white" id="signUp">S'inscrire</button>
                  </div>
                </div>
              </div>
            </div>
      </div>
    </section>
  );
}

export default Login;
