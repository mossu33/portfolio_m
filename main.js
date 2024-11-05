const boxes = document.querySelectorAll('.box');


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      entry.target.classList.add('show');
      observer.unobserve(entry.target);

    }
  });
});


// box-observer

boxes.forEach(box => {
  observer.observe(box);
});

document.addEventListener("DOMContentLoaded", function () {
  const target = document.querySelector("h1");
  const squares = document.querySelector(".square-animation");

  window.addEventListener("scroll", function () {
      const rect = target.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          squares.classList.add("animate");
      } else {
          squares.classList.remove("animate");
      }
  });
});


// menuicon-openclose

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menuicon");
  const linkMenu = document.querySelector(".link");

  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("rotate");
    linkMenu.classList.toggle("open");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menuicon");
  const linkMenu = document.querySelector(".linksp");

  menuIcon.addEventListener("click", function () {
    linkMenu.classList.toggle("open");
  });
});
