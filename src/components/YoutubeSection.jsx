const YoutubeSection = () => {
  return (
    <section id='saibamais' className="w-full py-10 bg-gray-100 flex flex-col md:flex-row items-center text-center gap-7 px-4">
      <div>
      <h2 className="text-3xl font-bold text-red-600 mb-4">YouTube</h2>
      <p className="max-w-2xl text-gray-700 mb-8">
        Acesse nosso canal no YouTube e tire suas dúvidas sobre os diferentes tipos de aposentadoria. Temos vídeos explicativos e detalhados, abordando desde a aposentadoria por tempo de contribuição até a aposentadoria especial. Se você tem dúvidas sobre qual é a melhor opção para o seu caso, nossos conteúdos vão te ajudar a entender melhor cada tipo e como se planejar para garantir uma aposentadoria tranquila. Não perca! Inscreva-se e fique por dentro de tudo.
      </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
        <iframe
          className="w-full h-56 md:h-64"
          src="https://www.youtube.com/embed/Hx7Hv8zs1u0"
          title="YouTube video 1"
          frameBorder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <iframe
          className="w-full h-56 md:h-64"
          src="https://www.youtube.com/embed/MbWyDwNQdKo"
          title="YouTube video 2"
          frameBorder="10"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default YoutubeSection;