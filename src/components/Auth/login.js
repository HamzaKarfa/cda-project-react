import { useEffect, useState } from "react";
// import * as jwt_decode from "jwt-decode";
import './login.css'
import authProvider from "../App/authProvider";
const Login = () => {
  useEffect (()=>{
    const signUpButton = document.getElementById('signUp');
		const signInButton = document.getElementById('signIn');
		const container = document.getElementById('container');
		signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
		signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));
  })


  function sendFormLogin(e){
    e.preventDefault()
    const email = document.querySelector('.email').value
    const password = document.querySelector('.password').value
    authProvider.login({email, password})
  }
  function sendFormRegister(e){
    e.preventDefault()
    const email = document.querySelector('.email-register').value
    const username = document.querySelector('.username-register').value
    const password = document.querySelector('.password-register').value

    const signInJsonData = {
      "email": email,
      "password": password,
      "username": username,
      "roles": [],
    }
    fetch('http://localhost/users',{
      method:'post',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(signInJsonData),
    }).then((response)=>{
      console.log(response);
      return response.json()
    }).then((data)=>{
      console.log(data);
      if (data.token){

        // localStorage.setItem('auth_token', data.token)
      }
    })
  }

  return (
    <section className="login-section">
      <h3 className="text-center">Connectez vous pour accédez à votre compte</h3>
      <div className="form-style">

            <div className="container" id="container">
              <div className="form-container sign-up-container">
                <form onSubmit={(e)=>sendFormRegister(e)}>
                  <h1>Inscrivez-vous</h1>
                  {/* <div className="social-container">
                    <a href="#" className="social"><i className="fa fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fa fa-google-plus"></i></a>
                    <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
                  </div>
                  <span>or use your email for registration</span>*/}
                  <input className="username-register" type="text" placeholder="Name" />
                  <input className="email-register" type="email" placeholder="Email" />
                  <input className="password-register" type="password" placeholder="Password" />
                  <button className="btn bg-color-secondary text-white">S'inscrire</button>
                </form>
              </div>
              <div className="form-container sign-in-container">
                <form onSubmit={(e)=>sendFormLogin(e)}>
                  <h1>Connexion</h1>
                  {/* <div className="social-container">
                    <a href="#" className="social"><i className="fa fa-facebook-f"></i></a>
                    <a href="#" className="social"><i className="fa fa-google-plus"></i></a>
                    <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
                  </div>
                  <span>or use your account</span>*/}
                  <input className="email" type="email" placeholder="Email" />
                  <input className="password" type="password" placeholder="Password" />
                  <a href="#" className="forgot-password">Forgot your password?</a>
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
