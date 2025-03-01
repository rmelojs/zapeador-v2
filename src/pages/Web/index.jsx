import { h } from "preact";
import { route } from "preact-router"; // Correta importação do roteador
import { useState } from "preact/hooks";
import "../../assets/styles/style.css";
import { Link } from "preact-router";

export const WebPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  const zapearByWeb = (e) => {
    e.preventDefault();
    const cleanedNumber = phoneNumber.replace(/\D/g, ""); // Remove caracteres não numéricos
    if (cleanedNumber.length === 11) {
      window.open(
        `https://web.whatsapp.com/send?phone=55${cleanedNumber}`,
        "_blank",
      );
    } else {
      alert(
        "Por favor, insira somente o DDD com 2 dígitos e o número com 9 dígitos.",
      );
    }
  };

  return (
    <div class="container">
      <div class="container-send">
        <img
          src="whatsapp-icon.png"
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

        <form onSubmit={zapearByWeb}>
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

      {/* <button class="btn-sw" onClick={() => route("/mobile")}>
        USAR NO CELULAR
      </button> */}

      <Link href="/mobile" class="btn-sw">
        USAR NO CELULAR
      </Link>
    </div>
  );
};
