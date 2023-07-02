import { useEffect, useState } from "react";
import { getPerfil, perfilService } from "../services/Auth.services";

function Profile() {


    useEffect(()=>{
        getPerfil().then((response)=>{
            console.log(response);
            setFormularioPerfil(response.data.detalle)
        })
        .catch((error)=>{
            console.log(error);
        })
    },[]);


    const [formularioPerfil, setFormularioPerfil] = useState({
        nombre: '',
        email: '',
        dob: '',
        password: ''
    });

    const handleInputChange = (event)=>{
        setFormularioPerfil({
            ...formularioPerfil,
            [event.target.name]:event.target.value
    });
    }

    const handleSubmit = (event)=>{
        event.preventDefault();
        console.log(formularioPerfil);
        perfilService(formularioPerfil)
        .then((response)=>{
            console.log(response);
        })
        .catch((error)=>{
            console.log(error);
        })
    }

    return (
        <div className="container d-flex justift-content-center align-items-center mt-4">
            <form className="form-login" onSubmit={handleSubmit}>
                <h1 className="text-center mb-5">Informacion de la cuenta</h1>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control form-control-lg" value = {formularioPerfil.nombre} onChange = {handleInputChange} name = "nombre" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control form-control-lg" value = {formularioPerfil.email} onChange = {handleInputChange} name = "email" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha nacimiento</label>
                    <input type="date" className="form-control form-control-lg" value = {formularioPerfil.dob} onChange = {handleInputChange} name = "dob" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label form-label-lg">Password</label>
                    <input type="password" className="form-control form-control-lg" value = {formularioPerfil.password} onChange = {handleInputChange} name = "password" />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;