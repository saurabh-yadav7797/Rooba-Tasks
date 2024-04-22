// Define JSON data
var jsonData = {
    "name": "Saurabh",
    "age": 25,
    "city": "Azamgarh"
  };
  
  // Convert JSON data to a string
  var jsonString = JSON.stringify(jsonData);
  
  // Create HTML content dynamically using JavaScript
  var htmlContent = "<div>";
  htmlContent += "<h1>Name: " + jsonData.name + "</h1>";
  htmlContent += "<p>Age: " + jsonData.age + "</p>";
  htmlContent += "<p>City: " + jsonData.city + "</p>";
  htmlContent += "</div>";
  
  // Display HTML content
  document.getElementById("output").innerHTML = htmlContent;
  