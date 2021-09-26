
import NavBar from './components/layout/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Dashboard from './components/layout/Dashboard';

function App() {
  return (
    <div className="App container">
      <NavBar />
      <Dashboard />
    </div>
  );
}

export default App;
