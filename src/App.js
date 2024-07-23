import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/Main";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
