function calculateTip(event) {
  event.preventDefault();
  let bill = document.getElementById("bill").value;
  let servicequalit = document.getElementById("servicequalit").value;
  let people = document.getElementById("people").value;
  if ((bill == "") | (servicequalit == 0)) {
    alert("por favor, preencha os valores");
    return;
  }

  if ((people == "") | (people <= 1)) {
    people = 1;
    document.getElementById("each").style.display = "none";
  } else {
    document.getElementById("each").style.display = "block";
  }
  let total = (bill * servicequalit) / people;
  total = total.toFixed(2);
  document.getElementById("tip").innerHTML = total;
  document.getElementById("totaltip").style.display = "block";
}

document.getElementById("totaltip").style.display = "none";
document.getElementById("each").style.display = "none";

document.getElementById("tipsform").addEventListener("submit", calculateTip);
