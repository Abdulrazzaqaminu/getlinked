import { useState } from 'react';
import logo from '../../assets/icons/getlinked.svg'
import navIcon from '../../assets/icons/nav.svg'
import close from '../../assets/icons/close.svg'
import { useMedia } from 'react-use';
import { useNavigate } from 'react-router-dom';

export const Nav = () => {
    const navigate = useNavigate();
    const isMobile = useMedia("(max-width: 768px)");

    const [toggle, setToggle] = useState(false);

    const navLinks = [
        { id: "timeline", name: "Timeline", isRoute: false },
        { id: "overview", name: "Overview", isRoute: false },
        { id: "faqs", name: "FAQs", isRoute: false },
        { id: "contact", name: "Contact", isRoute: true },
    ]
    return (
        <nav className={`pt-[33.92px] md:pt-[67px] pb-[29.92px] px-12 md:px-32 flex justify-between items-center backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-borderWhite `}>
            <img
                src={logo}
                alt="Get Linked Logo"
                className={`cursor-pointer ${isMobile && toggle && 'opacity-0'}`} width={isMobile ? 100 : 171}
                height={44}
            />

            {isMobile ? ( // Mobile Nav
                <div className="md:hidden flex items-center">
                    <img
                        src={toggle ? close : navIcon}
                        onClick={() => setToggle(!toggle)}
                        className={`${toggle ? "text-primary" : "text-white"
                            } md:hidden float-right`}
                    />

                    {toggle && (
                        <ul className="md:hidden absolute right-0 top-[57px] py-[63px] w-full pl-[47px] bg-darkPurple">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`text-white font-medium ${index === navLinks.length - 1 ? "" : "mb-5"
                                        }`}
                                    onClick={() => {
                                        setToggle(false);
                                    }}
                                >
                                    <a
                                        href={`${nav.isRoute ? '/' : '#'}${nav.id}`}
                                        className=" hover:bg-gray-200 transition-all duration-300"
                                    >
                                        {nav.name}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <button
                                    className='text-white bg-gradient focus:outline-none rounded px-[52px] py-4 transform hover:scale-105 transition-transform duration-300 hover:bg-opacity-90 mt-[28.96px]'
                                    onClick={() => navigate('/register')}
                                >
                                    Register
                                </button>
                            </li>
                        </ul>
                    )}
                </div>
            ) : (
                // Desktop Nav
                <ul className='list-none sm:flex hidden justify-end items-center flex-1 mr-[120.96px]'>
                    {navLinks.map((nav, index) => {
                        return (
                            <li
                                key={nav.id}
                                className={`font-montserrat cursor-pointer ${index === navLinks.length - 1 ? "" : "pr-14"
                                    }`}
                            >
                                <a
                                    href={`${nav.isRoute ? '/' : '#'}${nav.id}`}
                                    className="transition-all duration-300 border-b-2 border-transparent hover:border-primary hover:border-b-2 hover:pb-1"
                                >
                                    {nav.name}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            )}

            {!isMobile && (
                <button
                    className='text-white bg-gradient focus:outline-none rounded px-[52px] py-4 transform hover:scale-105 transition-transform duration-300 hover:bg-opacity-90'
                    onClick={() => navigate('/register')}
                >
                    Register
                </button>
            )}



        </nav>)
}