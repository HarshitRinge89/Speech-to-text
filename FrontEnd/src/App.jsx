import './App.css';
import Sidebar from './Sidebar';
import Navbar from './Navbar';
import Content from './Content';
import './index.css';

function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <div className="app-layout">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
}

export default App;
