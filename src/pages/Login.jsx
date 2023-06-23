import bannerLogo from '../images/bg-1.jpg';
import { useState, useContext } from 'react';
import { loginService } from '../services/Auth.services';
import Swal from 'sweetalert2';
import { AuthContext } from '../context/Auth.context';

function Login() {

    const [formLogin, setFormLogin] = useState({
        email: '',
        password: ''
    });

    const {setToken, login} = useContext(AuthContext);

    const handleInputChange = (event) => {
        // este va estableciendo el balor de los input al state del formulario
        setFormLogin({
            ...formLogin,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        // este va ser el envio del formuladio al backend
        event.preventDefault();
        console.log(formLogin, "formLogin");
        loginService(formLogin)
            .then((response) => {
                // funciono el login
                login(response.data.detalle);
                Swal.fire({
                    icon:'success',
                    title: 'Mensaje',
                    text: 'Login correcto'
                });
            })
            .catch((error) => {
                // fallo el login
                Swal.fire({
                    icon:'error',
                    title: 'Mensaje',
                    text: 'Error en login'
                });
            })
        // como esto mando esto al backend estoy al 50%
    }

    return (
        <section className="ftco-section">
            <div className="container">
                
                <div className="row justify-content-center">
                    <div className="col-md-7 col-lg-5">
                        <div className="wrap">
                            <div className="img" style={{ backgroundImage: `url(${bannerLogo})` }} />
                            <div className="login-wrap p-4 p-md-5">
                                <div className="d-flex">
                                    <div className="w-100">
                                        <h3 className="mb-4">Sign In</h3>
                                    </div>
                                </div>
                                <form className="signin-form" onSubmit={handleSubmit}>
                                    <div className="form-group mt-3">
                                        <input type="email" className="form-control" required onChange={handleInputChange} value={formLogin.email} name="email" />
                                        <label className="form-control-placeholder" htmlFor="username">Email</label>
                                    </div>
                                    <div className="form-group">
                                        <input id="password-field" type="password" className="form-control" required onChange={handleInputChange} value={formLogin.password} name="password" />
                                        <label className="form-control-placeholder" htmlFor="password">Password</label>
                                        <span toggle="#password-field" className="fa fa-fw fa-eye field-icon toggle-password" />
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="form-control btn btn-primary rounded submit px-3">Sign
                                            In</button>
                                    </div>
                                </form>
                                <p className="text-center">No estas registrado? <a data-toggle="tab" href="#signup">Registrate</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Login;