"use client"
import { ReactNode, MouseEvent } from "react"

interface Props {
    children?: ReactNode;
    className?: string;
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

const WhatsAppButton = ({ children, className }: Props) => {

    const whatsapp = () => {
        const url = `https://api.whatsapp.com/send?phone=${9045436494}`;
        window.open(url, "_blank");
    }
    return (
        <button
            className={` bg-blue-600 hover:bg-blue-700 py-2 px-3 rounded-lg text-white font-semibold ${className}`}
            onClick={whatsapp}>
            {children}
        </button>
    )
}

const InstagramButton = ({ children, className, onClick }: Props) => {
    const instagram = ()=>{
        const url = `https://www.instagram.com/futuredesks_podcast/`;
        window.open(url, "_blank");
    }

    return (
        <button
            className={` bg-blue-600 hover:bg-blue-700 py-3 px-4 rounded-lg text-white font-semibold ${className}`}
            onClick={instagram}
        >
            {children}
        </button>
    );
};
export {
        WhatsAppButton,
        InstagramButton,
        }
