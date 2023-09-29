function Header(props) {
  return (
    <header className="header">
      <div className="logo">
        <img src={props.logo} height="68" width="68" alt="quick fact Logo" />
        <h1>Today I Learned</h1>
      </div>

      <button className="btn btn-large btn-open">Share a fact</button>
    </header>
  );
}

export default Header;