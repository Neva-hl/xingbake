$(function(){
	//导航条菜单点击
	$(".me").click(function(){
		$(".mynav-primary").hide();
		$(".menu-nav").hide();
		$(".body-middle").fadeIn(200);
		
		$(this).hide();
		$(".closepic").show();
		$(".meclose").show();
		if ($(window).width()<1024) {
			$(".mymain").hide()
		}
//		$(window).resize(function(){
//			if ($(window).width()<1006) {
//				$("section").hide();
//			}else{
//				$("section").show();
//			}
//		})
	})
//关闭菜单
	$(".meclose").click(function(){
		$(".body-middle").fadeOut(200);
		$(".mynav-primary").show();
		$("section").show();
		$(".search").hide()
		$(".closepic").hide();
		$(".me").show();
		if ($(window).width()<=640) {
			$(".mobile").show();
			$(".myheader").hide();
		}
		setTimeout(function(){$(".menu-nav").show();},200)
	})	
	//饮料点击
	$(".menunav-ul>li").click(function(){
		$(this).addClass("menunav-one").siblings("li").removeClass("menunav-one");
		$(this).children().css('text-decoration','none');
	})
	//搜索菜单
	$(".btn-bottom").click(function(){
		if ($(window).width()<1024) {
				$(".mynav").hide();
				
			}
		$(".mobile").hide();
		$(".search").fadeIn(400);
		$(".mymain").fadeOut(400);
		$(this).hide();
		$(window).resize(function(){
			if ($(window).width()<1024) {
				$(".mynav").hide();
				
			}else{
				$(".mynav").show();
			}
		})
	})
	$(".search-top").click(function(){
		console.log($(window).width())
		if ($(window).width()<1007&&$(window).width()>622) {
			$(".mynav").show();
				
		}else if ($(window).width()<=622) {
			$(".mobile").show();
		}
		$(".search").fadeOut(400);
		$(".mymain").fadeIn(400);
		$(".btn-bottom").show();
	})
	//文字点击显示全部
	$(".menu-icon").click(function(){
		
		if ($(this).siblings("div").height()==48) {
			$(this).css({'transform':'rotate(180deg)'});
			$(this).siblings("div").css({'max-height':'1000px'});
			$(this).siblings("div").children(".menu-mask").css('height','0px')
		} else{
			$(this).css({'transform':'rotate(0deg)'});
			$(this).siblings("div").css({'max-height':'48px'});
			$(this).siblings("div").children(".menu-mask").css('height','100%')
		}
			
		
	})
	//登录页面
	
	//密码点击事件
	$(".login-input>span").click(function(){
		$(this).toggleClass("icon-pass");
	})
	//选择框点击事件
	$(".account-span>span").eq(0).click(function(){
		$(this).toggleClass("bg");
	})
	$(".login-input>input").focus(function(){
		
		$(this).siblings("label").css({'top':'5px','font-size':'14px','color':'rgba(0,0,0,.7)'})
		$(this).css({'border-color':'#00A862'})
	})
	$(".login-input>input").blur(function(){
		
		$(this).siblings("label").css({'top':'26px','font-size':'16px','color':'rgba(0,0,0,.45)'})
		$(this).css({'border-color':'rgba(0, 0, 0, 0.12)'})
	})
	//提示框
	$(".verify-change-code").hover(function(){
		$(".account-tip").show();
	},function(){
		$(".account-tip").hide();
	})
	$(".account-svg").hover(function(){
		$(".account-tip2").show();
	},function(){
		$(".account-tip2").hide();
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
		$(".meclose").show();
		if ($(window).width()<1024) {
			$(".mymain").hide()
		}
		if ($(window).width()<=640) {
			$(".body-middle").css('padding-left','20px')
		}
	})
	$(".account-close").click(function(){
		if ($(window).width()<=640) {
			$(".myheader").hide();
			$(".index-club").hide();
			$(".join").hide();
		}
	})

	
	
})