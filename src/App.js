import './App.css';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Widgets from './components/Widgets';

function App() {
  return (
    // BEM
    <div className="app">

      {/* Sidebar (Left) */}
      <Sidebar />
      
      {/* Feed + Tweet Input (Centre) */}
      <Feed />

      {/* Widgets (Right) */}
      <Widgets />

    </div>
  );
}

export default App;
