import { NavLink } from "react-router-dom";
import logoDevdatep from "../assets/logoDevdatep.svg";

const Header = () => {
  return (
    <header className="w-full bg-[#051C46] opacity-80">
      <div className="hidden lg:block w-full">
        <div className="flex items-center justify-between w-full">
          <img src={logoDevdatep} alt="logo_devdatep" />
          <nav className="w-full flex items-center justify-center text-white">
            <ul className="flex gap-10 font-semibold text-lg">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "transition-colors duration-500 text-[#ADEEB6] pb-[4px] border-b-[2px] border-b-[#ADEEB6]"
                      : "text-white"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nosotros"
                  className={({ isActive }) =>
                    isActive
                      ? "transition-colors duration-500 text-[#ADEEB6] pb-[4px] border-b-[2px] border-b-[#ADEEB6]"
                      : "text-white"
                  }
                >
                  Nosotros
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/nuestro-trabajo"
                  className={({ isActive }) =>
                    isActive
                      ? "transition-colors duration-500 text-[#ADEEB6] pb-[4px] border-b-[2px] border-b-[#ADEEB6]"
                      : "text-white"
                  }
                >
                  Nuestro trabajo
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/servicios"
                  className={({ isActive }) =>
                    isActive
                      ? "transition-colors duration-500 text-[#ADEEB6] pb-[4px] border-b-[2px] border-b-[#ADEEB6]"
                      : "text-white"
                  }
                >
                  Servicios
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="contacto"
                  className={({ isActive }) =>
                    isActive
                      ? "transition-colors duration-500 text-[#ADEEB6] pb-[4px] border-b-[2px] border-b-[#ADEEB6]"
                      : "text-white"
                  }
                >
                  Contacto
                </NavLink>
              </li>
            </ul>
          </nav>
          <div>
            <button className="text-blue-950 font-semibold w-[140px] h-[40px] bg-white mr-10 rounded-md shadow-black drop-shadow shadow-lg">
              Iniciar Sesion
            </button>
          </div>
        </div>
      </div>
      <div className="block lg:hidden">
        <div className="flex items-center justify-between bg-[#051C46] opacity-80">
          <img src={logoDevdatep} alt="logo_devdatep" />
        </div>
      </div>
    </header>
  );
};

export default Header;
