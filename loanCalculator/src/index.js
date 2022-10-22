"use strict";
function computeLoan() {
    let amount = document.getElementById("amount").value;
    let interest_rate = document.getElementById("interest_rate").value;
    let months = document.getElementById("months").value;
    const parseAmount = parseInt(amount);
    const parseMonth = parseInt(months);
    const parseInterest_rate = parseInt(interest_rate);
    var interest = (parseAmount * (parseInterest_rate * 0.01)) / parseMonth;
    var payment = (parseAmount / parseAmount + interest).toFixed(2);
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    let innerPayment = document.getElementById("payment");
    innerPayment.innerHTML = "Monthly Payment = $" + payment;
}
