import { useLocation } from "preact-iso";
// import "../../styles/Header.css";

export function Header() {
  const { url } = useLocation();

  return (
    <header>
      <nav>
        <a href="/" class={url == "/" && "active"}>
          home
        </a>
        {/* <a href="/404" class={url == "/404" && "active"}>
          404
        </a> */}
      </nav>
    </header>
  );
}

export default Header;
