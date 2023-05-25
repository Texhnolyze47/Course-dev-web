function hero(){
    return(
        <header className="bg-stone-100 flex p-20 ">
            <div>
            <h1 className="text-5xl font-bold pb-6">¿Cuál es su objetivo de aprendizaje?</h1>
            <p>Consigue con nosotros cursos de calidad al mejor precio. Ahora puedes conseguir el mejor curso
con nosotros. Tenemos los mejores mentores en todo el mundo.</p>

            <button className="bg-stone-950 text-zinc-50 hover:bg-indigo-950 p-2 my-4">Empieza aqui</button>
            </div>
            <img src="src/assets/images/hero_image_black.svg" alt="" className="w-2/4"/>
        </header>
    )
}

export default hero;