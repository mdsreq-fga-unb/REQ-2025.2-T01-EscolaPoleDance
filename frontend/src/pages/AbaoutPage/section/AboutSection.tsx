import historia from "@/assets/img/about/historia.svg";
import missao from "@/assets/img/about/missao.svg";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-fuchsia-pink-50 via-fuchsia-pink-100 via-fuchsia-pink-150 to-fuchsia-pink-200 flex flex-col lg:flex-row px-6 md:px-8 lg:px-[80px] pt-24 md:pt-[150px] pb-24 md:pb-[65px]"
    >
      <div className="mx-auto w-full max-w-[1200px] bg-fuchsia-pink-50 rounded-2xl shadow-sm">
        <div className="px-6 md:px-10 py-8 md:py-10">
          <div className="px-6 md:px-10 py-8 md:py-10 flex flex-col lg:flex-row">
            <img
              src={historia}
              alt=" "
              className="rounded-3xl mx-auto lg:mx-0"
            />
            <div className="lg:ml-8 lg:mt-0 max-w-2xl">
              <div>
                <h2 className="text-fuchsia-pink-900 text-[2.75rem] font-medium font-['Montserrat'] leading-[50px]">
                  Nossa Historia
                </h2>
              </div>
              <div className="mt-6 space-y-6">
                <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
                  Nossa história começa com uma paixão individual e um sonho de
                  construir uma comunidade forte.
                </p>
                <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
                  Tudo teve início com <b>Joelma Abdon</b>, nossa professora e
                  proprietária. Após se apaixonar pelo Pole Dance, ela percebeu
                  que havia uma lacuna na região: faltavam estúdios
                  especializados que oferecessem um ensino profissional e
                  acessível, especialmente aqui no <b>Gama</b>.
                </p>
                <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
                  Em 2019, o sonho se tornou realidade. Joelma Abdon abriu as
                  portas da Lady's Escola de Pole Dance, tornando-a o primeiro e
                  principal estúdio focado em Pole Dance na região. Desde o
                  primeiro dia, nosso objetivo foi claro:{" "}
                  <b>levar o Pole Dance para a comunidade local</b>,
                  desmistificando a modalidade e mostrando que ela é para todos.
                </p>
                <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
                  Com aulas ministradas pela própria fundadora, cada aluna
                  recebe atenção personalizada e um acompanhamento dedicado,
                  criando um ambiente familiar e de suporte mútuo. Hoje, somos
                  um ponto de referência para quem busca mais do que apenas
                  fitness, mas uma verdadeira transformação em sua vida e na sua
                  relação com o próprio corpo. Nosso orgulho é ser do Gama e
                  treinar a próxima geração de atletas e artistas da região.
                </p>
              </div>
            </div>
          </div>
          <div className="px-6 md:px-10 py-8 md:py-10 flex flex-col lg:flex-row">
            <div className="lg:ml-8 mt-6 lg:mt-0 max-w-2xl">
              <div>
                <h2 className="text-fuchsia-pink-900 text-[2.75rem] font-medium font-['Montserrat'] leading-[50px]">
                  Nossa Missao
                </h2>
              </div>
              <div className="mt-6 space-y-10">
                <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
                  Nossa missão é simples e profunda:{" "}
                  <b>
                    Transformar vidas através da arte e do esporte do Pole
                    Dance, promovendo força, autoconfiança e comunidade.
                  </b>
                </p>
                <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
                  Acreditamos que o Pole Dance é mais do que apenas um exercício
                  físico; é uma ferramenta poderosa de autoexpressão e
                  empoderamento.
                </p>
                <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
                  Comprometemo-nos a oferecer um ambiente seguro, acolhedor e
                  inclusivo no Gama, onde cada aluna é incentivada a descobrir
                  sua força interior, desafiar seus limites e celebrar cada
                  conquista, independentemente de sua idade, corpo ou nível de
                  experiência.
                </p>
                <p className="text-fuchsia-pink-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
                  Nosso foco é no crescimento pessoal, no respeito mútuo e na
                  excelência técnica.
                </p>
              </div>
            </div>
            <img
              src={missao}
              alt=" "
              className="lg:ml-8 rounded-3xl mx-auto lg:mx-0"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

