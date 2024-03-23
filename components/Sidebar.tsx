"use client"
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CSSTransition } from 'react-transition-group';
import { links } from "@/constants/constants"


interface Props {
    className?: string;
}

const HamburgerButton: React.FC<Props> = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen)
    };
    return (
        <>
            <div className={`${className}`} onClick={handleClick}>
                
                {isOpen ?
                    (
                        <div className='hamburger-button'>
                            <span className='close'></span>
                            <span className='close'></span>
                            <span className='close'></span>

                            <style jsx>
                                {`
                                .hamburger-button {
                                    display: flex;
                                    flex-direction: column;
                                    justify-content: space-between;
                                    align-items: flex-end;
                                    width: 30px;
                                    height: 20px;
                                    cursor: pointer;

                                }
                                .close{
                                    width: 30px;
                                    height: 2px;
                                    background-color: black;
                                    transition: 0.3s;
                                }
                                
                                .close:nth-child(2) {
                                    
                                    opacity: 0;
                                }
                                
                                .close:nth-child(1){
                                    width: 30px;
                                    transform: translateY(9px) rotate(45deg);
                                }
                                
                                .close:nth-child(3) {
                                    width: 30px;
                                    transform: translateY(-9px) rotate(-45deg);
                                }
                                `}
                            </style>
                        </div>
                    )
                    :
                    (
                        <div className='hamburger-button'>
                            <span className='bar'></span>
                            <span className='bar'></span>
                            <span className='bar'></span>

                            <style jsx>
                                {`
                                        .hamburger-button {
                                            display: flex;
                                            flex-direction: column;
                                            justify-content: space-between;
                                            align-items: flex-end;
                                            width: 30px;
                                            height: 20px;
                                            cursor: pointer;

                                        }
                                        .bar {
                                            width: 30px;
                                            height: 2px;
                                            background-color: black;
                                            transition: 0.3s;
                                        }
                                        .bar:nth-child(2) {
                                            width: 15px;
                                        }
                                        .bar:nth-child(3) {
                                            width: 5px;
                                        }
                                        `}
                            </style>
                        </div>
                    )}
            </div >

            <CSSTransition
                in={isOpen}
                timeout={200}
                classNames="slide"
                unmountOnExit
            >
                <div className={`sidebar mt-[5rem] fixed top-0 w-full bottom-0 right-0 backdrop-filter backdrop-blur-[4px] lg:hidden `} onClick={handleClick}>
                    <nav className={`w-[350px] fixed right-0 top-0 bottom-0 bg-white`} >
                        <div className="flex flex-col">
                            {links.map((link, index) => (
                                <Link key={index} href={link.link} className='w-full px-10 py-5 border-b-2 border-slate-100 font-semibold hover:text-purple-600' >
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <div className='flex justify-center gap-10 mt-5'>
                            <Link href='https://www.instagram.com/futuredesks_podcast/' className='border p-1 border-slate-200 rounded-lg hover:bg-slate-100'>
                                <Image src={'./instagram.svg'} height={25} width={25} alt='instagram' />
                            </Link>
                            <Link href={"/"} className='border p-1 border-slate-200 rounded-lg hover:bg-slate-100'>
                                <Image src={'./discord.svg'} height={25} width={25} alt='discord' />
                            </Link>
                        </div>
                    </nav>
                </div>
            </CSSTransition>



        </>
    );
};

export default HamburgerButton;
