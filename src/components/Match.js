
import "../styles/Match.css";

function Match() {
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
            <a className="active" href="match">Match</a>
            <a className="inactive" href="chat">Chat</a>
            <a className="inactive" href="explore">Explore</a>            
          </div>
          <a href="index.html">
            <button className="logout">Log Out</button>
          </a>
        </div>
      </header>
      <div className="body-container">
        <div className="dog">
          <div className="name">Kopi</div>
          <img className="doggender" src="image/gender.png" />
        </div>
        <div className="doginfo">
          <img className="dogpic" src="image/dogpic.png" />
          <img className="locicon" src="image/locationicon.png" />
          <div className="doginfo2">
            <div className="type">Shibu Inu</div>
            <div className="dogage">2 Yrs Old</div>
            <div className="location">Jakarta, Indonesia</div>
          </div>
        </div>
        <div className="desc">Romeo had Juliet, but I chews you to be my fur-ever love.</div>
        <div className="icon">
          <button className="buttonmatch"><img className="reject" src="image/reject.png" /></button>
          <button className="buttonmatch"><img className="accept" src="image/accept.png" /></button>
        </div>
      </div>
    </div>
  );
}
    
export default Match;