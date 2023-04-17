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
    "Je suis quelqu'un qui ne recule pas devant la difficulté. J'ai choisi de me lancer dans le domaine de la programmation et de la création de sites web car j'aime apprendre de nouvelles choses et me surpasser. C'est pourquoi j'ai obtenu mon diplôme de développeur web Bac+2 avec succès. Je suis prêt à affronter tous les défis qui se présentent à moi et à m'adapter constamment pour atteindre les objectifs fixés, en cherchant toujours à apprendre et à progresser dans mon domaine.",
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
