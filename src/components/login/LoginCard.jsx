function LoginCard() {

    return(
        <div className="bg-stone-100 w-3/5 h-full m-8" >
            <h1 className="text-center p">Login</h1>
            <form className="flex flex-col items-center py-2">
                <label for="email">Correo</label>
                <input className="text-center py-2"  type="email" name="email" id="email" placeholder="Correo"></input>
                <label for="password">Contraseña</label>
                <input className="text-center py-2" type="password" name="password" id="password" placeholder="Contraseña"></input>
                <button className="bg-stone-950 text-zinc-50 hover:bg-indigo-950 p-2 my-4">Iniciar sesión</button>

                
            </form>
        </div>
    );
    
}

export default LoginCard;