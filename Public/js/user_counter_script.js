// Initializes data to the default dictionary
let data = { user: "visitor" };

// fetches the api created in API Gateway and uses the post method to write to
// the dynamodb table and retrieve the amount of users who have triggered this api

const counterElement = document.getElementById("counter");

fetch("https://5lvhykrezk.execute-api.us-east-1.amazonaws.com/Prod/trigger", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data),
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data["message"]);
    const counter = document.createElement("p");
    counter.innerText = data["message"];
    counterElement.append(counter);
  })
  .catch((error) => console.log(error));
