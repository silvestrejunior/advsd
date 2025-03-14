'use client'
import Image from "next/image";

const ButtonsFooter = () => {
    const handleWhatsAppRedirect = () => {
      const numero = "5544999887612"; // Substitua pelo número correto
      const mensagem = encodeURIComponent("Olá, gostaria de mais informações!");
  
      const urlDesktop = `https://web.whatsapp.com/send?phone=${numero}&text=${mensagem}`;
      const urlMobile = `https://wa.me/${numero}?text=${mensagem}`;
  
      const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  
      window.location.href = isMobile ? urlMobile : urlDesktop;
    };
  
    return (
      <div className="flex w-full flex-row items-center justify-center sm:justify-end md:justify-center gap-7">        
      <a
          href="https://www.google.com/maps/search/?api=1&query=Torre+ll+-+Av.+Jo%C3%A3o+Paulino+Vieira+Filho,+625+-+Sala+708+-+Zona+7,+Maring%C3%A1+-+PR,+87020-015"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:underline"
        >
                      <Image
                        aria-hidden
                        src="/google-maps_355980.png"
                        alt="Google Maps Icone"
                        width={50}
                        height={50}
                      />
        </a>
        <a
          href="https://www.instagram.com/santanadaufenbach/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-pink-400 hover:underline"
        >
           <Image
              aria-hidden
              src="/instagram_4138124.png"
              alt="Instagram Icone"
              width={60}
              height={60}
            />
        </a>
        <button
          onClick={handleWhatsAppRedirect}
          target="_blank"
        >
         <Image
              aria-hidden
              src="/whatsapp_733585.png"
              alt="Whatsapp Icone"
              width={50}
              height={50}
            />
        </button>
      </div>
    );
  };
  
  export default ButtonsFooter;
  