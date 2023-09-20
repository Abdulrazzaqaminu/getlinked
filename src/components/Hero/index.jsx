import line from '../../assets/icons/line.svg'
import link from '../../assets/icons/chain.svg'
import bang from '../../assets/icons/bang.svg'
import countdown from '../../assets/icons/countdown.svg'
import bulb from '../../assets/icons/bulb.svg'
import man from '../../assets/images/man.png'
import { useMedia } from 'react-use'
import { useNavigate } from 'react-router-dom'

export const Hero = () => {
    const navigate = useNavigate();

    const isMobile = useMedia("(max-width: 768px)");

    return (
        <section className="mt-8 pl-8 md:pl-32 pe-8 md:pe-0 border-b border-borderWhite">
            <div className="w-full pe-0 md:pe-[55px] mb-[29px] md:mb-[58px] flex justify-center md:justify-end ">
                <span
                    className="italic text-base md:text-4xl font-bold flex items-start relative">Igniting a Revolution in HR Innovation
                    <img src={line} alt="line" className='absolute top-full right-[10px]' width={isMobile ? 115 : 253} height={isMobile ? 7 : 11} />
                </span>
            </div>
            <div className="flex flex-col md:flex-row w-fit items-center md:items-start">
                <div className='flex flex-col items-center md:items-start'>
                    <div className='flex flex-col font-clashDisplay font-bold text-[32px] md:text-[80px] mt-[40px] md:mt-[76px] mb-2 items-center md:items-start'>
                        <span className='relative'>
                            <img src={bulb} alt="Bulb Icon" className='absolute top-[-9px] md:top-[-40px] left-[203px] md:left-[510px]' width={isMobile ? 18 : 53} height={isMobile ? 26 : 73} />

                            getlinked Tech
                        </span>
                        <span className='flex items-center'>
                            Hackathon&nbsp; <span className='text-lightPurple'>1.0</span>
                            <img src={link} alt="Chain Icon" width={isMobile ? 32 : 86} height={isMobile ? 32 : 86} />
                            <img src={bang} alt="Bang Icon" width={isMobile ? 22 : 58} height={isMobile ? 22 : 58} />
                        </span>
                    </div>
                    <div className='text-[13px] md:text-xl max-w-[264px] md:max-w-[552px] mb-[24px] md:mb-[41px]'>
                        Participate in getlinked tech Hackathon 2023 stand
                        a chance to win a Big prize
                    </div>
                    <button className='bg-gradient focus:outline-none rounded px-[46px] md:px-[52px] py-[14.5px] md:py-4 transform hover:scale-105 transition-transform duration-300 hover:bg-opacity-90 mb-[14px] md:mb-[77px] w-fit' onClick={() => navigate('/register')}>Register</button>
                    <img src={countdown} alt="Timer Icon" width={285} height={85} />

                </div>
                <div><img src={man} alt="Man wearing smart glasses touching virtual screen" width={828} height={715} /></div>
            </div>
        </section>
    )
}