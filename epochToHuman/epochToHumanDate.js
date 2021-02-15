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
const hr = document.querySelector("#hr");
const min = document.querySelector("#mn");
const sec = document.querySelector("#sc");
const unixTime = document.querySelector(".epochTime");
const accordion = document.querySelectorAll(".contentBox");

// analog clock part here

const runClock = () => {
  const degree = 6;
  setInterval(() => {
    let today = new Date();
    let todayHour = today.getHours() * 30;
    let todayMinutes = today.getMinutes() * degree;
    let todaySeconds = today.getSeconds() * degree;
    hr.style.transform = `rotateZ(${todayHour + (todayMinutes / 12)}deg)`;
    min.style.transform = `rotateZ(${todayMinutes}deg)`;
    sec.style.transform = `rotateZ(${todaySeconds}deg)`;
  })
};

runClock();

// unix clock part here

const toEpoch = (date, month, year, hour, minute, second) => {
  const dateString = month + '-' + date + '-' + year + ' ' + hour + ':' + minute + ':' + second;
  const epochTime = Math.floor(new Date(dateString).getTime() / 1000);
  return epochTime;
}

const runUnixClock = () => {
  setInterval(() => {
    const store = new Date();
    const storeYear = store.getFullYear();
    const storeMonth = store.getMonth() + 1;
    const storeDay = store.getDate();
    const storeHour = store.getHours();
    const storeMinutes = store.getMinutes();
    const storeSeconds = store.getSeconds();
    unixTime.innerHTML = toEpoch(storeDay, storeMonth, storeYear, storeHour, storeMinutes, storeSeconds);
  })
}

runUnixClock();

const timeConverter = epochTime => {
  const date = new Date(epochTime * 1000);
  return date;
};

button.addEventListener('click', () => {
  if (epochTime.value != "") {
    const humanDate = timeConverter(epochTime.value);
    console.log(humanDate);
    year.innerHTML = humanDate.getFullYear();
    month.innerHTML = humanDate.getMonth() + 1;
    day.innerHTML = humanDate.getDate();
    hour.innerHTML = humanDate.getHours();
    minutes.innerHTML = humanDate.getMinutes();
    seconds.innerHTML = humanDate.getSeconds();
  }
});

resetBtn.addEventListener('click', () => {
  year.innerHTML = "";
  month.innerHTML = "";
  day.innerHTML = "";
  hour.innerHTML = "";
  minutes.innerHTML = "";
  seconds.innerHTML = "";
  epochTime.value = "";
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

tippy('.red-output', {
  content: "Red Color " + redColor,
  animation: 'scale-subtle',
  theme: 'red-gradient',
})

tippy('.green-output', {
  content: "Green Color " + greenColor,
  animation: 'scale-subtle',
  theme: 'green-gradient',
})

tippy('.blue-output', {
  content: "Blue color " + blueColor,
  animation: 'scale-subtle',
  theme: 'blue-gradient',
})

tippy('.copy-btn', {
  trigger: 'click',
  content: 'copied'
})

tippy('.color-output', {
  animation: 'scale-subtle',
  theme: 'bw-gradient',
  content: 'color preview',
  placement: 'top-start',
  arrow: false
})

// for the clipboard copying
new ClipboardJS('.copy-btn');

const sr = ScrollReveal({
  origin: 'top',
  distance: '70px',
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