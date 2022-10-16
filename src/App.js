import "./App.css";
import Header from "./Header";
import CardsContainer from "./CardsContainer";

const App = () => {
  return (
    <div id="root">
      <Header />
      <div id="cards-container">
        <CardsContainer />
      </div>
    </div>
  );
};

export default App;

/* TO DO  
add favicon
add readme file */