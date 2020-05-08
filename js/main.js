$(function(){

	$('.header_slider').slick({
		infiniti: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows_fight" src="img/arrows-right.svg" alt="">',
	 asNavFor: '.slider-dotshead'
	});

	$('.slider-dotshead').slick({
		slidesToShow: 4,
		slidesToScroll: 4,
		asNavFor: '.header_slider',
		/* responsive: [
		  { 
		  	breakpoint: 575,
		  	settings: "unslick"
		  },
	  ]*/
	});

	$('.surf-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows_fight" src="img/arrows-right.svg" alt="">',
	 asNavFor: '.slider-map',
	 responsive: [
	  { 
	  	breakpoint: 960,
	  	settings: {
	  		slidesToShow: 3,	  		
	  	}
	  },
	  { 
	  	breakpoint: 690,
	  	settings: {
	  		slidesToShow: 2,	  		
	  	}
	  },
	  { 
	  	breakpoint: 385,
	  	settings: {
	  		slidesToShow: 1,	  		
	  	}
	  },
	 ]
	});

	$('.slider-map').slick({
		slidesToShow: 8,
		slidesToScroll: 1,
		arrows: false,
		asNavFor: '.surf-slider',
		focusOnSelect: true,
	});

	$('.travel__slider').slick({
		infiniti: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows_fight" src="img/arrows-right.svg" alt="">',	 
	});

	$('.sleep__slider').slick({
		infiniti: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows_fight" src="img/arrows-right.svg" alt="">',	 
	});

		$('.shop__slider').slick({
		infiniti: true,
		fade: true,
		prevArrow: '<img class="slider-arrows slider-arrows_left" src="img/arrows-left.svg" alt="">',
		nextArrow: '<img class="slider-arrows slider-arrows_fight" src="img/arrows-right.svg" alt="">',	 
	});


		$('<div class="quantity-nav"><div class="quantity-button quantity-up">+</div><div class="quantity-button quantity-down">-</div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

  });

  $('.quantity-button').on('click', function(){
  	 let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);
  });

  let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
  $('.summ').html('$' + summ);


  $('.surfboard-box__circle').on('click', function(){
  	$(this).toggleClass('active')
  });

  $('.menu-btn__inner').on('click', function() 	{	
  	$('.menu-btn__inner').toggleClass('menu-btn__inner--animate');
  	$('.menu').toggleClass('active'); 
  });

  new WOW().init();

});


/*const button = document.querySelector('.menu-btn__inner');
button.addEventListener('click', () => {
	button.classList.toggle('menu-btn__inner--animate');	
});*/