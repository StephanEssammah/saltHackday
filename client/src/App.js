import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Movies from './components/Movies';

function App() {
  return (
    <>
    <Header />
    <Movies />
    <Navbar />
    <div className="App">
      <header className="App-header">
      </header>
    </div>
    </>
  );
}

export default App;
