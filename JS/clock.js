const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
let interval = 1000;
let lastPaintTime = 0;

const clockLogic = () => {
  const date = new Date();
  const currentHour = date.getHours();
  const currentMinute = date.getMinutes();
  const currentSecond = date.getSeconds();
  hour.style.transform = `rotate(${
    30 * currentHour + currentMinute / 2 + currentSecond / 120
  }deg)`;
  minute.style.transform = `rotate(${
    6 * currentMinute + currentSecond / 120
  }deg)`;
  second.style.transform = `rotate(${6 * currentSecond}deg)`;
};

const main = (ctime) => {
  const elapsedTime = ctime - lastPaintTime;
  if (elapsedTime > interval) {
    clockLogic();
    lastPaintTime = ctime;
  }
  requestAnimationFrame(main);
};

requestAnimationFrame(main);
