 const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    //Fazendo aparecer os itens
    const navLinks = document.querySelectorAll('.nav-links li');

    //Fazendo o clique do menu funcionar
    burger.addEventListener('click', () => {
      nav.classList.toggle('nav-active');

      //Animações links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = '';
        } else {
          link.style.animation = `navlinkFade 0.5s ease forwards ${index/7+1.5}s`

        }
      });
      //Transformando em X
      burger.classList.toggle('toggle');


    });


  }

  navSlide();

var div = $(".tet");
    $(window).scroll(function(){
       if($(document).scrollTop()>600){
          var percent = $(document).scrollTop() / ($(document).height() - $(window).height());
          div.css('opacity', 0 - 1 );
       }else{
          div.css('opacity', 1);
       }

    });