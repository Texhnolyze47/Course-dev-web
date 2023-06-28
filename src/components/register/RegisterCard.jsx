function RegisterCard() {
  return (
    <div className="bg-stone-100 w-full h-full m-8">
      <form className="flex flex-col items-center py-2" action="">
        <label className="py-3" for="name">Nombre</label>
        <input className="py-3" type="text" name="name" id="name" placeholder="Nombre"></input>
        <label className="py-3" for="email">Correo</label>
        <input className="py-3" type="email" name="email" id="email" placeholder="Correo"></input>
        <label className="py-3" for="password">Contraseña</label>
        <input className="py-3" type="password" name="password" id="password" placeholder="Contraseña"></input>
        <label className="py-3" for="password">Confirmar contraseña</label>
        <input className="py-3" type="password" name="password" id="password" placeholder="Confirmar contraseña"></input>
        <button className="bg-stone-950 text-zinc-50 hover:bg-indigo-950 p-2 my-4">Registrar</button>
      </form>
        
    </div>
  );

}

export default RegisterCard;