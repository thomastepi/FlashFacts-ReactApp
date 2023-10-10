function Header(props) {
  return (
    <header className="header">
      <div className="logo">
        <img src={props.logo} height="68" width="68" alt="quick fact Logo" />
        <h1>FlashFeeds</h1>
      </div>

      <button onClick={props.toggleForm} className="btn btn-large btn-open">{props.toggle ? "close" : "Share a FlashFact"}</button>
    </header>
  );
}

export default Header;