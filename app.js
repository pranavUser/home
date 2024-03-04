var canvas = document.getElementById("myCanvas");

// Get the drawing context for the canvas
var ctx = canvas.getContext("2d");

// Variables to track mouse movement
var isDrawing = false;
var lastX, lastY;

// Get the position of the canvas
var rect = canvas.getBoundingClientRect();
var offsetX = rect.left;
var offsetY = rect.top;

ctx.strokeStyle = 'blue';

// Event listener for mouse down event
canvas.addEventListener("mousedown", function(e) {
    isDrawing = true;
    [lastX, lastY] = [e.clientX - offsetX, e.clientY - offsetY];
});

// Event listener for mouse move event
canvas.addEventListener("mousemove", function(e) {
    if (isDrawing) {
        var currentX = e.clientX - offsetX;
        var currentY = e.clientY - offsetY;

        // Draw line from last position to current position
        ctx.beginPath();
        ctx.moveTo(lastX, lastY);
        ctx.lineTo(currentX, currentY);
        ctx.stroke();

        [lastX, lastY] = [currentX, currentY];
    }
});

// Event listener for mouse up event
canvas.addEventListener("mouseup", function() {
    isDrawing = false;
});

// Event listener for mouse leave event
canvas.addEventListener("mouseleave", function() {
    isDrawing = false;
});



function addTask() {
    var input = document.getElementById("taskInput").value;
    if (input === "") {
      alert("Please enter a task!");
      return;
    }
    var ul = document.getElementById("taskList");
    var li = document.createElement("li");
    li.textContent = input;
    li.onclick = function() {
      this.classList.add("fade-out");
      setTimeout(() => {
        this.parentNode.removeChild(this);
      }, 500); // Duration of fadeOut animation in milliseconds
    };
    ul.appendChild(li);
    li.classList.add("fade-in");
    document.getElementById("taskInput").value = "";
  }

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addTask();
    }
  }

  document.getElementById("taskInput").addEventListener("keypress", handleKeyPress);
  document.querySelector("button").addEventListener("click", addTask);
