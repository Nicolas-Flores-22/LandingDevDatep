import pc from '../assets/pc.svg'
import homeSection2 from '../assets/home_section_2.svg'
import diferencia1 from '../assets/diferencia_imagen_1.svg'

const Home = () => {
  return (
    <div>
      <section className='w-full'>
        <div className="flex justify-center w-full lg:h-[80vh] bg-[url('./assets/Union.svg')] bg-cover bg-no-repeat">
            <div className='max-w-[1440px]'>
                <div className='flex flex-col lg:flex-row mt-8 lg:mt-[65px]'>
                    <div className="flex flex-col py-10">
                        <h2 className="font-sans mb-5 text-3xl sm:text-4xl font-bold text-white">
                            Multiplica tu rendimiento y alcanza alturas insospechadas</h2>
                        <p className="mb-8 text-lg text-gray-200">
                            Evita errores por falta de organización y ayuda a tu empresa a llegar al siguiente nivel
                        </p>
                        <button className="mx-auto border-2 text-base md:text-lg rounded-xl p-2 px-10 border-[#ADEEB6] text-[#ADEEB6]">
                            Solicitar información
                        </button>
                    </div>
                    <img src={pc} alt="pc-hero-section"/>
                </div>
            </div>
        </div>
      </section>
      <section className='w-full'>
        <div className="flex flex-col items-center justify-center gap-y-2 mx-auto text-center w-[95%] max-w-[1100px]">
            <h2 className="w-full mb-6 font-sans text-3xl font-bold tracking-tight text-[#051C46] sm:text-4xl sm:leading-none">Contamos con personal capacitado</h2>
            <p className="w-full mb-4 text-base md:text-lg">
                Contamos con grandes profesionales y un equipo altamente integrado para brindarte un servicio a medida y eficaz de diseño web y desarrollo web para tu negocio
            </p>
            <button className="bg-[#051C46] opacity-75 text-white rounded-md py-1 px-5 mt-3 mb-5 w-[217px] h-[53px] shadow-black shadow-lg drop-shadow">Nosotros</button>
            <img src={homeSection2} alt="" />
            </div>
      </section>
      <section className='w-full'>
        <div className="flex w-full h-[700px] mt-20 bg-[url('./assets/diferencia_background.svg')] bg-cover bg-no-repeat">
          <div className='w-full flex flex-col items-center gap-16 justify-center m-w-[1229px]'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-3xl font-bold text-center text-[#051C46] opacity-80'>¿Qué nos diferencia?</h2>
              <p className='text-2xl font-normal text-center text-[#051C46] opacity-80'>Devdatep se rige en 4 pilares principales</p>
            </div>
            <div className='flex justify-center items-center flex-wrap lg:gap-x-12'>
              <div className='lg:w-[269px] lg:h-[340px] bg-white rounded-lg border-2 border-[#051C46] border-opacity-80'>
                <div className='flex flex-col py-14 gap-7 items-center justify-center'>
                  <p className='text-[#051C46] text-opacity-80 text-xl'>Eficiencia</p>
                  <img src={diferencia1} alt="" />
                </div>
              </div>
              <div className='w-[269px] h-[340px] bg-white rounded-lg border-2 border-[#051C46] border-opacity-80'>
                <div className='flex flex-col py-14 gap-7 items-center justify-center'>
                  <p className='text-[#051C46] text-opacity-80 text-xl'>Eficiencia</p>
                  <img src={diferencia1} alt="" />
                </div>
              </div>
              <div className='w-[269px] h-[340px] bg-white rounded-lg border-2 border-[#051C46] border-opacity-80'>
                <div className='flex flex-col py-14 gap-7 items-center justify-center'>
                  <p className='text-[#051C46] text-opacity-80 text-xl'>Eficiencia</p>
                  <img src={diferencia1} alt="" />
                </div>
              </div>
              <div className='w-[269px] h-[340px] bg-white rounded-lg border-2 border-[#051C46] border-opacity-80'>
                <div className='flex flex-col py-14 gap-7 items-center justify-center'>
                  <p className='text-[#051C46] text-opacity-80 text-xl'>Eficiencia</p>
                  <img src={diferencia1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full mt-20'>
        <div className="w-full h-[1150px] bg-[url('./assets/home-bg-section-4.svg')] bg-contain bg-no-repeat">
          <h2>Hola</h2>
        </div>
      </section>
    </div>
  )
}

export default Home
