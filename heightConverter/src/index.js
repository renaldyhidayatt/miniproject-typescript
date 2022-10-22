"use strict";
var _a;
(_a = document.getElementById("submit")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", heightConverter);
function heightConverter() {
    let feet = document.getElementById("feet");
    let inches = document.getElementById("inches");
    const parseFeet = parseInt(feet.value) * 12;
    const parseInches = parseInt(inches.value);
    let cm = (parseFeet + parseInches) * 2.54;
    let n = cm.toFixed(0);
    const result = document.getElementById("result");
    result.innerHTML = n;
}
