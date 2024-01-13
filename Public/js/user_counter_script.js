// fetches the api created in API Gateway and uses the post method to write to
// the dynamodb table and retrieve the amount of users who have triggered this api

const counterElement = document.getElementById("counter");

fetch("https://16un4jjquc.execute-api.us-east-1.amazonaws.com/prod/count", {
  method: "POST",
})
  .then((res) => res.json())
  .then((data) => {
    counter.innerText = data["message"];
  })
  .catch((error) => console.log(error));
