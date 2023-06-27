function RegisterCard() {
  return (
    <div className="bg-stone-100 w-3/5 h-full m-8">
      <form className="flex flex-col items-center py-2" action="">
        <label for="name">Nombre</label>
        <input type="text" name="name" id="name" placeholder="Nombre"></input>
        <label for="email">Correo</label>
        <input type="email" name="email" id="email" placeholder="Correo"></input>
        <label for="password">Contraseña</label>
        <input type="password" name="password" id="password" placeholder="Contraseña"></input>
        <label for="password">Confirmar contraseña</label>
        <input type="password" name="password" id="password" placeholder="Confirmar contraseña"></input>
        <button className="bg-stone-950 text-zinc-50 hover:bg-indigo-950 p-2 my-4">Registrar</button>
      </form>
        
    </div>
  );

}

export default RegisterCard;