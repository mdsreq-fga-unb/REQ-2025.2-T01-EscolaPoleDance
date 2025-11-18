export type DocKey = "terms" | "privacy" | "cookies";

const legalDocs: Record<DocKey, { title: string; date: string; content: string }> = {
  terms: {
    title: "Termos de Serviço e Uso",
    date: "Última Atualização: 18 de Novembro de 2025",
    content: `
      <p>Bem-vindo(a) ao nosso serviço. Ao utilizar nossa plataforma, você concorda com os seguintes termos e condições.</p>

      <h2 id="clausula-1">1. Aceitação dos Termos</h2>
      <p>A utilização do Serviço implica a aceitação integral de todas as cláusulas e condições estabelecidas neste documento. Caso não concorde, por favor, não utilize a plataforma.</p>

      <h3 id="clausula-1-1">1.1. Modificações</h3>
      <p>Reservamo-nos o direito de modificar estes Termos a qualquer momento. Notificaremos os usuários sobre mudanças significativas via e-mail ou aviso na plataforma.</p>

      <h2 id="clausula-2">2. Uso do Serviço</h2>
      <p>O usuário concorda em utilizar o Serviço de maneira ética e legal, respeitando os direitos de terceiros e as leis vigentes.</p>

      <h3 id="clausula-2-1">2.1. Conta do Usuário</h3>
      <ul>
        <li>É proibido o compartilhamento de credenciais de acesso.</li>
        <li>O usuário é responsável por manter a confidencialidade de sua senha.</li>
        <li>Notifique-nos imediatamente sobre qualquer uso não autorizado de sua conta.</li>
      </ul>

      <h2 id="clausula-3">3. Propriedade Intelectual</h2>
      <p>Todo o conteúdo, design e propriedade intelectual do Serviço são de nossa exclusiva propriedade. É vedada a cópia ou distribuição sem autorização expressa.</p>

      <h2 id="clausula-4">4. Limitação de Responsabilidade</h2>
      <p>Não nos responsabilizamos por perdas ou danos decorrentes da utilização indevida do Serviço ou por falhas de terceiros.</p>
    `,
  },
  privacy: {
    title: "Política de Privacidade",
    date: "Última Atualização: 18 de Novembro de 2025",
    content: `
      <p>Sua privacidade é importante para nós. Esta política explica quais informações coletamos e como as utilizamos.</p>

      <h2 id="secao-1">1. Informações Coletadas</h2>
      <p>Coletamos informações para fornecer e melhorar nosso Serviço.</p>

      <h3 id="secao-1-1">1.1. Dados Pessoais</h3>
      <p>Incluem nome, endereço de e-mail e dados de pagamento. São fornecidos diretamente por você no cadastro.</p>

      <h3 id="secao-1-2">1.2. Dados de Uso</h3>
      <p>Informações sobre como o Serviço é acessado e utilizado (Ex: endereço IP, tipo de navegador, páginas visitadas).</p>

      <h2 id="secao-2">2. Como Usamos Seus Dados</h2>
      <p>Utilizamos os dados coletados para:</p>
      <ul>
        <li>Fornecer e manter o Serviço.</li>
        <li>Gerenciar sua conta e fornecer suporte.</li>
        <li>Enviar comunicações de marketing (com seu consentimento).</li>
        <li>Monitorar o uso e melhorar a plataforma.</li>
      </ul>

      <h2 id="secao-3">3. Segurança dos Dados</h2>
      <p>Empregamos medidas de segurança para proteger seus Dados Pessoais, mas lembramos que nenhum método de transmissão pela Internet é 100% seguro.</p>
    `,
  },
  cookies: {
    title: "Política de Cookies",
    date: "Última Atualização: 18 de Novembro de 2025",
    content: `
      <p>Esta política explica o que são cookies e como os utilizamos.</p>

      <h2 id="cookies-1">1. O que são Cookies?</h2>
      <p>Cookies são pequenos arquivos de texto que são armazenados no seu computador ou dispositivo móvel quando você visita um website.</p>

      <h2 id="cookies-2">2. Tipos de Cookies Utilizados</h2>
      <p>Utilizamos cookies essenciais, de performance e de funcionalidade.</p>

      <h3 id="cookies-2-1">2.1. Cookies Essenciais</h3>
      <p>Necessários para o funcionamento básico do site, como login e carrinho de compras.</p>

      <h3 id="cookies-2-2">2.2. Cookies de Performance</h3>
      <p>Coletam informações sobre como os visitantes usam o site (Ex: quais páginas são mais visitadas).</p>
      
      <h2 id="cookies-3">3. Gerenciamento de Cookies</h2>
      <p>Você pode controlar ou excluir cookies através das configurações do seu navegador. A desativação pode afetar a funcionalidade do site.</p>
    `,
  },
};

export default legalDocs;
