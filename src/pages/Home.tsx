import backgroundHero from '../assets/Union.svg'
import pc from '../assets/pc.svg'
import homeSection2 from '../assets/home_section_2.svg'
import diferencia from '../assets/diferencia_background.svg'

const Home = () => {
  return (
    <>
      <section className="w-full">
        <div className="w-full lg:h-screen flex items-center justify-center">
          <img src={backgroundHero} className="absolute object-cover w-full h-full" alt="banner_page" />
          <div className="relative lg:-top-16 flex flex-row items-center justify-center">
            <div className="flex flex-col lg:flex-row max-w-[1440px] px-10">
              <div className="flex flex-col w-full mt-6 lg:pl-10">
                <div className="flex flex-col max-w-xl">
                  <h2 className="font-sans text-3xl sm:text-4xl font-bold text-white">Multiplica tu rendimiento y alcanza alturas insospechadas</h2>
                  <p className="mb-8 text-lg text-gray-200">Evita errores por falta de organización y ayuda a tu empresa a llegar al siguiente nivel</p>
                  <button className="mx-auto border-2 text-base md:text-lg rounded-xl p-2 px-10 border-[#ADEEB6] text-[#ADEEB6]">Solicitar información</button>
                </div>
              </div>
              <img src={pc} alt="" className="w-auto lg:w-[968px]" />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full'>
        <div className="flex flex-col items-center justify-center gap-2 mx-auto text-center w-[95%] max-w-[1100px]">
          <h2 className="w-full mb-6 font-sans text-3xl font-bold tracking-tight text-[#051C46] sm:text-4xl sm:leading-none">Contamos con personal capacitado</h2>
          <p className="w-full mb-4 text-base md:text-lg">
            Contamos con grandes profesionales y un equipo altamente integrado para brindarte un servicio a medida y eficaz de diseño web y desarrollo web para tu negocio
          </p>
          <button className="bg-[#051C46] opacity-75 text-white rounded-md py-1 px-5 mt-3 mb-5 w-[217px] h-[53px] shadow-black shadow-lg drop-shadow">Nosotros</button>
          <img src={homeSection2} alt="" />
        </div>
      </section>
      <section className='w-full h-full'>
        <div className="w-full h-full mt-10">
          <img src={diferencia} alt="" className="w-full" />
        </div>
      </section>
    </>
  )
}

export default Home
