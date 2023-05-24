import "../styles/Details.css"
function HumanProfile() {
    return (
      <div>
        <meta charSet="utf-8" />
        <title>Owner Profile</title>
        <link rel="stylesheet" href="styles/details.css" />
        <div className="container">
          <div className="title-container">
            <a href="login"><img className="back" src="image/back.png" /></a>
            <div className="steps">
              <div className="step-container">
                <div className="numactive">1</div>
                <div className="titleactive">Owner Profile</div>
              </div>
              <div className="step-container">
                <div className="numinactive">2</div>
                <div className="titleinactive">Pet Details</div>
              </div>
              <div className="step-container">
                <div className="numinactive">3</div>
                <div className="titleinactive">Pet Bio</div>
              </div>
            </div>
            <a href="index"><img className="logonamedetails" src="image/logoname.png" /></a>
          </div>
          <div className="line" />
          <div className="info-container">
            <div className="ownername">Name</div>
            <input type="text" id="oname" name="oname" placeholder="Owner's Name" />
            <div className="birth">Date of Birth</div>
            <input type="date" id="birth" name="birth" />
            <div className="gender">Gender</div>
            <div className="gender-box">
              <label>
                <input type="radio" name="gender" defaultValue="male" />
                <span>Male</span>
              </label>
              <label>
                <input type="radio" name="gender" defaultValue="female" />
                <span>Female</span>
              </label>
              <label>
                <input type="radio" name="gender" defaultValue="other" />
                <span>Other</span>
              </label>
            </div>
          </div>
          <div className="info-container2">
            <div className="country">Country</div>
            <input type="text" id="ocountry" name="ocountry" placeholder="Chosen Country" />
            <div className="city">City</div>
            <input type="text" id="ocity" name="ocity" placeholder="Chosen City" />
            <div className="picture">
              <div className="pic"><img className="camera" src="image/camera.png" /></div>
              <div className="upload">Upload Photo</div>
            </div>
            <a href="petdetails"><button className="buttondetails">Next</button></a> 
          </div>
        </div>
      </div>
    );
  };

export default HumanProfile