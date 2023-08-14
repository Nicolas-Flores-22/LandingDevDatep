import pc from '../../assets/pc.svg'
import homeSection2 from '../../assets/home_section_2.svg'
import diferencia1 from '../../assets/diferencia_imagen_1.svg'
import useObserver from '../../hooks/useObserver'
import hombre from '../../assets/home-img-section-4.svg'
import contenido from '../../assets/home-cont-section-4.svg'
import { useEffect, useState } from 'react'

import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
// import required modules
import { Pagination, Navigation } from 'swiper/modules'

const Home = () => {
  const { observer, setElements, entries } = useObserver({
    threshold: 0.75,
    root: null
  })

  useEffect(() => {
    const sections = document.querySelectorAll('.lazy')
    const sectionsArray: Element[] = Array.from(sections)
    setElements(sectionsArray)
  }, [setElements])

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const lazy = entry.target as HTMLImageElement
        lazy.src = lazy.dataset.src!
        lazy.classList.add('translate-y-0', 'opacity-100', 'transition', 'duration-1000', 'ease-in-out')
        lazy.classList.remove('lazy', 'opacity-0')
        observer.unobserve(lazy)
      }
    })
  }, [entries, observer])

  const [slidesPerView, setSlidesPerView] = useState<number>(3)

  useEffect(() => {
    function handleResize () {
      const windowWidth = window.innerWidth
      if (windowWidth >= 1024) {
        setSlidesPerView(3)
      } else if (windowWidth >= 628) {
        setSlidesPerView(2)
      } else {
        setSlidesPerView(1)
      }
    }

    handleResize() // Llamamos a la función para que ajuste en la carga inicial

    window.addEventListener('resize', handleResize) // Agregamos el listener para cambios de tamaño de ventana

    return () => {
      window.removeEventListener('resize', handleResize)// Limpiamos el listener al desmontar el componente
    }
  }, [])

  return (
    <div>
      <section className='w-full lazy'>
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
              <img src={pc} alt="pc-hero-section" />
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
          <div className='lazy opacity-0'>
            <img src={homeSection2} alt="img_section_2" />
          </div>
        </div>
      </section>
      <section className='w-full lazy opacity-0'>
        <div className="flex w-full h-auto lg:h-[700px] mt-20 bg-[url('./assets/diferencia_background.svg')] bg-cover bg-no-repeat ">
          <div className='w-full flex flex-col items-center gap-16 justify-center max-w-[1300px] mx-auto'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-3xl font-bold text-center text-[#051C46] opacity-80'>¿Qué nos diferencia?</h2>
              <p className='text-xl sm:text-2xl font-normal text-center text-[#051C46] opacity-80'>Devdatep se rige en 4 pilares principales</p>
            </div>
            <div className='flex justify-center items-center flex-wrap gap-6 lg:gap-x-12'>
              <div className='w-4/5 sm:w-1/3 lg:w-[269px] lg:h-[340px] bg-white rounded-lg border-2 border-[#051C46] border-opacity-80'>
                <div className='flex flex-col py-7 lg:py-14 gap-7 items-center justify-center'>
                  <p className='text-[#051C46] text-opacity-80 text-xl'>Eficiencia</p>
                  <img src={diferencia1} alt="" />
                </div>
              </div>
              <div className='w-4/5 sm:w-1/3 lg:w-[269px] lg:h-[340px] bg-white rounded-lg border-2 border-[#051C46] border-opacity-80'>
                <div className='flex flex-col py-7 lg:py-14 gap-7 items-center justify-center'>
                  <p className='text-[#051C46] text-opacity-80 text-xl'>Eficiencia</p>
                  <img src={diferencia1} alt="" />
                </div>
              </div>
              <div className='w-4/5 sm:w-1/3 lg:w-[269px] lg:h-[340px] bg-white rounded-lg border-2 border-[#051C46] border-opacity-80'>
                <div className='flex flex-col py-7 lg:py-14 gap-7 items-center justify-center'>
                  <p className='text-[#051C46] text-opacity-80 text-xl'>Eficiencia</p>
                  <img src={diferencia1} alt="" />
                </div>
              </div>
              <div className='w-4/5 sm:w-1/3 lg:w-[269px] lg:h-[340px] bg-white rounded-lg border-2 border-[#051C46] border-opacity-80'>
                <div className='flex flex-col py-7 lg:py-14 gap-7 items-center justify-center'>
                  <p className='text-[#051C46] text-opacity-80 text-xl'>Eficiencia</p>
                  <img src={diferencia1} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full lazy opacity-0 mt-20'>
        <div className="w-full bg-[url('./assets/home-bg-section-4.svg')] bg-cover bg-no-repeat">
          <div className='flex max-w-[1440px] pb-10 items-center justify-center mx-auto'>
            <div className='hidden lg:block'>
              <img src={hombre} alt="hombre_section_4" className='w-full h-full lg:w-[577px] lg:h-[700px]'/>
            </div>
            <div className='flex flex-col lg:max-h-[700px]'>
              <div className='flex flex-col w-full max-w-[771px] text-center'>
                <h3 className='text-4xl font-bold leading-9 text-[#2B426E] pb-10'>Servicios completamente personalizado</h3>
                <p className='text-2xl leading-9 text-[#535353] pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorem necessitatibus suscipit a maiores consequuntur tempora illo quis mollitia quo quia adipisci culpa in, ullam, quos odio quasi saepe maxime.</p>
              </div>
              <img src={contenido} alt="contenido_section_4" className='h-auto max-h-[500px]'/>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='flex flex-col mx-auto w-[90%] max-w-[1240px]'>
          <div className='flex flex-col items-center justify-center'>
            <h3 className='text-4xl font-bold leading-9 text-[#2B426E] pb-10'>Clientes Satisfechos</h3>
            <p className='text-2xl leading-9 text-[#535353] pb-10'>Algunos testimonios de nuestros clientes</p>
          </div>
          {/* <div className='flex w-full max-w-[1240px] h-[486px] relative'>
            <div className='absolute lg:w-[300px] h-[385.85px] rounded-2xl bg-[#F0C330] top-[0px]'></div>
            <div className='absolute lg:w-[300px] h-[385.85px] rounded-2xl bg-[#DA867D] top-[50px] left-[236px] z-10'></div>
            <div className='absolute lg:w-[300px] h-[385.85px] rounded-2xl bg-[#69AEF8] top-[100px] left-[470px] z-20'></div>
            <div className='absolute lg:w-[300px] h-[385.85px] rounded-2xl bg-[#DA867D] top-[50px] right-[236px] z-10'></div>
            <div className='absolute lg:w-[300px] h-[385.85px] rounded-2xl bg-[#F0C330] top-[0px] right-[0px]'></div>
          </div> */}
          <Swiper
            slidesPerView={slidesPerView}
            centeredSlides={true}
            spaceBetween={0}
            grabCursor={true}
            loop={true}
            pagination={{
              clickable: true
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper flex w-full"
          >
            <SwiperSlide>
              <div className='mx-auto w-[255px] lg:w-[300px] h-[386px] rounded-3xl'>
                <div className='bg-blue-500 h-[193px] rounded-tl-3xl rounded-bl-3xl rounded-tr-3xl'>

                </div>
                <div className='bg-green-500 h-[193px]'>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste neque, nam, culpa officiis vitae quia, quas voluptatum voluptatem quibusdam quos v
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide><div className='mx-auto w-[255px] lg:w-[300px] h-[385.85px] rounded-2xl bg-[#DA867D]'></div></SwiperSlide>
            <SwiperSlide><div className='mx-auto w-[255px] lg:w-[300px] h-[385.85px] rounded-2xl bg-[#F0C330]'></div></SwiperSlide>
            <SwiperSlide><div className='mx-auto w-[255px] lg:w-[300px] h-[385.85px] rounded-2xl bg-[#DA867D]'></div></SwiperSlide>
            <SwiperSlide><div className='mx-auto w-[255px] lg:w-[300px] h-[385.85px] rounded-2xl bg-[#F0C330]'></div></SwiperSlide>
            <SwiperSlide><div className='mx-auto w-[255px] last:lg:w-[300px] h-[385.85px] rounded-2xl bg-[#DA867D]'></div></SwiperSlide>
          </Swiper>
        </div>
        <div>
        </div>
      </section>
    </div>
  )
}

export default Home
