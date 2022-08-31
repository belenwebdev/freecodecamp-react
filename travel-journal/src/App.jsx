import './App.css'
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import placesData from "./data"

function App() {
  const cards = placesData.map(place => {
    return (<Card item={place}/>)
  })

  return (
    <div>
        <Navbar />
        <main>{cards}</main>
    </div>
  );
}

export default App
