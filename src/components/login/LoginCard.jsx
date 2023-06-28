function LoginCard() {

    return(
        <div className="bg-stone-100 w-full h-full m-8 pb-40" >
            <h1 className="text-center p">Login</h1>
            <form className="flex flex-col items-center py-2">
                <label  className="py-3"  for="email">Correo</label>
                <input  className="py-3 text-center"   type="email" name="email" id="email" placeholder="Correo"></input>
                <label  className="py-3" for="password">Contraseña</label>
                <input  className="py-3 text-center" type="password" name="password" id="password" placeholder="Contraseña"></input>
                <button className="bg-stone-950 text-zinc-50 hover:bg-indigo-950 p-2 my-4">Iniciar sesión</button>

                
            </form>
        </div>
    );
    
}

export default LoginCard;