"use strict";
{
  function showPassword() {
    const password = document.getElementById("password");
    const numbersCheckbox = document.getElementById("numbers-checkbox");
    const symbolsCheckbox = document.getElementById("symbols-checkbox");
    const letters = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "$%&#*+()";
    let answer = "";
    let seed = letters + letters.toUpperCase(); //letです

    if (numbersCheckbox.checked) {
      seed += numbers;
    }
    if (symbolsCheckbox.checked) {
      seed += symbols;
    }
    for (let i = 0; i < slider.value; i++) {
      //ループごとに乱数を変える必要があるので、ループの外で乱数を設定してはいけない
      answer += seed[Math.floor(Math.random() * seed.length)];
    }

    password.textContent = answer;
  }

  const slider = document.getElementById("slider");
  const btn = document.getElementById("btn");

  slider.addEventListener("input", () => {
    const passwordLength = document.getElementById("password-length");

    passwordLength.textContent = slider.value;
  });

  btn.addEventListener("click", () => {
    showPassword();
  });

  showPassword();
}
