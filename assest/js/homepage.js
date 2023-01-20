console.log("home-page");

let paybtn = document.getElementById("pay-btn"),
  withdrawbtn = document.getElementById("withdraw-btn"),
  addbtn = document.getElementById("add-money-btn"),
  payinput = document.getElementById("pay-input"),
  withdrawinput = document.getElementById("withdraw-input"),
  addinput = document.getElementById("add-input"),
  balanceinput = document.getElementById("balance-input"),
  viewuserbtn = document.getElementById("view-user"),
  createuserbtn = document.getElementById("create"),
  viewuserbody = document.getElementById("viewuserbody"),
  removealert = document.getElementById("removealert"),
  hidealert = document.getElementById("hidealert");
removealert = document.getElementById("removealert").style.display = "none";

withdrawbtn.addEventListener("click", () => {
  console.log("withdrawinput");
  const values = withdrawinput.value;
  const binput = Number(balanceinput.value) - values;
  paybtn.addEventListener("click", () => {
    if ("viewuserbody".innerHTML == null) {
      document.getElementById("removealert").style.display = "inline";
    } else {
      console.log("user created");
    }
  });
  if (binput < 0) {
    alert("there is no balance in ur wallet");
  } else {
    balanceinput.value = binput;
    withdrawinput.value = "";
  }
});
addbtn.addEventListener("click", () => {
  console.log("addinput");
  // addinput.style.display = 'inline';
  const values = addinput.value;
  const binput = Number(balanceinput.value) + Number(values);
  balanceinput.value = binput;
  addinput.value = "";
  // all ok ✔️
});
hidealert.addEventListener("click", (e) => {
  removealert = document.getElementById("removealert").style.display = "none";
});
// viewuserbtn.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log("view user button");
//   console.log("view user button true");
//   if (("viewuserbody".innerHTML = null)) {
//     alert("there us no user kindly createone");
//   } else {
//     window.location.href = "view.html";
//   }
// });
