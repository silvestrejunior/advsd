import About from "@/components/About";
import ButtonsFooter from "@/components/ButtonsFooter";
import Carousel from "@/components/Carroucel";
import ContainerCards from "@/components/ConteinerCards";
import Header from "@/components/Header";
import Imagem1 from "@/components/imagens/Imagem1";
import YoutubeSection from "@/components/YoutubeSection";
import Image from "next/image";

export default function Home() {

  const items = [
    {
      description: 'O direito de aposentadoria das Pessoas com Deficiência foi um dos únicos que não sofreram mudanças com a reforma da previdência, mantendo-se inalterado mesmo após diversas alterações no sistema. As regras específicas continuam valendo, garantindo critérios diferenciados de tempo de contribuição e idade mínima. Além disso, a legislação assegura que a avaliação da deficiência seja feita por critérios médicos e sociais, garantindo um tratamento mais justo. Por isso, é essencial que os segurados conheçam todas as regras para facilitar o planejamento da aposentadoria e garantir um benefício mais justo.',
      src: '/pcdcard.png',
      title: 'PCD'
    },
    {
      description: 'Profissionais da área da saúde, como enfermeiros, técnicos e auxiliares de enfermagem, médicos, dentistas e farmacêuticos, possuem regras específicas para aposentadoria. Em muitos casos, a atividade exercida pode ser considerada especial, reduzindo o tempo necessário para se aposentar. Além disso, fatores como exposição a agentes nocivos e a carga horária de trabalho podem influenciar nos requisitos. Por isso, é essencial buscar orientação especializada para entender os direitos de cada categoria e garantir um planejamento adequado para a aposentadoria.',
      src: '/medical-card.png',
      title: 'Área da Saúde'
    },
    {
      description: 'Professores têm direitos específicos de aposentadoria, com regras diferenciadas em relação ao tempo de contribuição. Em muitos casos, há redução no tempo exigido devido à natureza da profissão, reconhecendo o impacto da atividade no dia a dia. No entanto, é fundamental estar atento às mudanças na legislação para não perder nenhum direito. Além disso, compreender os requisitos e as possíveis vantagens pode garantir um planejamento mais seguro e tranquilo. Buscar orientação especializada ajuda a evitar erros e assegurar todos os benefícios previstos.',
      src: '/professorcard.png',
      title: 'Professores'
    },
    {
      description: 'Os servidores públicos podem estar vinculados a regimes de previdência próprios, o que garante regras e direitos diferenciados em relação ao regime geral. Dependendo do tempo de serviço e da data de ingresso, os critérios para aposentadoria podem variar, exigindo atenção às normas vigentes. Além disso, fatores como transição entre regimes e regras específicas para determinadas carreiras podem impactar os requisitos. Por isso, conhecer bem seus direitos é essencial para garantir uma aposentadoria segura e sem surpresas.',
      src: '/servidorpublicocard.png',
      title: 'Servidor Público'
    },
    {
      description: 'Pessoas que viveram no meio rural antes de 1991 podem averbar esse período para aumentar o tempo de contribuição e facilitar a aposentadoria. Além disso, trabalhadores que ainda exercem atividades rurais seguem regras diferenciadas, muitas vezes com exigências reduzidas em comparação ao regime urbano. A comprovação do tempo de trabalho no campo é fundamental para garantir esse direito, sendo necessário reunir documentos e testemunhos que atestem a atividade. Por isso, é essencial estar atento às exigências legais e buscar orientação para não perder nenhum benefício.',
      src: '/ruralcard.png',
      title: 'Trabalhador Rural'
    },
    {
      description: 'Quem trabalhou exposto a agentes nocivos tem direito ao chamado tempo especial, que reduz o tempo necessário para aposentadoria. Esse benefício reconhece os riscos à saúde e garante condições diferenciadas para o trabalhador. Além da aposentadoria especial, também é possível converter esse período para aumentar o tempo total de contribuição, facilitando o acesso a outros tipos de aposentadoria. A comprovação da exposição é essencial, sendo necessário apresentar documentos como PPP e laudos técnicos. Por isso, nunca deixe essa possibilidade passar e busque orientação para garantir seus direitos.',
      src: '/especialcard.png',
      title: 'Aposentadoria Especial'
    }
  ];
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen  gap-16 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
        <Carousel />
        <ContainerCards items={items} />
        <About
          title='Santana Daufenbach Advocacia Previdenciária'
          text='"Nossa equipe está pronta para oferecer todo o suporte necessário para as demandas previdenciárias. Entre em contato para agendar uma consulta e dar início ao processo de resolução do seu caso.."
          O atendimento é a parte principal do processo previdenciário, nesse momento todos os detalhes precisam ser minuciosamente checados, essa pode ser a diferença entre a concessão ou não do seu benefício.
          Todo processo previdenciário precisa estar muito bem documentado. Talvez a fase mais trabalhosa de todo processo mas, indispensável. Não queremos entrar num litígio sem estar devidamente amparados.
          Após a organização documental, chegou a hora de fazer o requerimento do direito. Seja na via administrativa ou judicial, a nossa equipe está preparada e confiante que o seu direito será garantido.'
        />
        <YoutubeSection />

      </main>
      <footer id="contato" className="row-start-3 flex gap-6 flex-col sm:flex-row-reverse items-center justify-center p-7 w-full bg-[#ABABAB]">
        <div className="hidden md:flex flex-col text-gray-800 ">
          <span className="text-xl">Contato</span>
          <p>(44) 3026-4953</p>
          <p>(44) 99988-7612</p>
          <p>joao@advocaciasd.com.br</p>
        </div>
        <ButtonsFooter />
        <Image
          aria-hidden
          src="/logos-santana-daufenbach-07.png"
          alt="Logo ADV Advocacia"
          width={120}
          height={120}
        />

      </footer >
    </div >
  );
}
