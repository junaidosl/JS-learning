//Write a JavaScript function that displays the current URL of the webpage using the window object.

function getCurrentURL() {
  var currentURL = window.location.href;
  console.log("Current URL: " + currentURL);
}


//Create a button with the text "Open New Window." When the button is clicked, open a new browser window using the window.open() method. Make sure the new window is 500 pixels wide and 400 pixels tall
function openNewWindow() {
  var newWindow = window.open("", "", "width=500,height=400");
}

<button onclick="openNewWindow()">Open New Window</button>;


//Create an HTML file with a <div> element with an id of "myDiv".

// Write a JavaScript function that changes the background color of the <div> element to red using the document.getElementById() method.

// Add a paragraph element inside the <div> with the text "Click the button to change the background color."

// Create a button with the text "Change Color." When the button is clicked, call a JavaScript function that changes the background color of the <div> element to blue.


<!DOCTYPE html>
<html>
<head>
  <title>Change Background Color</title>
  <style>
    #myDiv {
      width: 200px;
      height: 200px;
      border: 1px solid black;
    }
  </style>
</head>
<body>
  <div id="myDiv">
    <p>Click the button to change the background color.</p>
  </div>

  <button onclick="changeColor()">Change Color</button>

  <script>
    function changeColor() {
      var divElement = document.getElementById("myDiv");
      divElement.style.backgroundColor = "blue";
    }
  </script>
</body>
</html>
