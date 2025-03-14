import Image from 'next/image';
import React from 'react';

const About = ({text, title}) => {
    return (
    <div id='sobre' className='flex flex-col md:flex-row w-full gap-7 items-center justify-center'>
      <div className=' items-center justify-center bg-[#003B6A] w-[400px] h-[400px] rounded-full hidden sm:flex'>
      <Image src='/logos-santana-daufenbach-09.png' alt='logo Santana e Daufenbach Adv' width={330} height={120} className='object-cover mb-4' />
      </div>

      <div className='flex items-center justify-center bg-[#003B6A] w-[300px] h-[300px] rounded-full sm:hidden'>
        <Image src='/logos-santana-daufenbach-09.png' alt='logo Santana e Daufenbach Adv' width={220} height={250} className='object-cover mb-4' />
      </div>
      <div className='w-full md:w-1/2 p-10'>

        <h2 className='text-3xl text-center md:text-left mb-5'>{title}</h2>
        <p>"Nossa equipe está pronta para oferecer todo o suporte necessário para as demandas previdenciárias. Entre em contato para agendar uma consulta e dar início ao processo de resolução do seu caso."<br/>
        <br/>
          O atendimento é a parte principal do processo previdenciário, nesse momento todos os detalhes precisam ser minuciosamente checados, essa pode ser a diferença entre a concessão ou não do seu benefício.<br/>
          <br/>
          Todo processo previdenciário precisa estar muito bem documentado. Talvez a fase mais trabalhosa de todo processo mas, indispensável. Não queremos entrar num litígio sem estar devidamente amparados.<br/>
          <br/>
          Após a organização documental, chegou a hora de fazer o requerimento do direito. Seja na via administrativa ou judicial, a nossa equipe está preparada e confiante que o seu direito será garantido.</p>
      </div>

    </div>

    );
  };

export default About;
