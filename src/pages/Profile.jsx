
function Profile() {


    return (
        <div className="container mt-4">
            <form className="form-login">
                <h1 className="text-center mb-5">Informacion de la cuenta</h1>
                <div className="mb-3">
                    <label className="form-label">Nombre</label>
                    <input type="text" className="form-control form-control-lg" id="name" name="name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input type="email" className="form-control form-control-lg" id="last_name" name="last_name" />
                </div>
                <div className="mb-3">
                    <label className="form-label">Fecha nacimiento</label>
                    <input type="date" className="form-control form-control-lg" id="email" name="email" />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label form-label-lg">Password</label>
                    <input type="password" className="form-control form-control-lg" id="password" name="password" />
                </div>
                <div className="d-grid">
                    <button className="btn btn-primary" type="submit">Guardar</button>
                </div>
            </form>
        </div>
    );
}

export default Profile;