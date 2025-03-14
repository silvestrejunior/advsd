import Image from 'next/image';
import React from 'react';

const Imagem2 = () => {
    return (
        <div className="relative bg-[#1268B3] w-full h-full flex justify-start md:justify-between items-center rounded-3xl">
            {/* Texto para desktop */}
            <Image
                src={'/Group 15 logo.png'}
                width={320}
                height={90}
                className="h-full object-right ml-2 mb-3"
                alt="Imagem homem negro com logo da advocacia"
            />
            <div className="hidden md:flex flex-col gap-7">
                <h2 className="text-white text-xl md:text-3xl text-center font-bold px-4">
                    Sua melhor fase começa agora!
                </h2>
                <p className="text-white text-lg text-center px-4">
                    Saiba tudo sobre aposentadoria: seus direitos, benefícios
                    entre outros assuntos. Não perca tempo, acesse nosso site
                    e comece agora mesmo aproveitar a melhor fase da vida.
                </p>
            </div>

            {/* Imagem */}

            {/* Texto sobre a imagem no mobile */}
            <div className="absolute inset-0 flex flex-col items-start justify-start sm:items-center sm:justify-center  text-center text-white p-4 md:hidden">
                <h2 className="text-xl font-bold w-1/2 p-">
                    Sua melhor fase começa agora!
                </h2>
                <p className="text-sm mt-2">
                    Saiba tudo sobre aposentadoria: seus direitos, benefícios
                    entre outros assuntos. Não perca tempo, acesse nosso site
                    e comece agora mesmo aproveitar a melhor fase da vida.
                </p>
            </div>
        </div>
    );
};

export default Imagem2;
