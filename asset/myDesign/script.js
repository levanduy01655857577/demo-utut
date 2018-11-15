// find macbook
function testMacbook(){
  var macbook = navigator.platform.match(/(Mac)/i) ? true : false;
  if(macbook) alert(11111);
}

testMacbook();

//preloader
$(window).on('load', function(){
  $('#status').fadeOut();  
  $('#preloader').delay(500).fadeOut('slow');
  $('body').delay(500).css({'overflow':'visible'});
})

$(document).ready(function(){
	// set font size slide
	function setFontsizeBtnSlide(){		
		var fontSize = $(window).width() / 24;
		var widthWindow = $(window).width();
		if(widthWindow > 767) fontSize = $(window).width() / 80;
		$('.slide a').attr('style', 'font-size:'+ fontSize +'px');
	}

	if($('.slide').length){
		setFontsizeBtnSlide();
		$(window).resize(function(){
			setFontsizeBtnSlide();
		});
	}

	// set font size title item
	function setFontsizeTitle(){
		var fontSize = $(window).width() / 25;
		var widthWindow = $(window).width();
		if(widthWindow > 767) fontSize = $(window).width() / 100;
		$('.titleItem').attr('style', 'font-size:'+ fontSize +'px');
	}

	if($('.titleItem').length){
		setFontsizeTitle();
		$(window).resize(function(){
			setFontsizeTitle();
		});
	}

	// set font size descirtion in highlights
	function fontSizeDesciptionHighlight(){
		var fontSize = $(window).width() / 30;
		var widthHeightDot = $(window).width() / 20;
		var widthWindow = $(window).width();
		if(widthWindow > 767) fontSize = $(window).width() / 100;
		$('.highLights .description, .highLights .slideNews .showSlide .imgSlide .titleNews').attr('style', 'font-size:'+ fontSize +'px');
		$('.highLights .wrapContent .slideNews .showSlide .slick-dots li button').attr('style', 'width:'+ widthHeightDot +'px; height:'+ widthHeightDot +'px;');
	}
	if($('.highLights').length){
		$('.highLights .slideNews .showSlide').slick({
			fade: false,
			arrows: false,
			dots: false,
			autoplay: true,
			infinite: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			speed: 1000,
			slidesToShow: 2,
			slidesToScroll: 1,
			responsive: [{
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        dots: true,
		        fade: true,
		      }
		    }]
		});

		fontSizeDesciptionHighlight();
		$(window).resize(function(){
			fontSizeDesciptionHighlight();
		});

		var widthWindow = $(window).width();
		if(widthWindow > 767){
			var countImgSlide = $('.highLights .slideNews .showSlide .imgSlide').length;
			var marginLeftImgSlide =  8 * 1 / countImgSlide;
			var paddingLeftShowSlide = 8 * 2 / countImgSlide;
			$('#styleImgSlide').html('<style type="text/css">.highLights .wrapContent .slideNews .showSlide { padding-left:'+ paddingLeftShowSlide +'%; } .highLights .wrapContent .slideNews .showSlide .imgSlide { margin-left:'+ marginLeftImgSlide +'%; }</style>');
		}
	}

	// set font size btn order
	function setFontsizeBtnOrder(){
		var fontSize = $(window).width() / 20;
		var widthWindow = $(window).width();
		if(widthWindow > 767) fontSize = $(window).width() / 100;
		$('.order .wrapListBtn li a .text').attr('style', 'font-size:'+ fontSize +'px');
	}

	if($('.order .wrapListBtn').length){
		setFontsizeBtnOrder();
		$(window).resize(function(){
			setFontsizeBtnOrder();
		});
	}

	// set font size text footer
	function setFontsizeTextFooter(){
		var fontSize = $(window).width() / 30;
		var widthWindow = $(window).width();
		if(widthWindow > 767) fontSize = $(window).width() / 100;
		$('.footer .textFooter, .footer .wrapContent .wrapFanpage li.titleFanpage').attr('style', 'font-size:'+ fontSize +'px');
	}

	if($('.footer .textFooter').length){
		setFontsizeTextFooter();
		$(window).resize(function(){
			setFontsizeTextFooter();
		});
	}

	// set font size text footer second
	function setFontsizeTextFooterSecond(){
		var fontSize = $(window).width() / 30;
		var widthWindow = $(window).width();
		if(widthWindow > 767) fontSize = $(window).width() / 120;
		$('.footerSecond .setFontSize').attr('style', 'font-size:'+ fontSize +'px');
	}

	if($('.footerSecond .setFontSize').length){
		setFontsizeTextFooterSecond();
		$(window).resize(function(){
			setFontsizeTextFooterSecond();
		});
	}

	// set font size menu vertical
	function setFontsizeMenuVertical(){
		var fontSize = $(window).width() / 24;
		var fonSize2 = fontSize;
		var widthWindow = $(window).width();
		if(widthWindow > 767){
			fontSize = $(window).width() / 70;
			var fonSize2 = $(window).width() / 100;
		}
		$('.menuVertical .wrapListBtn .wrapBtn a').attr('style', 'font-size:'+ fontSize +'px');
		$('.menuVertical .wrapListBtn .wrapListbtn ul li a').attr('style', 'font-size:'+ fonSize2 +'px');
	}

	if($('.menuVertical').length){
		setFontsizeMenuVertical();
		$(window).resize(function(){
			setFontsizeMenuVertical();
		});

		$('.menuVertical.menuDropDown .wrapBtn a').click(function(){
			$('.menuVertical.menuDropDown .wrapBtn .btnCloseMenu').toggleClass('showBtnCloseMenu');
		});

		$('.menuVertical.menuDropDown .wrapBtn .btnCloseMenu').click(function(){
			$(this).toggleClass('showBtnCloseMenu');
		});
	}

	// set font size btn view more list item menu
	function setFontsizeListItemMenu(){
		var fontSize = $(window).width() / 25;
		var widthWindow = $(window).width();
		if(widthWindow > 767) fontSize = $(window).width() / 100;
		$('.listItemPageMenu .listItem .titleList .text, .listItemPageMenu .listItem .hooks .btnViewMore, .listItemPageMenu .listItem .item .wrapTitle .title, .listItemPageMenu .listItem .item .wrapTitle .description, .listItemPageMenu .listItem .item .wrapBtnOrder').attr('style', 'font-size:'+ fontSize +'px');
	}

	if($('.listItemPageMenu').length){
		setFontsizeListItemMenu();
		$(window).resize(function(){
			setFontsizeListItemMenu();
		});
	}

	// set font size btn action on popup menu detail
	function setFontsizeBtnActionMenuDtail(){
		var fontSize = $(window).width() / 30;
		var widthWindow = $(window).width();
		if(widthWindow > 767) fontSize = $(window).width() / 70;
		$('#modalDetailMenu .modal-body .btnAction .text').attr('style', 'font-size:'+ fontSize +'px');
	}

	if($('#modalDetailMenu .modal-body .btnAction .text').length){
		setFontsizeBtnActionMenuDtail();
		$(window).resize(function(){
			setFontsizeBtnActionMenuDtail();
		});
	}

	// start slide map
	if($('#showSlideMap').length){
		$('#showSlideMap').slick({
			fade: true,
			arrows: false,
			dots: true,
			autoplay: true,
			infinite: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			speed: 1000,
		});
	}

	// set font size page location detail
	function setFontsizeLocationDetail(){
		var fontSize = $(window).width() / 25;
		var widthWindow = $(window).width();
		if(widthWindow > 767) fontSize = $(window).width() / 90;
		$('.listItemLocation .formChat .titleFrm, .listItemLocation .formChat .btnSend, .itemContactUs .wrapListItem .listItem .titleList .text, .itemDetailLocation .wrapListItem .listItem .titleList .text, .modalDetailLocation .listItemPageMenu .wrapListItem .listItem .titleList a .text').attr('style', 'font-size:'+ fontSize +'px');
	}

	if($('.listItemLocation .formChat').length){
		setFontsizeLocationDetail();
		$(window).resize(function(){
			setFontsizeLocationDetail();
		});
	}

	// set img item
	if($('.bgDestopMobile').length){	
		function setImgBgItem(){
			$('.bgDestopMobile').each(function(){
				var widthWindow = $(window).width();
				var srcImg = '';

				if(widthWindow > 767) srcImg = $(this).attr('imgdestop');
				else srcImg = $(this).attr('imgmobile');

				$(this).html('<img src="'+ srcImg +'" />');
			});
		}

		setImgBgItem();

		$(window).resize(function(){
			setImgBgItem();
		});		
	}	

	// start slide item menu
	if($('.slideListItemMenu').length){
		$('.slideListItemMenu').slick({
			fade: false,
			arrows: false,
			dots: false,
			autoplay: true,
			infinite: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			speed: 1000,
			slidesToShow: 4,
			slidesToScroll: 1,
			responsive: [{
		      breakpoint: 768,
		      settings: {
		        slidesToShow: 1,
		        fade: true,
		      }

		    }]
		});
	}

	// star slide detail highlight
	if($('#slideDetailHighLight').length){
		$('#slideDetailHighLight').slick({
			fade: true,
			arrows: false,
			dots: true,
			autoplay: true,
			infinite: true,
			pauseOnHover: false,
			pauseOnFocus: false,
			speed: 1000,
		});
	}
});