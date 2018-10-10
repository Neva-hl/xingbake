$(function(){
	//导航条菜单点击
	$(".me").click(function(){
		$(".mynav-primary").hide();
		$(".mass").hide();
		$(".body-middle").slideDown(200);
		
		$(this).hide();
		$(".closepic").show();
		$(".meclose").show();
		
		$(window).resize(function(){
		if ($(window).width()<1006) {
			$("section").hide();
		}else{
			$("section").show();
		}
	})
		
	})
//关闭菜单
	$(".meclose").click(function(){
		$(".mynav-primary").show();
		$(".mass").show();
		$(".body-middle").slideUp(200);
		$("section").show();
	
		$(".closepic").hide();
		$(".me").show();
		if ($(window).width()<=640) {
			$(".mobile").show();
			$(".myheader").hide();
		}
	})
	//轮播图右边按钮
	$(".carousel>.right").hover(function(){
		$(this).animate({'right':'20px'},200);
	},function(){
		$(this).animate({'right':'24px'},200);
	})
	//最后一个轮播图
	$(".lesson-left").hover(function(){
		$(this).animate({'left':'26px'},200)
	},function(){
		$(this).animate({'left':'30px'},200)
	})
	$(".lesson-right").hover(function(){
		$(this).animate({'right':'26px'},200)
	},function(){
		$(this).animate({'right':'30px'},200)
	})
	$(".lesson-right").click(function(){
		$(".lesson-left").stop().fadeIn(200);
		var swidth = $(".lesson-scroll").width();
		var width = (1048-swidth)/2;
		var dwidth = 1048-swidth;
		//web
		if ($(window).width()>=1007) {
			if ($(".lesson-scroll>ul").offset().left>290) {
			$(".lesson-scroll>ul").animate({'margin-left':-(1240-swidth)/2+'px'},1000);
			}else{
				$(".lesson-scroll>ul").animate({'margin-left':-(1240-swidth)+'px'},1000);
				setTimeout(function(){$(".lesson-right").fadeOut(200)},400);
			}
		}
		//pad
		console.log($(window).width())
		console.log($(".lesson-scroll>ul").offset().left);
		if ($(window).width()<=1006&&$(window).width()>623) {
			if ($(".lesson-scroll>ul").offset().left>=0) {
			$(".lesson-scroll>ul").animate({'margin-left':-(1240-swidth)/2+'px'},1000);
			} else{
				$(".lesson-scroll>ul").animate({'margin-left':-(1240-swidth)+'px'},1000);
				setTimeout(function(){$(".lesson-right").fadeOut(200)},400);
			}
		}
		//phone
//		console.log($(".lesson-scroll").width())
		
//		console.log($(".lesson-scroll>ul").offset().left);
		if ($(window).width()<=623){
			if ($(".lesson-scroll>ul").offset().left>5) {
			$(".lesson-scroll>ul").animate({'margin-left':-width+'px'},1000);
			} else{
				$(".lesson-scroll>ul").animate({'margin-left':-dwidth+'px'},1000);
				setTimeout(function(){$(".lesson-right").fadeOut(200)},400);
			}
		}
		
		
	})
	$(".lesson-left").click(function(){
		
		var swidth = $(".lesson-scroll>ul").width();
		var width = (1048-swidth)/2;
		$(".lesson-right").stop().fadeIn(200);
		//web
		console.log($(".lesson-scroll>ul").offset().left);
		if ($(window).width()>=1007) {
//			var swidth = $(".lesson-scroll>ul").offset().left/4;

			if ($(".lesson-scroll>ul").offset().left<=-230) {
//				console.log((swidth));
				$(".lesson-scroll>ul").animate({'margin-left':-(1240-swidth)/2+'px'},1000)
			} else{
				$(".lesson-scroll>ul").animate({'margin-left':'0px'},1000);
				setTimeout(function(){$(".lesson-left").fadeOut(200)},400)
			}
		}
		//pad
		
		
		if ($(window).width()<=1006&&$(window).width()>640) {
			
			if ($(".lesson-scroll>ul").offset().left<=-233) {
//				console.log(-(1240-swidth)/2)
			$(".lesson-scroll>ul").animate({'margin-left':-((1240-swidth)/2)+'px'},1000);
			} else{
				$(".lesson-scroll>ul").animate({'margin-left':'0px'},1000);
				setTimeout(function(){$(".lesson-left").fadeOut(200)},400);
			}
		}
		//phone
		
		
		
		if ($(window).width()<=640){
			if ($(".lesson-scroll>ul").offset().left<=-426) {
			$(".lesson-scroll>ul").animate({'margin-left':-width+'px'},1000);
			} else{
				$(".lesson-scroll>ul").animate({'margin-left':'0px'},1000);
				setTimeout(function(){$(".lesson-left").fadeOut(200)},400);
			}
		}
		
		
	})
	//更多
	$(".more").click(function(){
		$(".mynav-primary").hide();
		$(".menu-nav").hide();
		$(".body").show();
		$(".body-middle").fadeIn(200);
		$(".mobile").hide();
		$(".myheader").show();
		$(".closepic").show();
		$(".meclose").show();
		$(".foot").show();
		$(".me").hide();
		$(".mass").hide();
		$(".meclose").show();
		if ($(window).width()<1024) {
			$(".mymain").hide()
		}
		if ($(window).width()<=640) {
			$(".body-middle").css('padding-left','20px')
		}
	})
	
	
	
	
	
	
	
})