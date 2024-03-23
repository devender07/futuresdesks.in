

import React, { ReactNode } from 'react';


interface Props {
    id?: string,
    className?: string,
    children?: ReactNode;
}

export const Container = ({ id, className, children }: Props) => {
    return (
        <main id={id} className={`w-full flex items-center ${className}`}>
            {children}
        </main>
    );
}

export const Heading = ({ className, children }: Props) => {
    return (
        <h1 className={`leading-snug lg:leading-tight font-bold ${className}`}>
            {children}
        </h1>
    );
}
export const Content = ({ className, children }: Props) => {
    return (
        <p className={` tracking-wide ${className}`}>
            {children}
        </p>
    );
}
