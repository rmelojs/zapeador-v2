import { h } from "preact";
import { route } from "preact-router"; // Importação correta do roteador
import "./style.css";

export const HomePage = () => {
  const navigateToMobile = () => {
    route("/mobile"); // Navega corretamente
  };

  const navigateToWeb = () => {
    route("/web"); // Navega corretamente
  };

  return (
    <div class="container">
      <div class="whatZapeador">
        <h1>Bem-vindo ao Zapeador!</h1>
        <p>
          Com o Zapeador você inicia uma coversa no WhatsApp com qualquer pessoa
          sem a necessidade de salvar o o telefone na sua agenda.
        </p>
      </div>
      <div class="options">
        <h2>Onde quer usar?</h2>
        <button onClick={navigateToMobile} id="btn-opt">
          no celular
        </button>
        <button onClick={navigateToWeb} id="btn-opt">
          no pc
        </button>
      </div>
      <div class="howToWork">
        <h2></h2>
        <h3>Como Funciona?</h3>
        <ol>
          <li>
            Insira o Número: Digite o número de telefone da pessoa com quem
            deseja falar.
          </li>
          <li>Clique no Botão: Clique no botão "ENVIAR".</li>
          <li>
            Conecte-se: Você será redirecionado para o WhatsApp para começar a
            conversa.
          </li>
          <li>Nada fica armazenado no servidor.</li>
        </ol>
      </div>
    </div>
  );
};
