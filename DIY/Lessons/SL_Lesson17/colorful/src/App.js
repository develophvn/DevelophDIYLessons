import './App.css';
import Square from "./Components/Square"
function App() {
  return (
    <div className="App">
      <div className="Frame">
        <Square color="red" />
        <Square color="blue" />
      </div>
    </div>
  );
}

export default App;
