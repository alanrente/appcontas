import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { HeaderProvider } from "./contexts/header";
import Routes from "./routes";
import "./static/cadastroDevedores.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderProvider>
          <Routes />
        </HeaderProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
