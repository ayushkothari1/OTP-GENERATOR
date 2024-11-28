const otpBox = document.querySelector("#otp");
const length = 6;
const number1 = "0123456789";
const number2 = "0123456789";
const number3 = "0123456789";
const number4 = "0123456789";
const number5 = "0123456789";
const number6 = "0123456789";
const number = number1 + number2 + number3 + number4 + number5 + number6;

function createOtp() {
  let otp = "";

  while (length > otp.length) {
    otp += number[Math.floor(Math.random() * number.length)];
  }
  otpBox.value = otp;
}

function copyOtp() {
  otpBox.select();
  document.execCommand("copy");
}
