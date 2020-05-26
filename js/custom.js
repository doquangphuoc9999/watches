$(document).ready(function() {
    //home slide
    $('#home-main-silder').slick({
        fade: true,
        prevArrow: "<a href='#' class='slick-arrow slick-prev'></a>",
        nextArrow: "<a href='#' class='slick-arrow slick-next'></a>",
        autoplay: false,
        autoplaySpeed: 3000,
    });
    //quick view slide
    $("#zoom-gallery").owlCarousel({
        items: 1,
        itemsDesktop: [1000, 1],
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: false,
        navigation: true,
        pagination: true,
        autoPlay: false,
        slideSpeed: 1000,
        paginationSpeed: 1000,
        navigationText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>']
    });
    // brand slide
    $('#home-brand-slider').slick({
        prevArrow: "<a href='#' class='slick-arrow slick-prev'></a>",
        nextArrow: "<a href='#' class='slick-arrow slick-next'></a>",
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});

// Tab
function openProTabs(evt, cityName) {
    var i, pro_tabcontent, pro_tablinks;
    pro_tabcontent = document.getElementsByClassName("pro-tabcontent");
    for (i = 0; i < pro_tabcontent.length; i++) {
        pro_tabcontent[i].style.display = "none";
    }
    pro_tablinks = document.getElementsByClassName("pro-tablinks");
    for (i = 0; i < pro_tablinks.length; i++) {
        pro_tablinks[i].className = pro_tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

// show hình ảnh page product detail
$(document).ready(function() {
    if ($('#zoom').length) {
        $('#zoom').ezPlus({
            zoomWindowFadeIn: 500,
            zoomLensFadeIn: 500,
            gallery: 'gallery_01',
            imageCrossfade: true,
            zoomWindowWidth: 411,
            zoomWindowHeight: 274,
            zoomWindowOffsetX: 10,
            scrollZoom: true,
            cursor: 'pointer',
            galleryActiveClass: 'active',
            responsive: true,
            loadingIcon: true
        });
        $('#zoom').bind('click', function(e) {
            var ez = $('#zoom').data('ezPlus');
            $.fancyboxPlus(ez.getGalleryList());
            return false;
        });
    }
});

jQuery(document).ready(function() {
    var offset = 220;
    var duration = 500;
    jQuery('#back-to-top').fadeOut(duration);
    jQuery(window).scroll(function() {
        if (jQuery(this).scrollTop() > offset) {
            jQuery('#back-to-top').fadeIn(duration);
        } else {
            jQuery('#back-to-top').fadeOut(duration);
        }
    });
    jQuery('#back-to-top').click(function(event) {
        event.preventDefault();
        jQuery('html, body').animate({
            scrollTop: 0
        }, duration);
        return false;
    });
    window.onscroll = changePos;

    function changePos() {
        var header = $("#header");
        var headerheight = $("#header").height();
        if (window.pageYOffset > headerheight) {
            header.addClass('scrolldown');
        } else {
            header.removeClass('scrolldown');
        }
    }
});

// js click panel toggle
var acc = document.getElementsByClassName("accordion");
var i;
for (i = 0; i < acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    }
}
if ($(window).width() > 992) {
    $('.accordion.col-sb-trigger').trigger('click');
}

// show giỏ hàng
$(function () {

    var box1 = document.querySelector('.desktop-cart-wrapper .quickview-cart');

	function show1() {
		$(".cart-overlay1").addClass('open');	
		box1.style.display = 'block';	
	}

	function hide1() {
		$(".cart-overlay1").removeClass('open');	
		box1.style.display = 'none';	
	}

	$(".desktop-cart-wrapper .btnCloseQVCart").click(function(){
		hide1();
	});

	var outside1 = function(event) {
		if (!box1.contains(event.target)) {
			hide1();
			this.removeEventListener(event.type, outside1);
		}
	}

	document.querySelector('.desktop-cart-wrapper > a').addEventListener('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		show1();
		document.addEventListener('click', outside1);
	});
});