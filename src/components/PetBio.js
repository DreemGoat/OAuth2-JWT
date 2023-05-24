import "../styles/Details.css"

function PetBio() {
  return (
    <div>
      <meta charSet="utf-8" />
      <title>Pet Bio</title>
      <link rel="stylesheet" href="styles/details.css" />
      <div className="container">
        <div className="title-container">
          <a href="petdetails"><img className="back" src="image/back.png" /></a>
          <div className="steps">
            <div className="step-container">
              <div className="numinactive">1</div>
              <div className="titleinactive">Owner Profile</div>
            </div>
            <div className="step-container">
              <div className="numinactive">2</div>
              <div className="titleinactive">Pet Details</div>
            </div>
            <div className="step-container">
              <div className="numactive">3</div>
              <div className="titleactive">Pet Bio</div>
            </div>
          </div>
          <a href="/"><img className="logonamedetails" src="image/logoname.png" /></a>
        </div>
        <div className="line" />
        <div className="info-container3">
          <div className="message1">Hello, “Dog’s Name” and “Human Name”!</div>
          <div className="message2">Fill in your dog’s bio,</div>
          <input type="text" id="bio" name="bio" placeholder="Write bio here" />
          <div className="info">You can edit this later</div>
          <a href="dashboard"><button className="buttondetails">Finish</button></a> 
        </div>
      </div>
    </div>
  );
}

export default PetBio