import { BrowserRouter } from "react-router-dom";

import "./App.css";
import { HeaderProvider } from "./contexts/header";
import Main from "./pages/Main";
import "./static/cadastroDevedores.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <HeaderProvider>
          <Main />
        </HeaderProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
