import Banner from "./components/Banner";
import Cards from "./components/Cards";
import "./index.css";

function Home() {
  return (
    <div className="App">
      <div className="wrapper">
        <header className="App-header">
          <Banner />
        </header>
        <body>
          <Cards />
          <br />
          <br />
        </body>
      </div>
    </div>
  );
}

export default Home;
