
import "../styles/Match.css";

function Explore() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>InuKoi</title>
      <link rel="stylesheet" href="styles/Match.css" />
      <header>
        <div className="header-container">
          <a href="/"><img className="logonamematch" src="image/logoname.png" /></a>
          <div className="nav">
            <a className="inactive" href="dashboard">Home</a>
            <a className="inactive" href="match">Match</a>
            <a className="inactive" href="chat">Chat</a>
            <a className="active" href="explore">Explore</a>            
          </div>
          <a href="/">
            <button className="logout">Log Out</button>
          </a>
        </div>
      </header>
    </div>
  );
}
    
export default Explore;