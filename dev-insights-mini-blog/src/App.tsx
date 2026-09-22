import Header from './components/Header';
import PostList from './components/PostList';
import withLogger from './hoc/withLogger';
import './App.css';

const LoggedHeader = withLogger(Header, 'Header');

function App() {
  return (
    <div className="app">
      <LoggedHeader />

      <main className="main-content">
        <h2 className="page-title">Latest Insights</h2>

        <p className="page-description">
          Quick tips, insights, and updates from the Dev Insights team.
        </p>

        <PostList />
      </main>
    </div>
  );
}

export default App;