import { h } from "preact";
import Router from "preact-router"; // Importação correta
import { HomePage } from "./pages/Home";
import { MobilePage } from "./pages/Mobile";
import { WebPage } from "./pages/Web";
import NotFound from "./pages/_404"; // Página de erro 404

export const App = () => {
  return (
    <Router>
      <HomePage path="/" />
      <MobilePage path="/mobile" />
      <WebPage path="/web" />
      <NotFound default />
    </Router>
  );
};
