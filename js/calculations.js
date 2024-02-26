function calculateTotal() {
    let Grocery1 = parseFloat(document.getElementById('Grocery-1').value);
    let Grocery2 = parseFloat(document.getElementById('Grocery-2').value);
    let Grocery3 = parseFloat(document.getElementById('Grocery-3').value);
   
   let Total = Grocery1 + Grocery2 + Grocery3;

   document.getElementById('total').innerText = `The total is: ${Total}`;

   }

let count = 0;

function displayCount() {
    document.getElementById('countDisplay').innerText = count;
    console.log(`my Count: ${count}`);
  }

  function checkCountValue() {
    if (count === 10) {
      alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
      alert("Your Instagram post gained 20 followers! Keep it up!");
    }
  }

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check if the count is 10 or 20
  }

  function resetCount() {
    let reset = confirm("Are you sure you want to reset the count?");
    if (reset) {
      count = 0; // Reset the count to 0
      displayCount(); // Display the count
    }
    else {
      alert("Count has not been reset.");
    }
  }