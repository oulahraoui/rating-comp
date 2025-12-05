let rating = 0;
let buttons = document.querySelectorAll(`.rate`);
let submit = document.getElementById(`submit`);
let back = document.getElementById(`back`);
let front = document.getElementById(`front`);
let rate = document.getElementById(`rate`);

buttons.forEach((btn) => {
  btn.onclick = () => {
    btn.classList.add(`active`);
    rating = btn.innerText;
  };
});

submit.onclick = () => {
  if (!rating) {
    alert(`Pik a rating first please!`);
  } else {
    back.classList.remove(`hidden`);
    front.classList.add(`hidden`);
    rate.innerHTML = rating;
  }
};
