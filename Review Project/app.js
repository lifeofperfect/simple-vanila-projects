const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://mobirise.com/bootstrap-template/profile-template/assets/images/timothy-paul-smith-256424-1200x800.jpg",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima harum consectetur magnam quaerat, molestias tenetur laborum esse unde velit.",
  },

  {
    id: 2,
    name: "ana johnson",
    job: "web designer",
    img:
      "https://media.gettyimages.com/photos/profile-shot-of-beautiful-young-man-shot-on-studio-picture-id1019896234?s=2048x2048",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minima harum consectetur magnam quaerat, molestias tenetur laborum esse unde velit.",
  },
  {
    id: 3,
    name: "Dona avarenko",
    job: "Porn star",
    img:
      "https://media.gettyimages.com/photos/lovely-woman-picture-id1139926360?s=2048x2048",
    text:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam facilis quisquam expedita perspiciatis temporibus quaerat sint neque ducimus. Voluptate totam incidunt alias ullam non?",
  },
  {
    id: 4,
    name: "Maya khalifa",
    job: "Photographer",
    img:
      "https://media.gettyimages.com/photos/lovely-woman-picture-id605769836?s=2048x2048",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum praesentium nisi porro culpa ea distinctio illo, iusto quis?",
  },
  {
    id: 5,
    name: "Paul allen",
    job: "Backend Developer",
    img:
      "https://media.gettyimages.com/photos/portrait-of-a-mid-adult-man-with-full-beard-side-view-picture-id596434329?s=2048x2048",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem deleniti nulla maxime quas libero soluta molestias aliquam tempora, odit ipsa. Aliquid exercitationem ad magnam inventore ab.",
  },
];

//select items
let img = document.getElementById("person-img");
let author = document.getElementById("author");
let job = document.getElementById("job");
let info = document.getElementById("info");

//next and prev buttons
let prev = document.querySelector(".prev-btn");
let next = document.querySelector(".nxt-btn");

let btns = document.querySelectorAll(".btn-container");

//random btn
let randbtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", () => {
  showPerson(currentItem);
});

function showPerson(person) {
  let item = reviews[person];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

prev.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson(currentItem);
});

next.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

randbtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});

//personal solution
/*

next.addEventListener("click", () => {
  if (currentItem < reviews.length) {
    let item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    currentItem++;
  } else {
    currentItem = 0;
    item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
});

prev.addEventListener("click", () => {
  if (currentItem >= 0) {
    let item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
    currentItem--;
  } else if (currentItem < 0) {
    currentItem = 4;
    item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
  }
});

randbtn.addEventListener("click", () => {
  item = reviews[randomValue()];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
});

function randomValue() {
  return Math.floor(Math.random() * reviews.length);
}

*/
