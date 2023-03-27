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
    "Après avoir achevé ma formation de développeur web, je suis à la recherche d'une alternance pour préparer mon diplôme de Développeur d'application - PHP/Symfony. Je suis convaincu de pouvoir mettre à profit mes connaissances et devenir une force de proposition autonome pour apporter davantage à ce poste. Grâce à mes voyages et à mes expériences professionnelles à la Poste et en tant que gestionnaire, j'ai pu trouver ma voie après une période de réflexion post-bac. Aujourd'hui, mon objectif est d'évoluer professionnellement dans un environnement de travail qui me permettra de m'épanouir en tant que développeur web. Mon profil rigoureux et organisé me permettra de contribuer de manière positive à toute entreprise cherchant un développeur web motivé.",
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
