import { h } from "preact";
import { route } from "preact-router"; // Agora usando route para navegação
import { useState } from "preact/hooks";
import "../../assets/styles/style.css";
import { Link } from "preact-router";
import Header from "../../components/Header";

export const MobilePage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const zapearByPhone = (e) => {
    e.preventDefault();
    const cleanedNumber = phoneNumber.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (cleanedNumber.length === 11) {
      window.open(`https://wa.me/55${cleanedNumber}`, "_blank");
    } else {
      alert("Por favor, insira um número de telefone válido com 11 dígitos.");
    }
  };

  return (
    <div class="container">
      <Header />
      <div class="container-send">
        <img
          src="/whatsapp-icon.png"
          alt="WhatsApp Icon"
          height="100px"
          width="100px"
        />

        <div class="hint">
          <p class="envie-msg">
            <em>Envie mensagem sem salvar o número.</em>
          </p>
        </div>

        <p class="title">Digite somente números:</p>

        <form onSubmit={zapearByPhone}>
          <input
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="21.99999-0000"
            maxLength={15}
            value={phoneNumber}
            onInput={(e) => setPhoneNumber(e.target.value)}
          />

          <button type="submit" class="btnSend">
            ENVIAR
          </button>
        </form>
      </div>

      {/* <button class="btn-sw" onClick={() => route("/web")}>
        USAR NO PC
      </button> */}

      <Link href="/web" class="btn-sw">
        USAR NO DESKTOP
      </Link>
    </div>
  );
};
