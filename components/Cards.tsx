import React, { ReactNode } from 'react';
import Image from 'next/image';

interface Props {
    className?:string,
    children?: ReactNode ;
    image?: string;
}

const Cards = ({ children , className ,image }:Props) => {
  return (
    <div className={`flex flex-col lg:flex-row gap-10 rounded-lg  items-center justify-center p-5 ${className}`}>
        {image && <Image src={`${image}`} height={100} width={100} alt='logo' className='h-auto w-auto'/>}
        <div className='h-full flex flex-col justify-center gap-5'>
            {children}
        </div>
    </div>
  )
}


export {Cards,}
