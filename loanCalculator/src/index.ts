function computeLoan() {
  let amount = (document.getElementById("amount") as HTMLInputElement).value;
  let interest_rate = (
    document.getElementById("interest_rate") as HTMLInputElement
  ).value;
  let months = (document.getElementById("months") as HTMLInputElement).value;

  const parseAmount = parseInt(amount);
  const parseMonth = parseInt(months);
  const parseInterest_rate = parseInt(interest_rate);

  var interest = (parseAmount * (parseInterest_rate * 0.01)) / parseMonth;

  var payment = (parseAmount / parseAmount + interest).toFixed(2);

  payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  let innerPayment = document.getElementById("payment") as HTMLInputElement;

  innerPayment.innerHTML = "Monthly Payment = $" + payment;
}
