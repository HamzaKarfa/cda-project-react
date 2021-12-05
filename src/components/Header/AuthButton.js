import React from "react";
import {
    useHistory,
    Link
  } from "react-router-dom";
import { useAuth } from "../App/AuthContext";

export default function AuthButton() {
    let history = useHistory();
    let auth = useAuth();

    return auth.checkAuth() ? (
      <p>
        <button className= "btn bg-color-secondary text-white"
          onClick={() => {
            auth.logout();
            history.push("/")
          }}
        >
          Deconnexion
        </button>
      </p>
    ) : (
        <Link to='/login' className= "btn bg-color-secondary text-white">
            Se connecter / Créer un compte
        </Link>
    );
  }