const billAmount = document.querySelector(".billAmount");
const cashGiven = document.querySelector(".cashGiven");
const check = document.querySelector(".check");
const message = document.querySelector(".errorMessage");
const numberOfNotes = document.querySelectorAll(".noOfNotes");

const notes = [2000, 500, 100, 20, 10, 5, 1];
check.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
  if(billAmount.value > 0){
    if (cashGiven.value >= billAmount.value) {
      const amountToBeReturned = cashGiven.value - billAmount.value;
      calculateChange(amountToBeReturned);
    } else {
      showMessage("The cash amount should be greater than bill amount");
    }
  } else {
    showMessage("Invalid bill amount");
  }
});

function calculateChange(amountToBeReturned){
    for(let i = 0; i < notes.length; i++){
        const number = Math.trunc(amountToBeReturned/notes[i]);
        amountToBeReturned %= notes[i];
        numberOfNotes[i].innerText = number;
    }
}

function hideMessage(){
    message.style.display = "none";
}

function showMessage(msg) {
  message.style.display = "block";
  message.innerText = msg;
}
