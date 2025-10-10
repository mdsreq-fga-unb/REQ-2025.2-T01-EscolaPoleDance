import joemalAbdon from "../../assets/img/about/joemalAbdon.jpg";

export default function AboutSection() {
  return (
    <section id="about" className="bg-gradient-to-b from-purple-50 via-purple-50 via-purple-150 to-purple-200 flex flex-col lg:flex-row px-16 pl-[80px] pr-[90px] pt-[60px] pb-[75px]" style={{backgroundImage: 'linear-gradient(to bottom, #faf5ff 0%, #faf5ff 55%, #e9d5ff 100%)'}}>
      <div className="lg:hidden mb-6 text-start">
        <h2 className="text-purple-900 text-[2.75rem] font-bold font-['Montserrat'] leading-[50px]">
          Prazer,
        </h2>
        <h2 className="text-purple-900 text-[2.75rem] font-medium font-['Montserrat'] leading-[50px]">
          Joelma Abdon.
        </h2>
      </div>
      <img 
        src={joemalAbdon} 
        alt="Joelma Abdon" 
        className="w-[500px] h-[650px] lg:w-[500px] lg:h-[650px] sm:w-[400px] sm:h-[520px] w-[350px] h-[455px] rounded-3xl border border-purple-100 mx-auto lg:mx-0"
      />
      <div className="lg:ml-8 mt-6 lg:mt-0">
        <div className="hidden lg:block">
          <h2 className="text-purple-900 text-[2.75rem] font-bold font-['Montserrat'] leading-[50px]">
            Prazer,
          </h2>
          <h2 className="text-purple-900 text-[2.75rem] font-medium font-['Montserrat'] leading-[50px]">
            Joelma Abdon.
          </h2>
        </div>
        <div className="mt-6 space-y-10">
          <p className="text-purple-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
            Olá! Sou fundadora da <span className="font-semibold">Lady's Escola de Pole Dance</span>.
          </p>
          <p className="text-purple-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
            Sou profissional de Educação Física (<span className="text-purple-500 underline">nº -016176 G/DF</span>) 
            e instrutora de Pole Dance certificada há mais de 9 anos, e ao longo dessa trajetória ajudei dezenas de mulheres a descobrirem sua força, 
            confiança e feminilidade através do pole dance.
          </p>
          <p className="text-purple-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
            <span className="text-fuchsia-950">Como professora, mãe e mulher, acredito na dança e na sua conexão com o corpo e a mente promovendo a saúde,
               autoestima e empoderamento. O pole, mais do que prática física, é uma paixão que tranborda arte, liberdade e transformação.</span>
          </p>
          <p className="text-purple-950 text-[1.125rem] font-medium font-['Montserrat'] leading-8">
            Aqui na Lady's, cada aula é pensada com carinho para acolher, motivar e inspirar. Quero que você descubra o mesmo brilho que eu encontrei quando subi na barra pela primeira vez. ✨
          </p>
        </div>
      </div>
    </section>
  );
}