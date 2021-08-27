import logo from './logo.svg';
import './App.css';

function App() {
  const user = "DevelophVN";

  // Mỗi react components đều sẽ trả lại JSX syntax, khá giống với HTML nhưng với khả năng sử dụng các biến đã nêu trong Logic
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Xin chào {user}
        </p>
      </header>
    </div>
  );
}

export default App;
