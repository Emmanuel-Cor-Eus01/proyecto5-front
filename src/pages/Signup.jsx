import banerLogo from '../images/bg-2.jpg';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { registerService } from '../services/Auth.services';
import Swal from 'sweetalert2';
function Signup() {

    const [formSignUp, setFormSignUp] = useState({
        nombre: '',
        email: '',
        dob: '',
        password: '',
        passwordConfirmation: '',
    });

    const handleInputChange = (event) => {
        setFormSignUp({
            ...formSignUp,
            [event.target.name]: event.target.value
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        registerService(formSignUp)
            .then(response => {
                console.log(response);
                Swal.fire({
                    icon: 'success',
                    title: 'Mensaje',
                    text: 'Usuario registrado correctamente',
                    confirmButtonColor: '#01d28e',
                });
            })
            .catch(error => {
                console.log(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Mensaje',
                    text: 'Error al registrar usuario',
                });
            })
    }

    return (
        <section className="ftco-section">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-5">
                        <div className="wrap">
                        <div className="img" style={{ backgroundImage: `url(${banerLogo})` }} />
                            <div className="login-wrap p-4 p-md-5">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Sign Up</h3>
                                    </div>
                                </div>

                                <form onSubmit={handleSubmit} className="signin-form">
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" onChange={handleInputChange} value={formSignUp.nombre} name="nombre" required />
                                        <label className="form-control-placeholder">Name</label>
                                    </div>
                                    <div className="form-group mt-3">
                                        <input type="text" className="form-control" onChange={handleInputChange} value={formSignUp.email} name="email" required />
                                        <label className="form-control-placeholder">Email</label>
                                    </div>
                                    <div className="form-group">
                                        <input id="password-field" type="date" className="form-control" onChange={handleInputChange} value={formSignUp.dob} name="dob" required />
                                    </div>
                                    <div className="form-group">
                                        <input id="password-field" type="password" className="form-control" onChange={handleInputChange} value={formSignUp.password} name="password" required />
                                        <label className="form-control-placeholder">Password</label>
                                    </div>
                                    <div className="form-group">
                                        <input id="password-field" type="password" className="form-control" onChange={handleInputChange} value={formSignUp.passwordConfirmation} name="passwordConfirmation" required />
                                        <label className="form-control-placeholder">Password Confirmation</label>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-control btn btn-primary rounded submit px-3">SignUp</button>
                                    </div>
                                </form>
                                <p className="text-center">Tienes cuenta? <NavLink data-toggle="tab" to='/login'>LogIn</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Signup;