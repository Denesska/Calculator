// Get reference to the input field
const display = document.querySelector("input[name='display']");

// Add click event listener to all buttons
const buttons = document.querySelectorAll("input[type='button']");
buttons.forEach(button => {
  button.addEventListener("click", function() {
    // Get the value of the clicked button
    let value = this.value;

    // Check if the value is an operator or equals sign
    if (value === "+" || value === "-" || value === "*" || value === "/" || value ==="AC" || value ==="DEL" || value === "=" ) {
      // Evaluate the expression and display the result
      display.value = eval(display.value);
    } else {
      // Concatenate the value to the display
      // display.value += value;
    }
  });
});

function calculate() {
    let display = document.querySelector("input[name=display]");
    let buttons = document.querySelectorAll("input[type=button]");
  
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener("click", function() {
        let value = this.value;
  
        if (value === "AC") {
          display.value = "";
        } else if (value === "DEL") {
          display.value = display.value.toString().slice(0, -1);
        } else if (value === "=") {
          display.value = eval(display.value);
        } else {
          display.value += value;
        }
      });
    }
  }
  calculate();
