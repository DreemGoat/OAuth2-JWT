import "../styles/Details.css"

function PetDetails() {
  return (
    <div className="detailbody">
      <meta charSet="utf-8" />
      <title>Pet Details</title>
      <link rel="stylesheet" href="styles/details.css" />
      <div className="container">
        <div className="title-container">
          <a href="humandetails"><img className="back" src="image/back.png" /></a>
          <div className="steps">
            <div className="step-container">
              <div className="numinactive">1</div>
              <div className="titleinactive">Owner Profile</div>
            </div>
            <div className="step-container">
              <div className="numactive">2</div>
              <div className="titleactive">Pet Details</div>
            </div>
            <div className="step-container">
              <div className="numinactive">3</div>
              <div className="titleinactive">Pet Bio</div>
            </div>
          </div>
          <a href="home"><img className="logonamedetails" src="image/logoname.png" /></a>
        </div>
        <div className="line" />
        <div className="info-container">
          <div className="dogname">Name</div>
          <input type="text" id="dname" name="dname" placeholder="Dog's Name" />
          <div className="breed">Breed</div>
          <input type="text" id="dbreed" name="dbreed" placeholder="Dogs's Breed" />
          <div className="age">Age</div>
          <input type="text" id="dage" name="dage" placeholder="Dog's Age" />
        </div>
        <div className="info-container2">
          <div className="gender">Gender</div>
          <div className="pgender-box">
            <label>
              <input type="radio" name="gender" defaultValue="male" />
              <span>Male</span>
            </label>
            <label>
              <input type="radio" name="gender" defaultValue="female" />
              <span>Female</span>
            </label>
          </div>
          <div className="dpicture">
            <div className="pic"><img className="camera" src="image/camera.png" /></div>
            <div className="upload">Upload Photo</div>
          </div>
          <a href="petbio"><button className="buttondetails">Next</button></a> 
        </div>
      </div>
    </div>
  );
};

export default PetDetails