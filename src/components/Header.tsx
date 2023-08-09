import logoDevdatep from '../assets/logoDevdatep.svg'
import '../App.css'

const Header = () => {
  return (
    <header className='w-full bg-[#051C46] opacity-80'>
      <div className='hidden lg:block'>
        <div className='flex items-center justify-between'>
          <img src={logoDevdatep} alt="logo_devdatep" />
          <nav className='w-full flex items-center justify-center text-white'>
            <ul className='flex gap-10 font-semibold text-lg'>
              <li>Nosotros</li>
              <li>Nuestro trabajo</li>
              <li>Servicios</li>
              <li>Contacto</li>
            </ul>
          </nav>
          <div>
            <button className='text-blue-950 font-semibold w-[140px] h-[40px] bg-white mr-10 rounded-md shadow-black drop-shadow shadow-lg'>
              Iniciar Sesion
            </button>
          </div>
        </div>
      </div>
      <div className='block lg:hidden'>
        <div className='flex items-center justify-between bg-[#051C46] opacity-80'>
          <img src={logoDevdatep} alt="logo_devdatep"/>
        </div>
      </div>
    </header>
  )
}

export default Header
