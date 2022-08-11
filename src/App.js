import "./App.css";
import Profile from "./Profile";
import Card from "./Components/card.jsx";
import cardListData from "./Objetc/objetos";

function App() {
  return (
    <main className="main">
      <div className="App">
        <Profile />
        {cardListData.map((cardData) => (
          <Card key={cardData.id} {...cardData} />
        ))}
      </div>
    </main>
  );
}

export default App;
