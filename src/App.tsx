import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { HeaderProvider } from "./contexts/header";
import { SomatorioDevedoresProvider } from "./contexts/somatorioDevedores";
import Routes from "./routes";
import "./static/cadastroDevedores.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <SomatorioDevedoresProvider>
          <HeaderProvider>
            <Routes />
          </HeaderProvider>
        </SomatorioDevedoresProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
