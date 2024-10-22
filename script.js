const SHOWS = [
  {
    title: "Ginny & Georgia",
    genre: "Drama",
    img: "img/drama/g&g.jpeg",
  },
  {
    title: "The Queen's Gambit",
    genre: "Drama",
    img: "img/drama/tqg.jpeg",
  },
  {
    title: "Outlander",
    genre: "Drama",
    img: "img/drama/outlander.webp",
  },
  {
    title: "Grey's Anatomy",
    genre: "Drama",
    img: "img/drama/ga.webp",
  },
  {
    title: "Ozark",
    genre: "Drama",
    img: "img/drama/ozark.jpeg",
  },
  {
    title: "Avatar: The Last Airbender",
    genre: "Fantasy",
    img: "img/fantasy/atla.webp",
  },
  {
    title: "Supernatural",
    genre: "Fantasy",
    img: "img/fantasy/supernatural.webp",
  },
  {
    title: "The Sandman",
    genre: "Fantasy",
    img: "img/fantasy/sandman.jpeg",
  },
  {
    title: "Wednesday",
    genre: "Fantasy",
    img: "img/fantasy/wednesday.jpeg",
  },
  {
    title: "The Witcher",
    genre: "Fantasy",
    img: "img/fantasy/witcher.jpeg",
  },
  {
    title: "Arrested Development",
    genre: "Comedy",
    img: "img/comedy/ad.jpeg",
  },
  {
    title: "Dead to Me",
    genre: "Comedy",
    img: "img/comedy/dtm.jpeg",
  },
  {
    title: "Seinfeld",
    genre: "Comedy",
    img: "img/comedy/seinfeld.webp",
  },
  {
    title: "Emily in Paris",
    genre: "Comedy",
    img: "img/comedy/eip.jpeg",
  },
  {
    title: "The Good Place",
    genre: "Comedy",
    img: "img/comedy/tgp.webp",
  }
]
document.addEventListener("DOMContentLoaded", function() {
  displayAllShows();
});

function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const _showTemplate =
  `<div class="col {{colSize}}">
    <div class="card">
      <img src="{{imageSrc}}" class="card-img-top" alt="{{title}}">
    </div>
  </div>`;

const _showRowElement =
  document.getElementById("show-row");

const _selectedGenre =
  document.getElementById("selected");

let rowClasses = ["row-cols-1", "row-cols-md-3", "g-4"]

function displayShow(show) {
  _showRowElement.innerHTML = "";
  _showRowElement.classList.remove(...rowClasses);
  let showObj = SHOWS.find(x => x.title === show)
  _selectedGenre.innerText = showObj.genre;
  // let newText = `Try`
  let newColumn = _showTemplate
    .replaceAll("{{imageSrc}}",
      showObj.img)
    .replaceAll("{{title}}",
      showObj.title)
    .replaceAll("{{colSize}}",
      'col-7');
  _showRowElement.insertAdjacentHTML('beforeend', newColumn);
}

function displayAllShows() {
  _showRowElement.innerHTML = "";
  _showRowElement.classList.add(...rowClasses);
  _selectedGenre.innerText = "Genres";
  if (SHOWS.length == 0) {
    _showRowElement.innerHTML = _noMatchingShowsHtml;
    return;
  }
  for (let i = 0; i < SHOWS.length; i++) {
    let newCard =
      _showTemplate
        .replaceAll("{{imageSrc}}",
          SHOWS[i].img)
        .replaceAll("{{title}}",
          SHOWS[i].title)
        .replaceAll("{{colSize}}",
          '');
    _showRowElement
      .insertAdjacentHTML('beforeend', newCard);
  }
}
let dramaShows = [
  "Ginny & Georgia",
  "Outlander",
  "Grey's Anatomy",
  "Ozark",
  "The Queen's Gambit"
];

let fantasyShows = [
  "Supernatural",
  "The Sandman",
  "Wednesday",
  "The Witcher",
  "Avatar: The Last Airbender"
];

let comedyShows = [
  "Arrested Development",
  "Dead to Me",
  "Seinfeld",
  "Emily in Paris",
  "The Good Place"
];

function chooseRandomGenre() {
 // Deliverable 1: Your code here 👇
  let genre = ["drama", "fantasy", "comedy"];

  let randomIndex = getRandomNumber(0, genre.length-1); 

  return genre[randomIndex];
}

function displayRandomShow(genre) {
 // Deliverable 2: Your code here 👇
  let showsArray;
  
  if (genre === "random") {
    genre = chooseRandomGenre();
  } 
  
  if (genre === "drama") {
    showsArray = dramaShows;
  } else if (genre === "fantasy") {
    showsArray = fantasyShows;
  } else if (genre === "comedy") {
    showsArray = comedyShows;
  }

  let randomIndex = getRandomNumber(0, showsArray.length - 1);
  let randomShow = showsArray[randomIndex];

  displayShow(randomShow);
}
