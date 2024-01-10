import './form.css'
import React, { useState } from "react";

function Form({ onSubmit }) {
    const [formData, setFormData] = useState({
        name: "",
        lastname: "",
        file: ""
    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        // Actualiza el estado del formulario al cambiar los campos
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Llama a la función onSubmit del padre y pasa los datos del formulario
        onSubmit(formData);
    };

    return (
        <div className="container-form">
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Nombre:</label>
                <input
                    type="text"
                    name="name"
                    placeholder="Nombre"
                    onChange={handleChange}
                    value={formData.name}
                />

                <label htmlFor="lastname">Apellidos:</label>
                <input
                    type="text"
                    name="lastname"
                    placeholder="Apellidos"
                    onChange={handleChange}
                    value={formData.lastname}
                />

                <label htmlFor="file">Archivo:</label>
                <input
                    type="file"
                    name="file"
                    accept="image/*"
                    onChange={handleChange}
                />

                <button type="submit">Aceptar</button>
            </form>
        </div>
    );
}

export default Form;
