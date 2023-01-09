//NAVBAR
/*let lastScrollTop = 0;
const navbar = document.getElementsByClassName("navbar");

window.addEventListener("scroll", function () {
  console.log(navbar);
  const scrollTop =
    window.pageYOffset || this.document.documentElement.scrollTop; ////////////////////verifier

  if (scrollTop > lastScrollTop) {
    navbar.style.top = "-50px";
  } else {
    navbar.style.top = "0";
  }
  lastScrollTop = scrollTop;
});*/

//TYPED
var typed = new Typed(".typed", {
  strings: [
    "Ayant finalisé ma formation de développeur web, je recherche actuellement ma première expérience dans le domaine. Je saurai mettre à profit mes connaissances et, autonome je saurai être force de proposition pour apporter davantage à ce poste. Aujourd'hui, mon objectif est d'évoluer professionnellement. Rigoureux et organisé, je cherche un environnement de travail dans lequel m'épanouir en tant que développeur web.",
  ],
  typeSpeed: 1,
});

//Compteur live
let compteur = 0;

$(window).scroll(function () {
  const top = $(".counter").offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    /////////////scrool a verifier
    $(".counter-value").each(function () {
      let $this = $(this),
        countTo = $this.attr("data-count");
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 10000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
    compteur = 1;
  }
});
///AOS
AOS.init();
