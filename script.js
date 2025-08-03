(function($) {

    "use strict";

    var searchPopup = function() {
      // open search box
      $('#header-nav').on('click', '.search-button', function(e) {
        $('.search-popup').toggleClass('is-visible');
      });

      $('#header-nav').on('click', '.btn-close-search', function(e) {
        $('.search-popup').toggleClass('is-visible');
      });
      
      $(".search-popup-trigger").on("click", function(b) {
          b.preventDefault();
          $(".search-popup").addClass("is-visible"),
          setTimeout(function() {
              $(".search-popup").find("#search-popup").focus()
          }, 350)
      }),
      $(".search-popup").on("click", function(b) {
          ($(b.target).is(".search-popup-close") || $(b.target).is(".search-popup-close svg") || $(b.target).is(".search-popup-close path") || $(b.target).is(".search-popup")) && (b.preventDefault(),
          $(this).removeClass("is-visible"))
      }),
      $(document).keyup(function(b) {
          "27" === b.which && $(".search-popup").removeClass("is-visible")
      })
    }

    var initProductQty = function(){

      $('.product-qty').each(function(){

        var $el_product = $(this);
        var quantity = 0;

        $el_product.find('.quantity-right-plus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($el_product.find('#quantity').val());
            $el_product.find('#quantity').val(quantity + 1);
        });

        $el_product.find('.quantity-left-minus').click(function(e){
            e.preventDefault();
            var quantity = parseInt($el_product.find('#quantity').val());
            if(quantity>0){
              $el_product.find('#quantity').val(quantity - 1);
            }
        });

      });

    }

    $(document).ready(function() {

      searchPopup();
      initProductQty();

      var swiper = new Swiper(".main-swiper", {
        speed: 500,
        navigation: {
          nextEl: ".swiper-arrow-prev",
          prevEl: ".swiper-arrow-next",
        },
      });         

      var swiper = new Swiper(".product-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: "#mobile-products .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
      });      

      var swiper = new Swiper(".product-watch-swiper", {
        slidesPerView: 4,
        spaceBetween: 10,
        pagination: {
          el: "#smart-watches .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          980: {
            slidesPerView: 4,
            spaceBetween: 20,
          }
        },
      }); 

      var swiper = new Swiper(".testimonial-swiper", {
        loop: true,
        navigation: {
          nextEl: ".swiper-arrow-prev",
          prevEl: ".swiper-arrow-next",
        },
      }); 

    }); // End of a document ready

})(jQuery);
// On attend que la page soit chargée
document.addEventListener('DOMContentLoaded', () => {
  const { jsPDF } = window.jspdf; // on récupère la classe jsPDF

  const form = document.getElementById('data-form');

  form.addEventListener('submit', function(e) {
    e.preventDefault(); // On empêche la soumission classique

    // Récupérer les valeurs
    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();

    // Créer le PDF
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Données Utilisateur", 20, 20);

    doc.setFontSize(12);
    doc.text(`Prénom : ${firstName}`, 20, 40);
    doc.text(`Nom : ${lastName}`, 20, 50);
    doc.text(`Email : ${email}`, 20, 60);
    doc.text(`Téléphone : ${phone || 'Non renseigné'}`, 20, 70);

    // Sauvegarder le PDF (télécharger)
    doc.save('donnees_utilisateur.pdf');

    // Reset formulaire
    form.reset();
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('cookie-consent');
  const acceptButton = document.getElementById('accept-cookies');

  // Vérifie si l'utilisateur a déjà accepté
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (cookiesAccepted === 'true') {
    banner.classList.add('hidden');
  } else {
    banner.classList.remove('hidden');
  }

  // Quand l'utilisateur clique sur "Accepter"
  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    banner.classList.add('hidden');
  });
});


