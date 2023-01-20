console.log("user created.html page");

let createuserbtn = document.getElementById("createuserbtn"),
  mainbanner = document.getElementById("modal"),
  newuser = document.getElementById("newuser"),
  usernameinput = document.getElementById("name"),
  useridname = document.getElementById("useridname"),
  userdetailbox = document.getElementById("user-detail-box"),
  depsoitedinput = document.getElementById("cvc"),
  depositedamount = document.getElementById("depositedamount"),
  totalbalanceinput = document.getElementById("balanceinput"),
  totalbalanceamount = document.getElementById("totalbalanceamount"),
  creditamount = document.getElementById("creditamount"),
  creditinput = document.getElementById("creditinput"),
  subusername = document.getElementById("subusername");

// user box none
userdetailbox = document.getElementById("user-detail-box").style.display =
  "none";

createuserbtn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("btn true");
  mainbanner.style.display = "none";
  console.log("new user");
  userdetailbox = document.getElementById("user-detail-box").style.display =
    "inline";
  const elements = document.querySelectorAll(".removeit");

  elements.forEach((element) => {
    element.style.display = "none";
  });

  const inputValue = usernameinput.value;
  useridname.innerHTML = inputValue;
  // all ok

  const deposit = depsoitedinput.value;
  depositedamount.innerHTML = deposit;
  //
  const subtotal = totalbalanceinput.value;
  totalbalanceamount.innerHTML = subtotal;
  //
  const credit = creditinput.value;
  creditamount.innerHTML = credit;
  //
  const subuser = usernameinput.value;
  subusername.innerHTML = subuser;
});
console.log(usernameinput);
