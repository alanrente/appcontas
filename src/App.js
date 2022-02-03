import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { SomatorioDevedoresProvider } from './contexts/somatorioDevedores';
import Routes from './routes';
import './static/cadastroDevedores.css'

function App() {
  return (
    <div className="App">
      <h1>App Contas</h1>
      <BrowserRouter>
        <SomatorioDevedoresProvider>
            <Routes />
        </SomatorioDevedoresProvider>
      </BrowserRouter>
    </div>
  );
}
export default App;
