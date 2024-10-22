import logo from "./logo.svg";
import "./App.css";
import Banner from "./components/Banner";
import Cards from "./components/Cards";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <br />
        <br />
        <Cards />
      </header>
    </div>
  );
}

export default App;
