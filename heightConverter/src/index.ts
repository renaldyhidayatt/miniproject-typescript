document.getElementById("submit")?.addEventListener("click", heightConverter);

function heightConverter() {
  let feet = document.getElementById("feet") as HTMLInputElement;
  let inches = document.getElementById("inches") as HTMLInputElement;

  const parseFeet = parseInt(feet.value) * 12;
  const parseInches = parseInt(inches.value);

  let cm = (parseFeet + parseInches) * 2.54;
  let n = cm.toFixed(0);

  const result = document.getElementById("result") as HTMLInputElement;

  result.innerHTML = n;
}
