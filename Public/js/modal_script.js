// Get the modal
var homelabModal = document.getElementById("homelabModal");
var threetierModal = document.getElementById("threetierModal");
var CloudResumeChallengeModal = document.getElementById(
  "CloudResumeChallengeModal"
);

// Get the button that opens the modal
var homelabBtn = document.getElementById("homelabBtn");
var threetierBtn = document.getElementById("threetierBtn");
var serverlessportfolioBtn = document.getElementById("serverlessportfolioBtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0]; // x Button for first project
var span2 = document.getElementsByClassName("close")[1]; // x Button for second project
var span3 = document.getElementsByClassName("close")[2]; // x Button for third project

// When the user clicks the button, open the modal
homelabBtn.onclick = function () {
  homelabModal.style.display = "block";
};

threetierBtn.onclick = function () {
  threetierModal.style.display = "block";
};

serverlessportfolioBtn.onclick = function () {
  CloudResumeChallengeModal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span1.onclick = function () {
  homelabModal.style.display = "none";
};
span2.onclick = function () {
  threetierModal.style.display = "none";
};
span3.onclick = function () {
  CloudResumeChallengeModal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == homelabModal) {
    homelabModal.style.display = "none";
  } else if (event.target == threetierModal) {
    threetierModal.style.display = "none";
  } else if (event.target == CloudResumeChallengeModal) {
    CloudResumeChallengeModal.style.display = "none";
  }
};
