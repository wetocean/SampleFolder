function calculateTotal() {
    let Grocery1 = parseFloat(document.getElementById('Grocery-1').value);
    let Grocery2 = parseFloat(document.getElementById('Grocery-2').value);
    let Grocery3 = parseFloat(document.getElementById('Grocery-3').value);
   
   let Total = Grocery1 + Grocery2 + Grocery3;

   document.getElementById('total').innerText = `The total is: ${Total}`;

   }
