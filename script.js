

        // Get the current year for the copyright
        $('#year').text(new Date().getFullYear());
        
        //Init Scrollspy
        $('body').scrollspy({target: '#main-nav'});
        
        //add smooth scrolling
        $('#main-nav a').on('click', function(e) {
          //check for a hash value
          if(this.hash !== '') {
              //prevent default behavior
              e.preventDefault();

              //store hash
              const hash = this.hash;

              //animate smooth scroll
              $('html, body').animate({
                  scrollTop: $(hash).offset().top
              }, 900, function() {
                  //add hash to url after scroll
                  window.location.hash = hash;
              });
            }
        });

        $('#home-section a').on('click', function(e) {
            //check for a hash value
            if(this.hash !== '') {
                //prevent default behavior
                e.preventDefault();
  
                //store hash
                const hash = this.hash;
  
                //animate smooth scroll
                $('html, body').animate({
                    scrollTop: $(hash).offset().top
                }, 900, function() {
                    //add hash to url after scroll
                    window.location.hash = hash;
                });
              }
          });

/* Animations on scroll */

    $('.js__wp_1').waypoint(function(direction) {
        $('.js__wp_1').addClass('animated slow bounceInLeft slower delay-1s');
    }, {
        offset: '50%'
    });

    $('.js__wp_2').waypoint(function(direction) {
            $('.js__wp_2').addClass('animated slow bounceInRight');
        }, {
            offset: '50%'
        });

    $('.js__wp_3').waypoint(function(direction) {
            $('.js__wp_3').addClass('animated slow bounceInRight delay-1s fast');
        }, {
            offset: '50%'
        });

    $('.js__wp_4').waypoint(function(direction) {
            $('.js__wp_4').addClass('animated slow bounceInRight delay-2s faster');
        }, {
            offset: '50%'
        });

    $('.js__wp_5').waypoint(function(direction) {
            $('.js__wp_5').addClass('animated slow bounceInLeft slower delay-1s');
        }, {
            offset: '50%'
        });
    $('.js__wp_6').waypoint(function(direction) {
            $('.js__wp_6').addClass('animated slow bounceInRight');
        }, {
            offset: '50%'
        });

    $('.js__wp_7').waypoint(function(direction) {
            $('.js__wp_7').addClass('animated slow bounceInRight delay-1s fast');
        }, {
            offset: '50%'
        });

    $('.js__wp_8').waypoint(function(direction) {
            $('.js__wp_8').addClass('animated slow bounceInRight delay-2s faster');
        }, {
            offset: '50%'
        });

