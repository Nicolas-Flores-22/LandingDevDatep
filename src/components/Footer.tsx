import { BsFillPlayCircleFill, BsFacebook, BsTwitter, BsTelephone } from 'react-icons/bs'
import { ImLinkedin } from 'react-icons/im'
import { AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <footer className='w-full'>
      <div className='w-full max-w-[1441px] h-96 mb-10 flex items-center justify-center mx-auto'>
        <div className='border-[#051C46] border-r-[1px] border-opacity-80 w-2/4'>
            <div className='flex items-start flex-col mx-auto p-10 gap-8 w-2/4 max-w-2/4'>
                <p className='text-[#051C46] text-opacity-80 font-semibold text-xl' >Diseño y desarrollo web</p>
                <p className='text-[#051C46] text-opacity-80 font-semibold text-xl' >Desarrollo de software</p>
                <p className='text-[#051C46] text-opacity-80 font-semibold text-xl' >Siguenos en </p>
                <div className='flex gap-6'>
                    <BsFillPlayCircleFill size={40} color='#051C46' className='opacity-80 rounded-full'/>
                    <BsTwitter size={40} color='white' className='opacity-80 bg-[#051C46] rounded-full p-[6px]'/>
                    <BsFacebook size={40} color='#051C46' className='opacity-80'/>
                    <ImLinkedin size={40} color='#051C46' className='opacity-80 rounded-full'/>
                </div>
            </div>
        </div>
        <div className='w-2/4'>
            <div className='flex flex-col gap-10 mx-auto w-2/5 max-w-2/4'>
                <div className='flex flex-col gap-3 text-[#051C46] text-opacity-80 text-xl'>
                    <p className='flex items-start font-semibold'>Contactanos</p>
                    <p className='flex items-center'>
                        <BsTelephone size={25}/>
                        <span className='ml-5'>+51 917061014</span>
                    </p>
                    <p className='flex items-center'>
                        <AiOutlineMail size={25}/>
                        <span className='ml-5'>devdatep@gmail.com</span>
                    </p>
                </div>
                <div className='flex flex-col gap-3 text-[#051C46] text-opacity-80 text-xl'>
                    <p className='flex items-start font-semibold'>Devdatep Consulting E.I.R.L</p>
                    <p className='flex items-center'>
                        <span>RUC : 20609480905</span>
                    </p>
                    <p className='flex items-center'>
                        <span>Lima - Peru</span>
                    </p>
                </div>
            </div>
        </div>
      </div>
      <div className="flex items-center bg-[#051C46] opacity-80 text-white justify-center h-[55px]">
        <p>Copyright © 2023 | Devdatep Consulting</p>
      </div>
    </footer>
  )
}

export default Footer
