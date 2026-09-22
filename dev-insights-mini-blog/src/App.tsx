import Header from './components/Header';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />

      <main className="main-content">
        <h2 className="page-title">Latest Insights</h2>
        <p className="page-description">
          Welcome to the Dev Insights Mini Blog.
        </p>
      </main>
    </div>
  );
}

export default App;