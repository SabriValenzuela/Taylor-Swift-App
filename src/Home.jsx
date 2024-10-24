import Banner from "./components/Banner";
import Cards from "./components/Cards";

function Home() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <br />
        <br />
      </header>
      <body>
        <Cards />
        <br />
        <br />
      </body>
    </div>
  );
}

export default Home;
