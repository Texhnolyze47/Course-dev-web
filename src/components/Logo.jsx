function Logo(){
    return(
            <a className="flex flex-nowrap" href="/index">
            <img className="block h-13 w-12" src="src/assets/images/logo.jpeg" alt="Logo de la empresa" />
            <ul className="px-4 py-3 self-center text-xl font-mono bg-stone-950 text-white">Course-dev</ul>
            </a>            
    )
}

export default Logo