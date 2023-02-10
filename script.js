const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const images = document.querySelector(".carousel").children;
const totalImages = images.length;
let index = 0;

prev.addEventListener("click", () => {
  nextImage("prev");
});

next.addEventListener("click", () => {
  nextImage("next");
});

function nextImage(direction) {
  if (direction == "next") {
    index++;
    if (index == totalImages) {
      index = 0;
    }
  } else {
    if (index == 0) {
      index = totalImages - 1;
    } else {
      index--;
    }
  }

  for (let i = 0; i < images.length; i++) {
    images[i].classList.remove("main");
  }
  images[index].classList.add("main");
}

var modal = document.getElementById("myModal");

var modalImg = document.getElementById("img01");

function openModal(img) {
  modal.style.display = "block";
  modalImg.src = img.src;
  prev.style.display = "none";
  next.style.display = "none";
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
  modal.style.display = "none";
  prev.style.display = "flex";
  next.style.display = "flex";
};
