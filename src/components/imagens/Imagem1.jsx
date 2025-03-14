import Image from 'next/image';
import React from 'react';

const Imagem1 = () => {
    return (
        <div className="relative bg-[#1268B3] w-full h-full flex justify-end md:justify-between items-center rounded-3xl">
            {/* Texto para desktop */}
            <div className="hidden md:flex flex-col gap-7">
                <h2 className="text-white text-xl md:text-3xl text-center font-bold px-4">
                    A aposentadoria pode estar mais perto do que você imagina.
                </h2>
                <p className="text-white text-lg text-center px-4">
                    Em alguns casos, a aposentadoria compulsória tem benefícios que podem chegar a R$2.500,00* por mês. 
                    Entenda mais e saiba se você tem esse direito.
                </p>
            </div>

            {/* Imagem */}
            <Image
                src={'/Group 32.png'}
                width={280}
                height={100}
                className="h-full object-left"
                alt="Imagem homem negro com logo da advocacia"
            />

            {/* Texto sobre a imagem no mobile */}
            <div className="absolute inset-0 flex flex-col items-start justify-start sm:items-center sm:justify-center  text-center text-white p-4 md:hidden">
                <h2 className="text-xl font-bold w-1/2 p-">
                    A aposentadoria pode estar mais perto do que você imagina.
                </h2>
                <p className="text-sm mt-2 hidden sm:flex">
                    Em alguns casos, a aposentadoria compulsória tem benefícios que podem chegar a R$2.500,00* por mês. 
                    Entenda mais e saiba se você tem esse direito.
                </p>
            </div>
        </div>
    );
};

export default Imagem1;
