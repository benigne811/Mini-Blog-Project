import './Header.css';

function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="logo">Dev Insights</h1>
      </div>

      <nav>
        <a className="nav-link" href="#">
          New Post
        </a>
      </nav>
    </header>
  );
}

export default Header;