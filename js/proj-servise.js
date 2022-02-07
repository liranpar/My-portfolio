var gProjs;

function renderProjs() {
  gProjs = [
    {
      id: "#portfolioModal1",
      name: "Minesweeper",
      title: "The classic Minesweeper",
      desc: "Tihs is the classic Minesweaper! enjoy and be carefull!",
      url: "https://liranpar.github.io/Minesweeper/",
      img: "img/projects/minesweaper.png",
      publishedAt: new Date(2022, 0, 27),
      labels: ["Classic", "Exciting"],
    },
    {
      id: "#portfolioModal2",
      name: "Book shop",
      title: "Manage your own book shop",
      desc: "Make dream come true and manage your own book shop, with a lot advanced of features!",
      url: "https://liranpar.github.io/proj-Bookshop/",
      img: "img/projects/Bookshop.png",
      publishedAt: new Date(2022, 1, 3),
      labels: ["Business", "Trade", "Library"],
    },
    {
      id: "#portfolioModal3",
      name: "Pic quizz",
      title: "Identify the TV series ",
      desc: "Let's see your knowledge about TV shows in our amazing game",
      url: "https://liranpar.github.io/Pic-quizz/",
      img: "img/projects/picquizz.png",
      publishedAt: new Date(2022, 0, 23),
      labels: ["Quizz", "Fun"],
    },
    {
      id: "#portfolioModal4",
      name: "Todo list",
      title: "Manage your todo list",
      desc: "Manage your todo list with advanced and convinient tool ",
      url: "https://liranpar.github.io/Todo-app/",
      img: "img/projects/todo.png",
      publishedAt: new Date(2022, 1, 2),
      labels: ["Schedule", "Order", "Time management"],
    },
    {
      id: "#portfolioModal5",
      name: "Guess me",
      title: "Guess who i'm thinkng of",
      desc: "Build your own classic guesing game",
      url: "https://liranpar.github.io/Guess-me/",
      img: "img/projects/GuessMe.png",
      publishedAt: new Date(2022, 1, 6),
      labels: ["Fun", "Exciting"],
    },
    {
      id: "#portfolioModal6",
      name: "Tuch numbers",
      title: "Find the next number fast",
      desc: "Exciting and addicting game, Let's see ow fast you are",
      url: "https://liranpar.github.io/TuchNumbers/",
      img: "img/projects/Tuchnumbers.png",
      publishedAt: new Date(2022, 0, 20),
      labels: ["Classic", "Addincting"],
    },
  ];

  var str = gProjs.map(
    (proj) => `<div class="col-md-4 col-sm-6 portfolio-item">
  <a class="portfolio-link" data-toggle="modal" href=${proj.id}>
    <div class="portfolio-hover">
      <div class="portfolio-hover-content">
        <i class="fa fa-plus fa-3x"></i>
      </div>
    </div>
    <img id=${proj.id} class="img-fluid proj-img" src=${proj.img} alt=${proj.id} />
  </a>
  <div class="portfolio-caption">
    <h4>${proj.name}</h4>
    <p class="text-muted">${proj.labels[0]}</p>
  </div>
</div>`
  );

  $(".pics-cont").html(str.join(""));
}

function renderModals() {
  var str = gProjs.map((proj) => {
    var modalId = proj.id.split("#")[1];
    return `<div
    class="portfolio-modal modal fade"
    id="${modalId}"
    tabindex="-1"
    role="dialog"
    aria-hidden="true"
    >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">
                  ${proj.title}
                </p>
                <img
                  class="img-fluid d-block mx-auto"
                  src=${proj.img}
                  alt="${proj.name}"
                />
                <p>
                   ${proj.desc}
                </p>
                <ul class="list-inline">
                  <li>Date: ${proj.publishedAt}</li>
                  <li>Category: ${proj.labels.join(", ")}</li>
                  <li><a href=${
                    proj.url
                  } target="_blank">Enjoy the app experience</a></li>
                </ul>
                <button
                  class="btn btn-primary"
                  data-dismiss="modal"
                  type="button"
                >
                  <i class="fa fa-times"></i>
                  Close Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  });

  var allStr = str.join(",");
  document.querySelector(".overlay").insertAdjacentHTML("beforebegin", allStr);
}

function onContactMe() {
  $(".contact-modal").toggleClass("hidden");
  $(".overlay-2").removeClass("hidden");
}

function onsubmit() {
  var mailInput = $(".mail-input").val();
  var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  if (!regex.test(mailInput)) return;
  var subjInput = $(".subject-input").val();
  var textInput = $(".text-input").val();

  var urlStr = `https://mail.google.com/mail/?view=cm&fs=1&to=${mailInput}&su=${subjInput}&body=${textInput}`;

  window.open(urlStr, "_blank");
}
