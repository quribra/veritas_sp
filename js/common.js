
		$(function() {


	//viewport出し分け
	var str = ($(window).width() <= 640) ? 'width=device-width,initial-scale=1.0,minimum-scale=1.0,user-scalable=yes'
			 :  'width=1100';
	$("meta[name='viewport']").attr('content', str);
	

	//スマホ用各メニュー
	if(navigator.userAgent.match(/(iPhone|iPad|Android)/)){
		//スマフォ用ヘッダメニュー表示(プルダウン)　メニュー表示位置テレコ  
		$('.hd_nav_inner .smt_menu').on('click',function() {
			$(".hd_nav_inner .hd_nav:not(:animated)").fadeIn("normal");
			$('.hd_main').prependTo('.hd_subnav');
		});
		$('.hd_nav_inner .smt_menu').on('click',function() {
			$(".hd_nav_inner .hd_nav:not(:animated)").fadeOut("normal");
		});
		$('.hd_nav_inner .close').on('click',function() {
			$(".hd_nav_inner .hd_nav").fadeOut("normal");
		});
		$('.hd_nav_inner li').on('click',function() {
			$(".hd_nav_inner .hd_nav").fadeOut("normal");
		});

		//サイドメニュー
		$('.smt_side').on('click',function() {
			$("#sidemenu:not(:animated)").fadeIn("normal");
		}); 
		$('.smt_side').on('click',function() {
			$("#sidemenu:not(:animated)").fadeOut("normal");
		});
		$('.close_side').on('click',function() {
			$("#sidemenu").fadeOut("normal");
		});

		//アコーディオン要素
		var accordionItem=$('.ac_warp');

		//active要素を指定して開く
		var no=0;

		//クリックしたときに
		accordionItem.find('.ac_open').click(function () {
			//切り替え
			$(this).toggleClass('active');
			//対象、残りともslideToggle
			$(this).next('.ac_co').slideToggle('slow')
							.siblings('.ac_co:visible').slideToggle('slow');
			$(this).siblings('.ac_co').removeClass('active');
		});

		$('.closed_ft, .closed_ft2').on('click',function() {
			$(".ac_co").slideToggle('slow');
		});        
	}



	/* プルダウンメニュー
	======================================== */
	//アニメーション速度設定
	var Speed = "200";

	//初期表示設定
	$("#dropdownmenu li ul,#dropdownmenu2 li ul").css("display","none");

	//ホバーイベント
	$("#dropdownmenu li,#dropdownmenu2 li").hover(
		function(){
			$(">ul:not(:animated)",this).css("visibility","visible").fadeIn(Speed);
			$(">ul >li:not(:animated)",this).css("display","none").slideDown(Speed);
			$(">ul >li ul",this).css("visibility","hidden");
		},
		function(){
			$(">ul",this).fadeOut(Speed,function(){
				$("ul",this).css("visibility","hidden");
			});
			$(">ul >li",this).slideUp(Speed);
		}
	);


	/* ロールオーバー
	======================================== */
	if ( !(_judgeSpTab()).isSp) {
		$(document).on("mouseover", "a.filter, img.filter", function(e) {
				$(this).fadeTo(150,0.7);
		}).on("mouseout", "a.filter, img.filter", function(e) {
				$(this).fadeTo(200,1);
		});
	}

	//スマフォ判定
	function _judgeSpTab() {
		var ua = {};
		ua.name = window.navigator.userAgent.toLowerCase();
		ua.isiPhone = ua.name.indexOf('iphone') >= 0;
		ua.isiPod = ua.name.indexOf('ipod') >= 0;
		ua.isiPad = ua.name.indexOf('ipad') >= 0;
		ua.isiOS = (ua.isiPhone || ua.isiPod || ua.isiPad);
		ua.isAndroid = ua.name.indexOf('android') >= 0;
		//
		ua.isTab = (ua.isiPad || (ua.isAndroid && ua.name.indexOf('mobile') < 0));
		ua.isSp = (ua.isiPhone || ua.isiPod || (ua.isAndroid && ua.name.indexOf('mobile') >= 0));
		return(ua);
	}



	var topBtn = $('#page-top');
	
	topBtn.hide();
	//スクロールが100に達したらボタン表示
	$(window).scroll(function() {
		if ($(this).scrollTop() > 500) {
			topBtn.fadeIn();
		}
		else {
			topBtn.fadeOut();
		}
		
			
		
	});
	//スクロールしてトップ
	topBtn.click(function () {
		$('body,html').animate({
			scrollTop: 0
		}, 500);
		return false;
	});
			
			
			//slick-box
    $('.slick-box').slick({
          infinite: true,
          dots:true,
		autoplay: true, 
		autoplaySpeed: 3000, //オートプレイの切り替わり時間
		speed: 2000, // 切り替わりのスピード
          slidesToShow: 2,
          slidesToScroll: 1,
		
responsive: [{
               breakpoint: 750,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
						 
               }
          }
          ]
     });
			
			

	//slick-box
    $('.slick-box2').slick({
          infinite: true,
          dots:false,
		autoplay: false, 
		
		speed: 500, // 切り替わりのスピード
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [{
               breakpoint: 750,
                    settings: {
                         slidesToShow: 1,
                         slidesToScroll: 1,
						 centerMode:true,
						centerPadding: '10%',
						
               }
          }
          ]
     });
			
//TOP animation	
  
    window.onload = function() {
  scroll_effect();

  $(window).scroll(function(){
   scroll_effect();
  });

  function scroll_effect(){
   $('.effect-fadein, .effect-fadein2').each(function(){
    var elemPos = $(this).offset().top;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
    if (scroll > elemPos - windowHeight){
     $(this).addClass('effect-scroll');
    }
   });
  }
};
	 
//ac1
$(function(){
 
    //.accordion1の中のp要素がクリックされたら
	$('.accordion1 p').click(function(){
 
		//クリックされた.accordion1の中のp要素に隣接するul要素が開いたり閉じたりする。
		$(this).next('ul').slideToggle();
 
	});
});
	
			
			
			
			
//ac2
$(function(){
$("#acMenu dt").on("click", function() {
$(this).next().slideToggle();
});
});


//2層 ac
$(function(){
	$(".accordion li a").on("click", function() {
		$(this).next().slideToggle();	
		// activeが存在する場合
		if ($(this).children(".accordion_icon").hasClass('active')) {			
			// activeを削除
			$(this).children(".accordion_icon").removeClass('active');				
		}
		else {
			// activeを追加
			$(this).children(".accordion_icon").addClass('active');			
		}			
	});
});
	
	//カルーセル
	var $last = $(".anime_pic");
	$last.css({"margin-left": (- $last.width() / 2) + "px"});
	setInterval(function() {
			$bar = $(".anime_pic:first");
			var w = $bar.width();
			var left = parseInt($bar.css("margin-left"));
			if (--left < -w / 4) {
				$("img:first-child", $bar).remove().appendTo($bar);
				left = 0;
			}
			$bar.css({"margin-left": left + "px"})
			//
	}, 20);


});