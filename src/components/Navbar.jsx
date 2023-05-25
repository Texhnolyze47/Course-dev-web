
function navbar() {
    return (
        <nav className="bg-gray-100 flex items-center ">
            <img className="block h-12 w-12" src="src/assets/images/logo.jpeg" alt="Logo de la empresa" />
            <ul className="flex-auto pl-4">Course-dev</ul>
            <ul className="flex-auto">Plan de Estudio</ul>
            <ul className="flex-auto">Categorias</ul>
            <ul className="flex-auto">Blog</ul>
            <ul className="flex-auto">Planes</ul>
            <ul className="flex justify-end pr-4">Iniciar Sesion</ul>
            <ul className="flex justify-end pr-4">Registrarse</ul>
        </nav>
    )
}

export default navbar;