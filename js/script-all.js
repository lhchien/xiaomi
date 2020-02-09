(function ($) {
	new WOW().init();
	// js Loading page 
	jQuery(window).load(function () {
		jQuery("#preloader").delay(100).fadeOut("slow");
		jQuery("#load").delay(100).fadeOut("slow");

		$('#menu_mb_ll').removeAttr('style');

		//close in menu mobi
		$('#close').click(function () {
			$('#menu_mb_ll').data('mmenu').close();
			$('.menu-mobi').toggleClass('active');
		});

		/*== move Cart outside page DIV*/
		$('.mini-cart').insertAfter('#menu_mb_ll');

		//Menu bottom alway fix when click
		$('.mode-mobile').insertAfter('#menu_mb_ll').addClass('menu-mb-bt');
		$('.mode-mobile.menu-mb-bt .menu-mobi').click(function () {
			$('#menu_mb_ll').data('mmenu').close();
		});


		// Search mode mobi
		if ($(window).width() < 1040) {		
			$('.menu-mb-bt .search-form_toggle').click(function () {
				$(this).toggleClass('active');
				
				if ($('.menu-mb-bt .search-form_toggle').hasClass('active')) {						
					var uu = $('.stuck_container').find('input.search-input-txt');
					uu.focus();
						
					setTimeout(function(){
						$('.menu-mb-bt .search-form_toggle').removeClass('active');
					}, 2000);		 
				}		
			})


		}

		// call function when click Category
		maskMenu();
	});

	//jQuery to collapse the navbar on scroll
	$(window).scroll(function () {
		if ($(".navbar").offset().top > 50) {
			$(".navbar-fixed-top").addClass("top-nav-collapse");
		} else {
			$(".navbar-fixed-top").removeClass("top-nav-collapse");
		}
	});

	//jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function () {
		$('.navbar-nav li a').bind('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
		$('.page-scroll a').bind('click', function (event) {
			var $anchor = $(this);
			$('html, body').stop().animate({
				scrollTop: $($anchor.attr('href')).offset().top
			}, 1500, 'easeInOutExpo');
			event.preventDefault();
		});
	});

})(jQuery);

// Js phan Cart click
$(window).load(function () {

	/******** Ajax Cart **********/
	$('.stuck_container:not(.isStuck) #cart').on('click', '.heading', function () {
		var h = $(".stuck_container:not(.isStuck) .contentCart").height();
		$('.stuck_container:not(.isStuck) #cart .contentCart').slideToggle("10", function () {
			if (h > 200) {
				$(".stuck_container:not(.isStuck) #boxscroll").niceScroll({
					cursorcolor: "#2c3628",
					cursorwidth: 8
				});
			}
		});
	});

	$(window).scroll(function () {
		if ($(".stuck_container .contentCart:visible").length > 0) {
			$('.stuck_container .contentCart:visible').hide(400);
		}
	});
});

/* === Click show login tab === */
$(document).ready(function () {
	var flaglogin = false;
	$(".click-login").click(function () {
		flaglogin = false;
		$(this).toggleClass("active");
		$(".wr-login-right .wr-box-nd").toggleClass("active");
		return false;
	});

	$(".wr-box-nd").click(function () {
		flaglogin = true;
	}).find(".wr-box-nd input").focus(function () {
		flaglogin = true;
	});

	$('body').click(function () {
		setTimeout(function () {
			if ($(".click-login").hasClass("active") && !flaglogin) {
				$(".click-login").click();
			}
			flaglogin = false;
		}, 200);
	});
	$(".close-box-nd").click(function () {
		$(".wr-login-right .wr-box-nd").toggleClass("active")
	});
	/* scroll an di thang mat dich nay*/
	$(window).scroll(function () {
		if ($(".wr-login-right .wr-box-nd").is(".active")) {
			$(".wr-login-right .wr-box-nd").toggleClass("active")
		}
	});
});
/* === END Click show login tab === */

/*== show loading 2s ==*/
setInterval(function () {
	$(".wr-loading").css('background-image', 'none');
}, 2000);

/* ========================================================
 Owl Carousel
 ========================================================*/
;
(function ($) {
	var pr = $('#owl-2');
	var pr3 = $('#owl-3');
	var sldt = $('.slide-tab');
	var slhome = $('.slide-home');
	var proslide = $('.owl-pro-slide');
	var slleft = $('.slide-left');
	var o = $('#owl-banner');
	var sllogo = $('.slide-logos');

	var promotion = $('.slider-promotion');



	// include('js/owl.carousel.min.js');
	$(document).ready(function () {
		if (o.length > 0) {
			o.owlCarousel({
				//margin: 30,
				items: 1,
				merge: true,
				loop: true,
				//margin:10,
				video: true,
				lazyLoad: true,
				center: true,
				nav: true,
				navClass: ['owl-prev', 'owl-next'],
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					980: {
						items: 1
					}
				}
			});
			proslide.owlCarousel({
				//margin: 30,
				items: 1,
				merge: true,
				loop: true,
				//margin:10,
				video: true,
				lazyLoad: true,
				center: true,
				nav: true,
				navClass: ['owl-prev', 'owl-next'],
				responsive: {
					0: {
						items: 1
					},
					768: {
						items: 1
					},
					980: {
						items: 1
					}
				}
			});
		}
		pr.owlCarousel({
			//margin: 30,
			items: 1,
			merge: true,
			loop: true,
			//margin:10,
			video: true,
			lazyLoad: true,
			center: true,
			nav: true,
			navClass: ['owl-prev', 'owl-next'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 1
				},
				980: {
					items: 1
				}
			}
		});
		pr3.owlCarousel({
			//margin: 30,
			items: 1,
			merge: true,
			loop: true,
			//margin:10,
			video: true,
			lazyLoad: true,
			center: true,
			nav: true,
			navClass: ['owl-prev', 'owl-next'],
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 1
				},
				980: {
					items: 1
				}
			}
		});

		// js for slide product home
		slhome.owlCarousel({
			margin: 30,
			autoplay: false,
			smartSpeed: 450,
			loop: true,
			dots: false,
			dotsEach: 1,
			nav: true,
			navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
			responsive: {
				0: {
					items: 1
				},
				320: {
					items: 2
				},
				460: {
					items: 2
				},
				570: {
					items: 2
				},
				840: {
					items: 2
				},
				1040: {
					items: 3
				},
				1200: {
					items: 3
				},
				1360: {
					items: 4
				}
			}
		});
		slleft.owlCarousel({
			margin: 30,
			autoplay: false,
			smartSpeed: 450,
			loop: true,
			dots: false,
			dotsEach: 1,
			nav: true,
			navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
			responsive: {
				0: {
					items: 1
				},
				320: {
					items: 1
				},
				460: {
					items: 1
				},
				570: {
					items: 1
				},
				840: {
					items: 1
				},
				1040: {
					items: 1
				},
				1200: {
					items: 1
				},
				1360: {
					items: 1
				}
			}
		});





		// js for slide detail page.
		sldt.owlCarousel({
			margin: 10,
			autoplay: false,
			smartSpeed: 450,
			loop: true,
			dots: false,
			dotsEach: 1,
			nav: true,
			navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
			responsive: {
				0: {
					items: 1
				},
				320: {
					items: 1
				},
				460: {
					items: 1
				},
				570: {
					items: 2
				},
				840: {
					items: 3
				},
				1024: {
					items: 3
				},
				1280: {
					items: 3
				},
				1360: {
					items: 3
				}
			}
		});


		promotion.owlCarousel({
			//margin: 10,
			autoplay: true,
			autoplayTimeout: 10000,
			animateIn: 'fadeIn',
			animateOut: 'fadeOut',
			smartSpeed: 450,
			loop: true,
			dots: false,
			dotsEach: 1,
			nav: true,
			navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
			responsive: {
				0: {
					items: 1
				}
			}
		});

		// js for slide logos  home page.
		sllogo.owlCarousel({
			//margin: 10,
			autoplay: true,
			smartSpeed: 450,
			loop: true,
			dots: false,
			dotsEach: 1,
			nav: true,
			navClass: ['owl-prev fa fa-angle-left', 'owl-next fa fa-angle-right'],
			responsive: {
				0: {
					items: 1
				},
				320: {
					items: 2
				},
				460: {
					items: 2
				},
				660: {
					items: 3
				},
				768: {
					items: 3
				},
				991: {
					items: 5
				},
				1024: {
					items: 6
				},
				1280: {
					items: 6
				}
			}
		});



	});

})(jQuery);
/*END  Owl Carousel
 ========================================================*/

/* JS menu list category click call
========================================*/
$(document).ready(function () {
	jQuery(".menu-icon-class").on("click", function () {
		jQuery(".sf-menu-phone").slideToggle();
		jQuery(this).toggleClass("active");
	});


	jQuery('.sf-menu-phone').find('li.parent').append('<i class="icon-angle-down"></i>');
	jQuery('.sf-menu-phone li.parent i').on("click", function () {
		if (jQuery(this).hasClass('icon-angle-up')) {
			jQuery(this).removeClass('icon-angle-up').parent('li.parent').find('> ul').slideToggle();
		} else {
			jQuery(this).addClass('icon-angle-up').parent('li.parent').find('> ul').slideToggle();
		}
	});

});
/* END JS menu list category click call
========================================*/
/* JS Click buy gio hang
 ========================================*/
$(document).ready(function () {
	$(".wr-buy-sp").click(function () {

		var cart = null;
		$.each($(".cart"), function () {
			if ($(this).css("visibility") === "visible") {
				cart = $(this);
			}
		})

		EffectCart($(cart), $(this).closest(".wr-img").children("img"));
	});
});
/* END JS Slider price scroll
========================================*/
/* JS for click products add to cart effect
========================================*/
function EffectCart(cartele, img) {
	var cart = cartele;
	var imgtodrag = img;
	if (imgtodrag) {
		var imgclone = imgtodrag.clone()
			.offset({
				top: imgtodrag.offset().top,
				left: imgtodrag.offset().left
			})
			.css({
				'opacity': '0.8',
				'position': 'absolute',
				'height': '180px',
				'width': '180px',
				'z-index': '9999999999'
			})
			.appendTo($('body'))
			.animate({
				'top': cart.offset().top + 10,
				'left': cart.offset().left + 10,
				'width': 75,
				'height': 55
			}, 2000, 'easeInOutExpo');


		imgclone.animate({
			'width': 0,
			'height': 0
		}, function () {
			imgclone.remove();
		});

	}

}

/*js for slide product promotion */
$(document).ready(function () {
	$(".list-pro-click > li").on("click", function () {
		var src = $(this).find('img').data("src");
		//$(this).parents(".wr-box-slider").find(".show-img").attr("src",src)
		$(this).parents(".wr-box-slider").find(".show-img")
			.fadeOut(400, function () {
				$(this).parents(".wr-box-slider").find(".show-img").attr("src", src)
			})
			.fadeIn(400);
		$(this).parents(".wr-box-slider").find("li").removeClass("active");
		$(this).addClass("active");
	});
	$(".close-sp").on("click", function () {
		$('.out-show-scroll-pro').addClass("active");
	});
});

/* END JS for click products add to cart effect
=============================================================*/
/* JS for description detail page click
============================================================*/
$(document).ready(function () {
	$('.desF-item').has('ul').prepend('<span class="desF-click"><i class="desF-arrow"></i></span>');
	$('.desF-submenu-item').has('ul.desF-submenu2').prepend('<span class="desF-click"><i class="desF-arrow"></i></span>');
	// Click to reveal the nav
	$('.desF-item').click(function () {
		//alert($(this).find('.desF-arrow').is(".desF-rotate"));
		//$(this).find('.firsts').removeClass("firsts");	
		if ($(this).find('.desF-arrow').is(".desF-rotate")) {
			$(this).find('.desF-arrow').removeClass("desF-rotate");
			$(this).find('.desF-submenu').slideToggle();
			return;
		}
		$('.desF-submenu').hide();
		$('.desF-click .desF-arrow').removeClass("desF-rotate");
		$(this).find('.desF-submenu').slideToggle();
		$(this).children('.desF-click').children('.desF-arrow').toggleClass('desF-rotate');
	});
});
/* END JS for description detail page click
============================================================*/

/*== Atri new fix hover mobi ====
============================================================*/
$(document).ready(function () {
	var touch = window.ontouchstart ||
		(navigator.MaxTouchPoints > 0) ||
		(navigator.msMaxTouchPoints > 0);

	if (touch) { // remove all :hover stylesheets
		try { // prevent exception on browsers not supporting DOM styleSheets properly
			for (var si in document.styleSheets) {
				var styleSheet = document.styleSheets[si];
				if (!styleSheet.rules) continue;

				for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
					if (!styleSheet.rules[ri].selectorText) continue;

					if (styleSheet.rules[ri].selectorText.match(':hover')) {
						styleSheet.deleteRule(ri);
					}
				}
			}
		} catch (ex) {}
	}
	/**/
});


/*===Script For Currency click====*/

$(document).ready(function () {
	var flagF = false;
	$(".click-currency").click(function () {
		flagF = false;
		$(this).toggleClass("active");
		$(".wr-currency .wr-box-nd-currency").toggleClass("active");
		return false;
	});
	/* scroll an di thang mat dich nay*/
	$(window).scroll(function () {
		if ($(".wr-currency .wr-box-nd-currency").is(".active")) {
			$(".wr-currency .wr-box-nd-currency").toggleClass("active")
		}
	});
	$(window).scroll(function () {
		if ($(".wr-currency .click-currency").is(".active")) {
			$(".wr-currency .click-currency").toggleClass("active")
		}
	});
});



/*===Script For Language click====*/

(function ($) {
	$('.js-dropdown').hide();

	$(document).ready(function () {
		$('.cs-placeholder').on('click', function (e) {
			var obj = $(this).parent().get(0);

			// hide other active dropdown
			$('.js-dropdown-container.active').each(function (i, e) {
				if (e != obj) {
					$(e).removeClass('active');
					$(e).find('.js-dropdown').slideToggle();
				}
			})

			$(this).parent().toggleClass('active');
			$(this).next().slideToggle();
		});
	});

	$(document).on('click', function (e) {
		var drpactive = $('.js-dropdown-container.active .cs-placeholder');
		if (drpactive.length > 0 && e.target != drpactive.get(0) && $(e.target).closest('.js-dropdown-container').length == 0)
			drpactive.click();
	})

})(jQuery)


/*===Script For menu bottom ===*/

$(document).ready(function () {
	$('.navF-item').has('ul').prepend('<span class="navF-click"><i class="navF-arrow"></i></span>');
	$('.navF-submenu-item').has('ul.navF-submenu2').prepend('<span class="navF-click"><i class="navF-arrow"></i></span>');
	// Click to reveal the nav
	$('.navF-item').click(function () {
		$(this).find('.navF-submenu').slideToggle();
		$(this).children('.navF-click').children('.navF-arrow').toggleClass('navF-rotate');
	});
});

/* JS for list select click
============================================================*/
$(function () {
	var menu_dropdown = $('.sub-list-select');
	menu_dropdown.hide();

	$('.wrapper-dropdown-12').on('click', function (e) {
		e.stopPropagation();
		menu_dropdown.parent().toggleClass('active');
		menu_dropdown.toggle();
	});
})


// js menu left click
$(document).ready(function () {
	$('.wr-tt a').on('click', function () {
		$parent_box = $(this).closest('.wr-box-left');
		//console.log($parent_box.siblings().find('.list-mn').removeClass("active").slideUp().parent())
		$parent_box.siblings().find('.box-content-l').slideUp().parent().find(".wr-tt").removeClass("active");
		$parent_box.find('.box-content-l').slideToggle();
		$parent_box.find(".wr-tt").toggleClass('active');
	});
	// js menu left click show search	
	$('.rd-mobilepanel_toggle').on('click', function () {
		$('.wr-box-search-cate').toggleClass('active');
	});


});


/*=======================================================
	Mini cart NEW
==================================*/

$(document).ready(function () {
	var heightWindow = $(window).height()
	var num = $('.mini-cart-header').height() + $('.ship-note').height() + $('.mini-cart-footer').height() + $('.mode-mobile.menu-mb-bt').height() + 20;
	$(window).on('load resize', function () {
		var num = $('.mini-cart-header').height() + $('.ship-note').height() + $('.mini-cart-footer').height() + $('.mode-mobile.menu-mb-bt').height() + 20;
		scrollCart(num);
	});
	//************Create scroll
	function scrollCart(num) {
		var heightCart
		if ($(window).width() <= 420) {
			/****Move ship-note & cart-footer inside cart-content ****/
			$('.mini-cart-content').prepend($('.ship-note'));
			$('.mini-cart-content').append($('.mini-cart-footer'));
			// console.log('aaaa');
			heightCart = $(window).height() - ($('.mini-cart-header').height() + $('.mode-mobile.menu-mb-bt').height() + 50);
		} else {
			heightCart = heightWindow - num;
		}
		// console.log(heightCart);

		if ($(".mini-cart-content").height() > heightCart) {
			$(".mini-cart-content").css({
				"height": heightCart,
				"overflow-y": "scroll",
				"margin-right": "0",
				"padding-right": "20px"
			});
		} else {
			$(".mini-cart-content").css({
				"height": "auto",
				"overflow-y": "visible",
				"margin-right": "20px",
				"padding-right": "0"
			});
		}
	}

	//******Show-Hide Discount-form
	var a = 0;
	$(".discount-code").click(function () {
		if (a == 0) {
			$(".discount-form").slideDown(function () {
				a = 1;
			});
		} else {
			$(".discount-form").slideUp(function () {
				a = 0;
			});
		}
	});
	$(".i-close-form").click(function () {
		a = 0;
		$(".discount-form").slideUp();
	});

	//**********Show-Hide Cart
	var cc = 1;
	$("#cart, .stuck_container.isStuck #cart").click(function () {
		if (cc == 1) {
			console.log(cc);
			$(".bg-cart").show();
			$(".mini-cart-container").animate({
				right: 0
			}, 400);
			if ($(window).width() <= 420) {
				$(".mm-page").animate({
					height: '1vh'
				}, 400);
			} else {
				$("body").css('overflow-y', 'hidden');
			}
			cc = 0;
		} else {
			$(".bg-cart").hide();
			$(".mini-cart-container").animate({
				right: "-666px"
			}, 300);
			if ($(window).width() <= 420) {
				$(".mm-page").animate({
					height: '100%'
				}, 400);
			} else {
				$("body").css('overflow-y', 'scroll');
			}
			cc = 1;
		}
	});

	$(".bg-cart, .close-cart").on('click', function () {
		$(".bg-cart").hide();
		$(".mini-cart-container").animate({
			right: "-666px"
		}, 300);
		$(".mm-slideout").animate({
			height: '100%'
		}, 400);
		$("body").css('overflow-y', 'scroll');
		cc = 1;
	});

	//**********Asking before remove item
	$(".remove-item").click(function () {
		var productParent = $(this).closest(".product-item");
		var hideE = productParent.find(".product-attributes, .product-quantity, .product-price");
		var opacityE = productParent.find(".product-table-col-img, .product-table-collection, .product-table-name");
		hideE.animate({
			opacity: "0.5"
		}, 300);
		opacityE.animate({
			opacity: "0.5"
		}, 300);
		productParent.find(".asking-form").slideDown(300);

		function closeForm() {
			productParent.find(".asking-form").slideUp(100);
			hideE.animate({
				opacity: "1"
			}, 300);
			opacityE.animate({
				opacity: "1"
			}, 200);
		}
		productParent.find(".say-y").click(closeForm);
		productParent.find(".say-n").click(closeForm);
	})

});


//**********Radio check
$(document).ready(function () {
	$('.form-check').change(function () {
		if ($("#checkfirma").is(":checked")) {
			$(".firma").show();
		} else {
			$(".firma").hide();
		}
	});

});

//**********Show hide method
$(document).ready(function () {
	$('.title-contain').click(function () {
		$(".info-under").hide();
		$(".item").removeClass("active");
		$(this).next(".info-under").toggle(200, function () {
			$(this).closest(".item").addClass("active");
		});
	});
});

/*===============change method============*/
$(document).ready(function () {
	// $('.title-step img').attr('src','images/success.png');
	var oldImg, oldH2, oldH3;
	$(".contain-step").slice(1).hide();
	$(".step").slice(1).css("opacity", "0.5");
	$('.change-method').hide();

	if ($(window).width() < 500) {
		$('.change-method').hide();
	}

	$('.change-method').click(function () {
		var parentChangeBtn = $(this).closest('.step');
		parentChangeBtn.find(".contain-step").toggle(100);
		$(this).hide(100);
		parentChangeBtn.find('.title-step .title-step-text h2').html(oldH2);
		parentChangeBtn.find('.title-step .title-step-text h3').html(oldH3);
		parentChangeBtn.find('.title-step img').attr('src', oldImg);
	});

	$('.btn-done').click(function () {
		var parentBtn = $(this).closest('.step');

		$(".contain-step").hide(100); // hide contain step
		parentBtn.find('.change-method').show(100); // hide button change other method

		// Remeber info before
		oldImg = parentBtn.find('.title-step img').attr('src');
		oldH2 = parentBtn.find('.title-step .title-step-text h2').html();
		oldH3 = parentBtn.find('.title-step .title-step-text h3').html();

		//Change info when select method
		var h2TitleContain = $(this).closest('.item').find('.title-contain h2').html();
		var pTitleContain = $(this).closest('.item').find('.title-contain p').html();
		parentBtn.find('.title-step .title-step-text h2').html(h2TitleContain);
		parentBtn.find('.title-step .title-step-text h3').html(pTitleContain);
		parentBtn.find('.title-step img').attr('src', 'images/success.png');
		// remove last 'active' Class. Add new for current
		parentBtn.find('.item').removeClass('active');
		$(this).closest('.item').addClass('active');

		$(this).closest('.info-under').hide(); //hide info of method already select
		//Continue Step 2
		parentBtn.addClass('done');
		parentBtn.next().css("opacity", "1");
		if (!parentBtn.next().hasClass('done')) {
			parentBtn.next().find(".contain-step").show(100);
		}

		// Screen focus on step
		$('html, body').animate({
			scrollTop: parentBtn.offset().top
		}, 200)
	});

});


/*End Mini Cart
==================================================================================== */

/*=======MENU======*/
$(function () {
	$('#menu_mb_ll ul li').each(function () {
		if ($(this).hasClass('active')) {
			$(this).closest('ul').closest('li').addClass('active');
		}
	})
	$('#menu_mb_ll ul li li').each(function () {
		if ($(this).hasClass('active')) {
			$(this).closest('ul').closest('li').addClass('active');
		}
	})
	$('#menu_mb_ll ul li li li').each(function () {
		if ($(this).hasClass('active')) {
			$(this).closest('ul').closest('li').addClass('active');
		}
	})
	$('nav#menu_mb_ll').mmenu();

	// tuannh 
	$('.multi-level li').hover(function () {
		var currentUL = $(this).find('>ul.dropdown-menu');
		var parentUL = $(this).closest('ul');

		parentUL.find('>li.active').removeClass('active');
		parentUL.find('>li>.dropdown-menu.active').removeClass('active');

		var minH = parentUL.find('>li').map(function () {
			return $(this).height();
		}).toArray().reduce(function (a, b) {
			return a + b;
		});
		minH -= 5;

		currentUL.addClass('active')
		currentUL.css({
			'min-height': minH + 'px'
		});
		$(this).addClass('active');
	})

	$('#menu-icon').click(function () {
		$('.multi-level .active').removeClass('active');

	})

	$('.menu-mobi').click(function () {
		$(this).toggleClass('active');
	})

});

function InProgress($this) {
	$($this).attr('disabled', 'disabled');
}


// Create mask when click Menu
function maskMenu() {
	var ll = 1;
	$('.dropdown-toggle').click(function () {
		if (ll == 1) {
			$('.out-main').append('<div class="mask"></div>');
			$('.mask').height($('body').height() - $('.navbar').height());
			ll = 0;
			// console.log('aaa');
			$(document).on('click', function (e) {
				$('.out-main').find('.mask').remove();
				ll = 1;
			});

		} else {
			$('.out-main').find('.mask').remove();
			ll = 1;
			// console.log('bbb');
		}
	})
}

//Show hide chat
$(document).ready(function () {
	if ($(window).width() < 768) {
		$('.chat-title p').hide(500);
	}
	$('.chat-title').click(function () {
		$('.chat-cont').slideToggle(300);
		$('.chat-close').toggle();
		if ($(window).width() < 768) {
			$('.chat-title p').toggle();
		}
	})
})