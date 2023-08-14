import pc from '../../assets/pc-service.svg'
import diferencia1 from '../../assets/diferencia_imagen_1.svg'

const Services = () => {
  return (
    <>
      <section className='w-full'>
        <div className="flex justify-center w-full lg:h-[80vh] bg-[url('./assets/Union.svg')] bg-cover bg-no-repeat">
          <div className='max-w-[1440px]'>
            <div className='flex flex-col lg:flex-row mt-8 lg:mt-[65px]'>
              <div className='flex flex-col py-10 m-4'>
                <h2 className='font-sans mb-12 text-3xl sm:text-4xl font-bold text-white'>
                  Servicio de Diseño Web
                </h2>
                <p className='mb-8 mr-9 text-lg text-gray-200 text-justify'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Facere veniam omnis voluptas ratione aliquid tempore aliquam,
                  repellendus numquam amet molestias, exercitationem quasi
                  obcaecati. Libero iusto ipsa est velit mollitia totam. Iste
                  expedita eveniet dolore quibusdam est officiis, nihil
                  voluptatum aspernatur ipsum optio exercitationem excepturi ab
                  at nobis atque adipisci omnis, aperiam eos quae vitae sequi
                </p>
              </div>
              <img src={pc} alt='pc-hero-section' className='ml-10' />
            </div>
          </div>
        </div>
      </section>
      <section className='w-full'>
        <div className='flex justify-center w-full'>
          <div className='max-w-[1440px]'>
            <div className='flex flex-col mt-8 lg:mt-[65px]'>
              <div className='flex flex-col justify-center text-center py-10 m-4'>
                <h2 className='font-sans text-4xl text-[#051C46] font-bold'>
                  Beneficios del diseño web con Devdatep
                </h2>
                <p className='font-sans text-lg py-6'>
                  Razones para adquirir nuestros servicios
                </p>
              </div>
              <div className='grid grid-cols-2 gap-60'>
                <div className='p-7 rounded-[40px] bg-indigo-400 z-10'>
                  <p className='font-sans text-s text-white px-3 py-6 text-justify'>
                    &#10004; Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Voluptas, sunt nisi. Ipsam odio dignissimos deleniti
                    est dolore eveniet accusantium magni, impedit autem earum
                    mollitia magnam sunt aliquam officiis asperiores eaque!
                  </p>
                </div>

                <div className='p-7 rounded-[40px] bg-yellow-400'>
                  <p className='font-sans text-s text-white px-3 py-6 text-justify'>
                    &#10004; Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Voluptas, sunt nisi. Ipsam odio dignissimos deleniti
                    est dolore eveniet accusantium magni, impedit autem earum
                    mollitia magnam sunt aliquam officiis asperiores eaque!
                  </p>
                </div>
                <div className='p-7 rounded-[40px] bg-red-400'>
                  <p className='font-sans text-s text-white px-3 py-6 text-justify'>
                    &#10004; Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Voluptas, sunt nisi. Ipsam odio dignissimos deleniti
                    est dolore eveniet accusantium magni, impedit autem earum
                    mollitia magnam sunt aliquam officiis asperiores eaque!
                  </p>
                </div>
                <div className='p-7 rounded-[40px] bg-blue-400'>
                  <p className='font-sans text-s text-white px-3 py-6 text-justify'>
                    &#10004; Lorem ipsum, dolor sit amet consectetur adipisicing
                    elit. Voluptas, sunt nisi. Ipsam odio dignissimos deleniti
                    est dolore eveniet accusantium magni, impedit autem earum
                    mollitia magnam sunt aliquam officiis asperiores eaque!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full'>
        <div className='flex w-full h-auto lg:h-[700px] mt-20 bg-cover bg-no-repeat '>
          <div className='w-full flex flex-col items-center gap-16 justify-center max-w-[1300px] mx-auto'>
            <div className='flex flex-col gap-5'>
              <h2 className='text-3xl font-bold text-center text-[#051C46]'>
                Algunos de nuestros métodos
              </h2>
              <p className='text-xl sm:text-2xl font-normal text-center text-[#051C46]'>
                Algunos de los métodos que utilizamos para la creacion e
                ideación de nuestros proyectos
              </p>
            </div>
            <div className='flex justify-center items-center flex-wrap gap-6 lg:gap-x-12'>
              <div className='w-4/5 sm:w-1/3 lg:w-[269px] lg:h-[340px] bg-white rounded-lg border-2 border-[#051C46] shadow-lg shadow-gray-500'>
                <div className='flex flex-col py-7 lg:py-14 gap-7 items-center justify-center'>
                  <p className='text-[#051C46] text-xl'>Metodología UX</p>
                  <img src={diferencia1} alt='' />
                </div>
              </div>
              <div className='w-4/5 sm:w-1/3 lg:w-[269px] lg:h-[340px] bg-white rounded-lg border-2 border-[#051C46] shadow-lg shadow-gray-500'>
                <div className='flex flex-col py-7 lg:py-14 gap-7 items-center justify-center'>
                  <p className='text-[#051C46] text-xl'>Design Thinking</p>
                  <img src={diferencia1} alt='' />
                </div>
              </div>
              <div className='w-4/5 sm:w-1/3 lg:w-[269px] lg:h-[340px] bg-white rounded-lg border-2 border-[#051C46] shadow-lg shadow-gray-500'>
                <div className='flex flex-col py-7 lg:py-14 gap-7 items-center justify-center'>
                  <p className='text-[#051C46] text-xl'>Scrum</p>
                  <img src={diferencia1} alt='' />
                </div>
              </div>
              <div className='w-4/5 sm:w-1/3 lg:w-[269px] lg:h-[340px] bg-white rounded-lg border-2 border-[#051C46] shadow-lg shadow-gray-500'>
                <div className='flex flex-col py-7 lg:py-14 gap-7 items-center justify-center'>
                  <p className='text-[#051C46] text-xl'>Research</p>
                  <img src={diferencia1} alt='' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className='w-full'>
        <div className='flex justify-center w-full'>
          <div className='max-w-[1440px]'>
            <div className='flex flex-col mt-8 lg:mt-[65px]'>
              <div className='flex flex-col justify-center text-center py-10 m-4'>
                <h2 className='font-sans text-4xl text-[#051C46] font-bold'>
                  Nuestros Planes
                </h2>
                <p className='font-sans text-lg py-6'>¿Qué te ofrecemos?</p>
              </div>
              <div>
                <div>DINERO</div>
                <h4>Tipo de servicio</h4>
                <ul>
                  <li>1</li>
                  <li>2</li>
                  <li>3</li>
                  <li>4</li>
                </ul>
                <button>MORE INFORMATION</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
