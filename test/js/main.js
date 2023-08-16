//arrow animation
document.addEventListener('DOMContentLoaded', () => {
  const arrow = document.getElementById('hero-arrow');

  arrow.classList.add('rotate-animation');

  arrow.addEventListener('animationend', () => {
    arrow.classList.remove('rotate-animation');
    arrow.classList.add('levitate-animation');
  });
});


//animation for item
document.addEventListener('DOMContentLoaded', () => {
  const percentageElement = document.getElementById('percentage');
  const targetPercentage = 40;
  const animationDuration = 2000;
  const updateInterval = 20;

  let currentPercentage = 0;

  const step = (targetPercentage * updateInterval) / animationDuration;

  const updatePercentage = () => {
    if (currentPercentage < targetPercentage) {
      currentPercentage += step;
      percentageElement.innerHTML = Math.floor(currentPercentage) + '<span>%</span>';
      setTimeout(updatePercentage, updateInterval);
    } else {
      percentageElement.innerHTML = targetPercentage + '<span>%</span>';
    }
  };

  updatePercentage();
});

document.addEventListener('DOMContentLoaded', () => {
  const items = document.querySelectorAll('.core-item .item');

  const delay = 1000;

  let delayTime = 0;
  items.forEach((item) => {
    setTimeout(() => {
      item.classList.add('levitate-animation');
    }, delayTime);

    delayTime += delay; 
  });
});

//hover effect levitation
const imgCase = document.querySelector(".img-case");

imgCase.addEventListener("mouseenter", () => {
  imgCase.classList.add("img-hover");
});

imgCase.addEventListener("mouseleave", () => {
  imgCase.classList.remove("img-hover");
});

//modal mobile 
document.querySelector(".header-mobile").addEventListener("click", function() {
  document.querySelector(".modal-overlay").style.display = "flex";
});

document.querySelector(".close-modal-button").addEventListener("click", function() {
  document.querySelector(".modal-overlay").style.display = "none";
});


//request open
const requestButtons = document.querySelectorAll('.request');
const requestWrapper = document.querySelector('.requestWrapper');
const closeRequestBtn = requestWrapper.querySelector('.closeRequestBtn');

requestButtons.forEach(button => {
    button.addEventListener('click', () => {
        requestWrapper.style.display = 'block';
    });
});

closeRequestBtn.addEventListener('click', () => {
    requestWrapper.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === requestWrapper) {
        requestWrapper.style.display = 'none';
    }
});
