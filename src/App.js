
import './App.css';
import Profile from './Profile';
import Card  from './Components/card.jsx';
import cardListData from './Objetc/objetos.jsx';
function App() {
  return (
    <div className="App">
      <Profile/>
      {
        cardListData.map((cardData)=> <Card key={cardData.id} {...cardData} /> )
      }
    </div>
    
  );
}

export default App;
