// Display

const display = document.getElementById("display");

// Buttons

const buttons = document.querySelectorAll("button");

// Loop

buttons.forEach(function(button){

    // Event

    button.addEventListener("click", function(){

        // Value

        let value = button.innerText;

        // Condition

        if(value === "C"){

            display.value = "";
        }

        else if(value === "="){

            try{

                // Operator

                display.value = eval(display.value);
            }

            catch(error){

                display.value = "Error";
            }
        }

        else{

            display.value += value;
        }

    });

});