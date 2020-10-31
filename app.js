const reviews = [
  {
    id: 1,
    name: "PRIYANK",
    job: "WEB DEVELOPER",
    img: "./images/nature1.jpg",
    text: "A website without visitors is like a ship lost in the horizon.",
  },
  {
    id: 2,
    name: "MARIA",
    job: "WEB DESIGNER",
    img: "./images/nature2.jpg",
    text:
      "A user interface is like a joke. If you have to explain it, it’s not that good.",
  },
  {
    id: 3,
    name: "RAHUL",
    job: "FULL STACK DEVELOPER",
    img: "./images/nature3.jpg",
    text: " The public is more familiar with bad design than good design. It is, in effect, conditioned to prefer bad design, because that is what it lives with. The new becomes threatening, the old reassuring.",
  },
  {
    id: 4,
    name: "KULDIP",
    job: "BACKEND DEVELOPER",
    img: "./images/nature4.jpg",
    text: "Great web design without functionality is like a sports car with no engine.",
  },
  {
    id: 5,
    name: "POOJA",
    job: "FRONT END DEVELOPER",
    img: "./images/nature5.jpg",
    text:
      "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away.",
  },
];
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const self = document.getElementById("self");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;
window.addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  self.textContent = item.text;
});
function showPerson(person) {
  const item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  self.textContent = item.text;
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});
randomBtn.addEventListener("click", function () {
  console.log("hello");

  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
