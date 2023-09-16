const inputHeader = document.querySelector(`.input-text__field_header`);
const inputText = document.querySelector(`.input-text__field_text`);

const inputHeaderCounter = document.querySelector(`.input-text__counter_header`);
const inputTextCounter = document.querySelector(`.input-text__counter_text`);

inputHeader.addEventListener("input", function () {
  processingOverLimit(this, inputHeaderCounter);
});

inputText.addEventListener("input", function () {
  processingOverLimit(this, inputTextCounter);
});

function processingOverLimit(input, counter) {
  setCounter(input, counter);
  input.classList.remove(`input-text__field_incorrect`);
  if (input.value.length >= input.maxLength) {
    input.classList.add(`input-text_warning`);
    counter.classList.add(`input-text_warning`);
  } else if (input.value.length < input.maxLength) {
    input.classList.remove(`input-text_warning`);
    counter.classList.remove(`input-text_warning`);
  }
}

function setCounter(input, counter) {
  counter.innerHTML = input.maxLength - input.value.length;
  if (counter.innerHTML == input.maxLength) counter.innerHTML = ``;
}

inputHeader.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
});

inputText.addEventListener("input", function () {
  this.style.height = "auto";
  this.style.height = `${this.scrollHeight}px`;
});
