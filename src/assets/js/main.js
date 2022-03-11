$(function() {
  //= ./../../../node_modules/slick-carousel/slick/slick.js
  //= ./components/slider.js

  // Toggle mobile nav
  const nav = $('#nav');
  const burgerBtn = $('#burger-btn');

  burgerBtn.on('click', function(e) {
    e.preventDefault();

    $('body').toggleClass('nav-show');
    $(this).toggleClass('active')
    nav.toggleClass('show');
  })

  // Darken header on scroll
  const header = $('#header');
  const intro = $('#intro')
  const headerH = header.innerHeight();
  const introH = intro.innerHeight();

  $(window).on('scroll resize', headerDarken);

  function headerDarken() {
    const scrollTop = $(this).scrollTop();

    if (scrollTop >= introH - headerH) {
      header.addClass('header--dark');
    } else {
      header.removeClass('header--dark');
    }
  }

  headerDarken();

  // Smooth Scroll
  $('[data-scroll]').on('click', function(e) {
    e.preventDefault();

    const scrollEl = $(this).data('scroll');
    const scrollElPos = $(scrollEl).offset().top;

    
    $('body').removeClass('nav-show');
    nav.removeClass('show');
    burgerBtn.removeClass('active');

    $('html, body').animate({
      scrollTop: scrollElPos - headerH
    }, 100)
  })

  // Scroll Spy
  const windowH = $(window).height();

  $(window).on('scroll', scrollSpy)

  function scrollSpy() {
    const scrollTop = $(this).scrollTop();

    $('[data-scrollspy]').each(function() {
      const $this = $(this);
      const sectionId = $this.data('scrollspy');
      const sectionOffset = $this.offset().top - (windowH * 0.333);

      if (scrollTop >= sectionOffset) {
        $('[data-scroll]').removeClass('active');
        $('[data-scroll="' + sectionId + '"]').addClass('active');
      }

      if (scrollTop == 0) {
        $('[data-scroll]').removeClass('active');
      }
    })
  }

  scrollSpy();

  // Modal
  $('[data-modal]').on('click', function(e) {
    e.preventDefault();

    const modal = $(this).data('modal');
    $('body').addClass('no-scroll')
    $(modal).addClass('show');

    setTimeout(function() {
      $(modal).find('.modal__inner').css({
        transform: 'scale(1)',
        opacity: '1'
      });
    })
  })

  $('[data-modal-close]').on('click', function(e) {
    e.preventDefault();

    const modal = $(this).parents('.modal');

    modalClose(modal);
  })

  $('.modal').on('click', function() {
    modalClose($(this));
  })

  $('.modal__inner').on('click', function(e) {
    e.stopPropagation();
  })

  function modalClose(modal) {
    modal.find('.modal__inner').css({
      transform: 'scale(0.5)',
      opacity: '0'
    });

    setTimeout(function() {
      $('body').removeClass('no-scroll');
      modal.removeClass('show');
    }, 200)
  }
})