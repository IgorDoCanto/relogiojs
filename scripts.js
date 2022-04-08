const horaPonteiro = document.querySelector(".ponteiro.hora");
const minutosPonteiro = document.querySelector(".ponteiro.minutos");
const segundosPonteiro = document.querySelector(".ponteiro.segundos");

const setRotation = (element, rotationPercentage) => {
  element.style.setProperty("--rotation", rotationPercentage * 360);
};

const setClock = () => {
  const currentDate = new Date();

  const segundosPercentage = currentDate.getSeconds() / 60;
  const minutosPercentage = (segundosPercentage + currentDate.getMinutes()) / 60;
  const horaPercentage = (minutosPercentage + currentDate.getHours()) / 12;

  setRotation(segundosPonteiro, segundosPercentage);
  setRotation(minutosPonteiro, minutosPercentage);
  setRotation(horaPonteiro, horaPercentage);
};

setClock();

setInterval(setClock, 1000);