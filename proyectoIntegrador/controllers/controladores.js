
function mostrarFormularioRegister(req, res) {
    res.render('register');
}

function mostrarFormularioLogin(req, res) {
    res.render('login');
}
function mostrarFormularioEditarPerfil(req, res) {
    res.render('editar-perfil');
}

function mostrarFormularioAgregarProducto(req, res) {
    res.render('agregar-producto');
}

module.exports = { //PREGUNTAR EL LUNES EN CLASE
    mostrarFormularioAgregarProducto,
    mostrarFormularioEditarPerfil,
    mostrarFormularioLogin,
    mostrarFormularioRegister
};