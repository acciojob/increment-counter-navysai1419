 let counterValue = 0;

    function increment() {
        // Display the un-incremented value in an alert
        alert("The un-incremented value is: " + counterValue);

        // Increment the counter value
        counterValue++;

        // Update the counter display
        document.getElementById("counter").textContent = counterValue;
    }