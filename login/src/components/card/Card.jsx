import React from "react";
import './card.css'

import { APPLE_ICON, GOOGLE_ICON } from "../../constants"

const Card = () => {
    return (
        <div className="form-container">
            <p className="title">Bienvenido</p>
            <form className="form">
                <input type="text" className="input" placeholder="Usuario" />
                <input type="password" className="input" placeholder="Contraseña" />
                <p className="page-link">
                    <span className="page-link-label">He olvidado mi contraseña</span>
                </p>
                <button className="form-btn">Iniciar sesión</button>
            </form>
            <p className="sign-up-label">
                ¿No estas registrado? <span className="sign-up-link">Registrarse</span>
            </p>
            <div className="buttons-container">
                <div className="apple-login-button">
                    {APPLE_ICON}
                    <span>Iniciar con Apple</span>
                </div>
                <div className="google-login-button">
                    {GOOGLE_ICON}
                    <span>Iniciar con Google</span>
                </div>
            </div>
        </div>
    );
}

export default Card;