
import Logo from '../components/Logo.jsx';
function Footer () {
    return(
        
            <footer className='bg-black'>
                <Logo />
                <div className='flex flex-row justify-between'>
                    <div className='flex flex-col'>
                        <p className='text-white'>FAQ</p>
                        <p className='text-white'>Acerca</p>
                        <p className='text-white'>Politica de privacidad</p>
                        <p className='text-white'>Politica de cookies</p>
                    </div>


                </div>

            </footer>
    )
}

export default Footer;