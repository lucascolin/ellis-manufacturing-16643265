			(function($) {

				// VERTICAL ALIGN FUNCTION
				$.fn.verticalAlign = function () { /* VERTICAL ALIGN FUNCTION */
					return this
					.css("margin-top",($(this).parent().height() - $(this).height())/2 + 'px' )
				};

				/* TAB CREATION FOR SINGLE PRODUCTS */
				$("body").on('click','ul.tabs li',function(){
                  
					var tab_id = $(this).attr('data-tab');
			
					$(this).parent('ul').children('li').removeClass('current');
					$('.tab-content').removeClass('current');
			
					$(this).addClass('current');
					$("#"+tab_id).addClass('current');

					$('.vertalign').each(function() {
						$( this ).verticalAlign();
					});

                });

                $('.open-popup-link').magnificPopup({
                    type:'inline',
                    midClick: true
                });

              	$(function() { /* on document load */
				
					// REPLACE SVG WITH PNG IN BROWSERS THAT DON'T SUPPORT IT
					if (!Modernizr.svg) {
					  $(".logo").attr("src", "images/logo.png");
					}

					// SLIDE TOGGLE ABOUT AREA ON HOMEPAGE
					$(".starter").click(function(){
						$("#toggle").slideToggle();
						if ($(this).find('span').hasClass('glyphicon-menu-up')){
							$('html,body').animate({
								scrollTop: $("#toggle").offset().top
							}, 500, 'easeInOutExpo');
							$(this).find('span').removeClass('glyphicon-menu-up').addClass('glyphicon-menu-down');
						}
						else {
							$(this).find('span').removeClass('glyphicon-menu-down').addClass('glyphicon-menu-up');
						}
					});
					
					// ACTIVATE AND USE THE BXSLIDER
					$('.product-slider').bxSlider({
						useCSS: false,
						easing: 'swing',
						pager: false,
						auto: true,
						pause: 6000,
						autoHover: true,
						onSliderLoad: function() {
							$('.product-slider h6').addClass('animated slideInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
								$(this).removeClass('animated slideInUp');
							});
						},
						onSlideBefore: function($slideElement, oldIndex, newIndex) {
							$slideElement.find('h6').addClass('animated slideInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
								$(this).removeClass('animated slideInUp');
							});
						}
					});

					// ACTIVATE AND USE THE DOUBLE SLIDER
					var slider = $(".bxslider2").bxSlider({
						mode: 'fade',
						auto: false,
						controls: false,
						pager: false,
						infiniteLoop: false,
						onSliderLoad: function() {
							$('.bxslider-pager2 li:first-child').addClass('current');
						},
						onSlideBefore: function($slideElement, oldIndex, newIndex){
							$('.bxslider-pager2 li').removeClass('current');
							$('.bxslider-pager2').find("[data-slide-index='" + newIndex + "']").parent('li').addClass('current');
						}
					});
					
					var sliderPager = $(".bxslider-pager2").bxSlider({
						minSlides: 5,
						maxSlides: 5,
						slideWidth: 95,
						slideMargin: 15,
						moveSlides: 1,
						auto: false,
						pager: false,
						infiniteLoop: false,
						hideControlOnEnd: true
					});
					
					$('.bxslider-pager2 li').on('click', 'a', function(e){
						e.preventDefault();   
						slider.goToSlide($(this).attr('data-slide-index'));
					});
					
					// GET TOP LEVEL MENU LIST AND ADD CLASS
                    $(".current").parents("li").last().addClass('current');

					// PLUS GALLERY FROM GOOGLE
                    $("#plusgallery").plusGallery();
                  
					// FITVIDS
                  	$(".bxslider2").fitVids();
                  	$("#content").fitVids();
                  
				});
				
				$(window).load(function() { /* on window load */

					// VERTICAL ALIGN
					$('.vertalign').each(function() {
						$( this ).verticalAlign();
					});
					
				});

				var jRes = jRespond([ /* responsive jquery functions */
					{
						label: 'handheld',
						enter: 0,
						exit: 767
					},{
						label: 'tablet',
						enter: 768,
						exit: 992
					},{
						label: 'laptop',
						enter: 993,
						exit: 1199
					},{
						label: 'desktop',
						enter: 1200,
						exit: 10000
					}
				]);
			
				jRes.addFunc([
					{
                        breakpoint: ['desktop','laptop'],
                        enter: function() {

                          setTimeout(function(){
                  			// SET UP BSELECT
                            $(".selector-wrapper select").bselect({ searchInput : false });
                          }, 5000);
                          
                        },
                        exit: function() {
                        }
                    },{
						breakpoint: ['desktop','laptop','tablet'],
						enter: function() {

							// ACTIVATE SAME HEIGHT FUNCTION
							$('.sameheight').equalHeightColumns();
							$('.sameheight-product-title').equalHeightColumns();
							$('.sameheight-tabs').equalHeightColumns();
                            $('.sameheight-holder1').equalHeightColumns();

                            // STICKY INFO
                            var waypoints = $('.waypoint-outside').waypoint({
                              handler: function(direction) {
                                if(direction == 'down') {
                                    $('#waypoint').addClass('fixed');
                                }
                                if(direction == 'up') {
                                    $('#waypoint').removeClass('fixed');
                                }
                              }
                            })

                        },
						exit: function() {

							// RETURN TO DEFAULT ON EXIT
							$('.sameheight,.sameheight-product-title,.product-title').css('min-height','auto');

						}
					},{
						breakpoint: ['tablet','handheld'],
						enter: function() {

                          /* SIMPLE TOGGLE ACTION */
							$('.tablet-toggle-view').click(function () {
						
								var text = $(this).next('div.tablet-panel');
						
								if (text.is(':hidden')) {
									text.slideDown('200');
									$(this).addClass('tablet-toggle-open');
								} else {
									text.slideUp('200');
									$(this).removeClass('tablet-toggle-open');
								}
								
							});

                        },
						exit: function() {}
					},{
						breakpoint: ['handheld'],
						enter: function() {

                          /* SIMPLE TOGGLE ACTION */
							$('.mobile-toggle-view').click(function () {
						
								var text = $(this).next('div.mobile-panel');
						
								if (text.is(':hidden')) {
									text.slideDown('200');
									$(this).addClass('mobile-toggle-open');
								} else {
									text.slideUp('200');
									$(this).removeClass('mobile-toggle-open');
								}
								
							});

                        },
						exit: function() {}
					}
				]);
				
			})(jQuery);