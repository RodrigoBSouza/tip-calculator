const inputBill = document.getElementById("calc-bill-input");
const tipPercentageBtn = document.querySelectorAll(".calc-tips button");
const tipAmount = document.getElementById("tip-amount");
const totalBill = document.getElementById("tip-total");
const inputPeople = document.getElementById("calc-people-input");
const resetButton = document.getElementById("calc-btn-reset");
const billError = document.querySelector(".calc-bill .error");
const peopleError = document.querySelector(".calc-people .error");
const tipInputCustom = document.getElementById("tip-custom");
let valueBill;
let valueTip;
let customTipValue;
let finalTipValue;
let valuePeople;
let totalBillValue;
let totalTipValue;

const getValue = (event) => {
  valueBill =+ event.target.value;

  if (customTipValue) {
    finalTipValue = customTipValue;
  } else {
    finalTipValue = valueTip;
  }

  if (customTipValue === 0) {
    finalTipValue = 0;
  }

  totalBillValue = String(((valueBill * finalTipValue + valueBill) / valuePeople).toFixed(2)).padStart(2, 0);
  
  totalTipValue = String(((valueBill * finalTipValue) / valuePeople).toFixed(2).padStart(2, 0));

  if (valueBill) {
    billError.classList.remove("active");
    inputBill.classList.remove("error-active");
  } else {
    billError.classList.add("active");
    inputBill.classList.add("error-active");
  }

  if (valueBill && valuePeople) {
    totalBill.innerText = `$${totalBillValue}`;
    tipAmount.innerText = `$${totalTipValue}`;
  } else {
    totalBill.innerText = "$0.00";
    tipAmount.innerText = "$0.00";
  }
};

inputBill.addEventListener("change", getValue);

const activeButton = (event) => {
  valueTip =+ event.target.innerText.replace("%", "") / 100;
  tipInputCustom.value = "";
  customTipValue = "";
  finalTipValue = valueTip;

  totalBillValue = String(((valueBill * finalTipValue + valueBill) / valuePeople).toFixed(2)).padStart(2, 0);
  
  totalTipValue = String(((valueBill * finalTipValue) / valuePeople).toFixed(2).padStart(2, 0));

  tipPercentageBtn.forEach((button) => {
    button.classList.remove("active");
  });

  event.target.classList.add("active");

  if (valueBill && finalTipValue && valuePeople) {
    totalBill.innerText = `$${totalBillValue}`;
    tipAmount.innerText = `$${totalTipValue}`;
  } else {
    totalBill.innerText = "$0.00";
    tipAmount.innerText = "$0.00";
  }
};

tipPercentageBtn.forEach((button) =>
  button.addEventListener("click", activeButton)
);

const values = (event) => {
  valuePeople =+ event.target.value;
  finalTipValue = "";

  if (customTipValue) {
    finalTipValue = customTipValue;
  } else {
    finalTipValue = valueTip;
  }

  if (customTipValue === 0) {
    finalTipValue = 0;
  }

  totalBillValue = String(
    ((valueBill * finalTipValue + valueBill) / valuePeople).toFixed(2)).padStart(2, 0);
    
  totalTipValue = String(
    ((valueBill * finalTipValue) / valuePeople).toFixed(2).padStart(2, 0)
  );

  if (valueBill) {
    billError.classList.remove("active");
    inputBill.classList.remove("error-active");
  } else {
    billError.classList.add("active");
    inputBill.classList.add("error-active");
  }

  if (valuePeople) {
    peopleError.classList.remove("active");
    inputPeople.classList.remove("error-active");
  } else {
    peopleError.classList.add("active");
    inputPeople.classList.add("error-active");
  }

  if (valueBill && valuePeople) {
    totalBill.innerText = `$${totalBillValue}`;
    tipAmount.innerText = `$${totalTipValue}`;
  } else {
    totalBill.innerText = "$0.00";
    tipAmount.innerText = "$0.00";
  }
};

inputPeople.addEventListener("keyup", values);

const customTip = (event) => {
  customTipValue = +event.target.value / 100;
  tipPercentageBtn.forEach((button) => {
    button.classList.remove("active");
  });

  if (customTipValue) {
    finalTipValue = customTipValue;
  } else {
    finalTipValue = "";
  }

  if (customTipValue === 0) {
    finalTipValue = 0;
  }

  totalBillValue = String(
    ((valueBill * finalTipValue + valueBill) / valuePeople).toFixed(2)
  ).padStart(2, 0);
  totalTipValue = String(
    ((valueBill * finalTipValue) / valuePeople).toFixed(2).padStart(2, 0)
  );

  if (valueBill && valuePeople) {
    totalBill.innerText = `$${totalBillValue}`;
    tipAmount.innerText = `$${totalTipValue}`;
  } else {
    totalBill.innerText = "$0.00";
    tipAmount.innerText = "$0.00";
  }
};

tipInputCustom.addEventListener("change", customTip);

const resetCalc = () => {
  inputBill.value = "";
  inputPeople.value = "";
  totalBill.innerText = "$0.00";
  tipAmount.innerText = "$0.00";
  tipInputCustom.value = "";
  valueBill = "";
  valueTip = "";
  valuePeople = "";
  customTipValue = "";
  tipPercentageBtn.forEach((button) => {
    button.classList.remove("active");
  });
  billError.classList.remove("active");
  inputBill.classList.remove("error-active");
  peopleError.classList.remove("active");
  inputPeople.classList.remove("error-active");
};

resetButton.addEventListener("click", resetCalc);