function Menu() {
    const login = true;
    // importar contexto....
    return (
    <div>
        <h1>Menu</h1>
        {
            login && <button>Salir</button>
        }
    </div>
    );
}

export default Menu;