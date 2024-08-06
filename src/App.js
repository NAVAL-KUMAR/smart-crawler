import logo from './logo.svg';
import './App.css';
import Accordion from "./component/Accordion";
import "primereact/resources/themes/lara-light-cyan/theme.css";

import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

function App() {
  return (
    <PrimeReactProvider>
      <div className="App">
        <Accordion />
      </div>
    </PrimeReactProvider>
  );
}

export default App;
