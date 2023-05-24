import "../styles/Welcome.css"

function Start() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Start Matching</title>
        <link rel="stylesheet" href="styles/welcome.css" />
        <img className="logonamewelcome" src="image/logoname.png" alt="" />
        <div className="messagewelcome3">Ready to find your Pawmate?</div>
        <div className="messagewelcome2">Start Matching Now!</div>
        <a href="match"><button className="buttonwelcome">Match</button></a>
        <img className="dogslogo" src="image/dogslogo.png" />
      </div>
    );
  }
;

export default Start