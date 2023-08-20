import "./App.css";
import Cards from "./Components/Cards";
import Navbar from "./Components/Navbar";
import movies from "./movies.json";

function App() {
  return (
    <>
      <Navbar navTitle="JunaidDev" about="Movie Showing App" />
      <div className="mainCards">
        {movies.map((element) => (
          <Cards
            title={element.Title}
            year={element.Year}
            img={element.Poster}
          />
        ))}
      </div>
    </>
  );
}

export default App;
