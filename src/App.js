import Router from "./routes/Router";
import { GlobalStyled } from "./globalStyled/GlobalStyled";
import GlobalState from "./contexts/GlobalState";

function App() {
  return (
    <div className="App">
      <GlobalState>
        <GlobalStyled />
        <Router />
      </GlobalState>
    </div>
  );
}

export default App;
