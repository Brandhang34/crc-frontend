function submitToAPI(e) {
  e.preventDefault();
  var URL =
    "https://16un4jjquc.execute-api.us-east-1.amazonaws.com/prod/ses_contact_me";

  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var data = {
    name: name,
    subject: subject,
    email: email,
    message: message,
  };

  console.log(data);

  $.ajax({
    type: "POST",
    url: URL,
    dataType: "json",
    crossDomain: "true",
    contentType: "application/json; charset=utf-8",
    data: JSON.stringify(data),

    success: function () {
      // clear form and show a success message
      alert("Successfull");
      document.getElementById("contact-form").reset();
      location.reload();
    },
    error: function () {
      // show an error message
      alert("UnSuccessfull");
    },
  });
}
