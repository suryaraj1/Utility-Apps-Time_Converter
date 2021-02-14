const navBar = document.querySelector("header");
const button = document.querySelector(".btn-converter");
const resetBtn = document.querySelector(".btn-reset");
const epochTime = document.querySelector(".typer");
const year = document.querySelector(".year");
const month = document.querySelector(".month");
const day = document.querySelector(".day");
const hour = document.querySelector(".hour");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const accordion = document.querySelectorAll(".contentBox");

const toEpoch = (date, month, year, hour, minute, second) => {
  const dateString = month + '-' + date + '-' + year + ' ' + hour + ':' + minute + ':' + second;

  const epochTime = Math.floor(new Date(dateString).getTime() / 1000);
  return epochTime;
}

button.addEventListener('click', () => {
  epochTime.innerHTML = toEpoch(day.value, month.value, year.value, hour.value, minutes.value, seconds.value);
});

resetBtn.addEventListener('click', () => {
  year.value = "";
  month.value = "";
  day.value = "";
  hour.value = "";
  minutes.value = "";
  seconds.value = "";
  epochTime.innerHTML = "";
})


// navbar part starts here

window.onscroll = () => {
  const sticky = navBar.offsetTop;
  if (window.pageYOffset > sticky) {
    navBar.classList.add("sticky");
  } else {
    navBar.classList.remove("sticky");
  }
};

// accordion part here

const runAccordion = () => {
  for (let i = 0; i < accordion.length; i += 1) {
    accordion[i].addEventListener('click', () => {
      accordion[i].classList.toggle('activate');
      for (let j = 0; j < accordion.length; j += 1) {
        if (i !== j && accordion[j].classList.contains('activate')) {
          // switches off other accordions
          accordion[j].classList.toggle('activate');
        }
      }
    });
  }
};

runAccordion();

// tooltip part here
const redColor = String.fromCodePoint(0x1F534);
const greenColor = String.fromCodePoint(0x1F7E2);
const blueColor = String.fromCodePoint(0x1F535);

tippy('.output.year', {
  content: "Enter a year",
  animation: 'scale-subtle',
  theme: 'bw-gradient',
})

tippy('.output.year', {
  content: "Enter a year",
  animation: 'scale-subtle',
  theme: 'bw-gradient',
})

tippy('.output.month', {
  content: "Enter a month",
  animation: 'scale-subtle',
  theme: 'bw-gradient',
})

tippy('.output.day', {
  content: "Enter a day",
  animation: 'scale-subtle',
  theme: 'bw-gradient',
})

tippy('.output.hour', {
  content: "Enter an hour",
  animation: 'scale-subtle',
  theme: 'bw-gradient',
})

tippy('.output.minutes', {
  content: "Enter the number of minutes",
  animation: 'scale-subtle',
  theme: 'bw-gradient',
})

tippy('.output.seconds', {
  content: "Enter the number of seconds",
  animation: 'scale-subtle',
  theme: 'bw-gradient',
})

tippy('.copy-btn', {
  trigger: 'click',
  content: 'copied'
})

// for the clipboard copying
new ClipboardJS('.logo.copy-btn');

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
})

sr.reveal('.header', { interval: 200 });
sr.reveal('.component', { delay: 200 });
sr.reveal('.result-div', { interval: 200 });
sr.reveal('.red-output', { delay: 200 });
sr.reveal('.green-output', { delay: 300 });
sr.reveal('.blue-output', { delay: 400 });
sr.reveal('.time-wrapper', { interval: 200 });
sr.reveal('.color-output', { delay: 600 });
sr.reveal('.btn1', { delay: 200 });
sr.reveal('.btn2', { delay: 300 });