$(function(){
//整体背景js控制开始
	var conHeight = $(window).height();
	$('.con').css('height',''+conHeight+'px');
	$(window).resize(function(){
		var conHeight = $(window).height();
		$('.con').css('height',''+conHeight+'px');
		
		//banner大小控制
		var myWidth = $(window).width();//'+myWidth+'
		$('page1 img').css('width',''+myWidth+'px');
		
		var myHeight = $(window).height();//'+myWidth+'
		$('page1 img').css('height',''+myHeight+'px');		
	});
	
	 var num = 0;
	$(document).mousewheel(function(event,delta){
		
		if(!$('.con').is(':animated')){
			if(delta == -1){
				num++;
				if(num > 4){
					num = 4;
				}
			}else if(delta == 1){
				num--;
				if(num < 0){
					num = 0;
				}
			}
			var bfb = num * -100;
			$('.con').css('-moz-transform','translateY('+bfb+'%)');
			$('.con').css('-webkit-transform','translateY('+bfb+'%)');
			$('.con').css('-ms-transform','translateY('+bfb+'%)');
			$('.con').css('-o-transform','translateY('+bfb+'%)');
			$('.yuanDian li').eq(num).addClass('current').siblings().removeClass('current');
			
			$('.navUl li').eq(num).addClass('nuCurrent').siblings().removeClass('nuCurrent');
			
			$('.con .page').eq(num).addClass('current').siblings().removeClass('current');
			  }
	});
	
	$('.yuanDian li').click(function(e) {
		$(this).addClass('current').siblings().removeClass('current');
		num = $(this).index();
		var bfb = num * -100;
		$('.con').css('-moz-transform','translateY('+bfb+'%)');
		$('.con').css('-ms-transform','translateY('+bfb+'%)');
		$('.con').css('-webkit-transform','translateY('+bfb+'%)');
		$('.con').css('-o-transform','translateY('+bfb+'%)');
		$('.con .page').eq(num).addClass('current').siblings().removeClass('current');
		$('.navUl li').eq($(this).index()).addClass('nuCurrent').siblings().removeClass('nuCurrent');	
	});
	
//整体背景js控制结束
	
//导航的控制
	
	$('.navUl li').click(function(e) {
		$(this).addClass('nuCurrent').siblings().removeClass('nuCurrent');
		$('.yuanDian li').eq($(this).index()).addClass('current').siblings().removeClass('current');
		num = $(this).index();
		var bfb = num * -100;
		$('.con').css('-moz-transform','translateY('+bfb+'%)');
		$('.con').css('-ms-transform','translateY('+bfb+'%)');
		$('.con').css('-webkit-transform','translateY('+bfb+'%)');
		$('.con').css('-o-transform','translateY('+bfb+'%)');
		$('.con .page').eq(num).addClass('current').siblings().removeClass('current');
			
	});		
//导航的结束
//bannner图控制自适应
	var myWidth = $(window).width();//'+myWidth+'
	$('page1 img').css('width',''+myWidth+'px');
	
	var myHeight = $(window).height();//'+myWidth+'
	$('page1 img').css('height',''+myHeight+'px');	
//bannner图控制自适应结束			

	
//小米呼吸灯轮播开始
	var timer01 = null;
	var num = 0;
	$('.page1 ul li:first').show();
	$('.page1 ol li').click(function(e) {
		
		$('.page1 ul li').eq(num).fadeOut();
		$('.page1 ul li').eq($(this).index()).fadeIn();
        $(this).addClass('pgolCurrent').siblings().removeClass('pgolCurrent');
		
		num = $(this).index();
		//$('.page1 ul li').eq($(this).index()).stop().fadeIn(500).siblings().fadeOut(100);
    });
	var timer01 = null;
	var myTimer = function(){
		num++;
		if (num > 5){
			num = 0;
		}
		$('.page1 ol li').eq(num).addClass('pgolCurrent').siblings().removeClass('pgolCurrent')
		$('.page1 ul li').eq(num).stop().fadeIn().siblings().fadeOut();
	};
	
	timer01 = setInterval(myTimer,3000);
	$('.page1 ol li').hover(function(e){
    	clearInterval(timer01);
	},function(){
		timer01 = setInterval(myTimer,3000);		
    });
//小米呼吸灯轮播结束

//第二页导航加一个音乐效果
// 		$('.nav02 ul li').mouseenter(function(e) {
// 			//鼠标滑过第几个li就播放第几个audio
// 			$('figure audio').eq($(this).index()).get(0).currentTime = 0;//多次触发的时候 把之前没支执行完的音乐恢复到0的位置
// 			$('figure audio').eq($(this).index()).get(0).play();
//         });
//第二页导航加一个音乐效果结束

//第二页第一个无缝滚动开始
		$('.pg2Up .pg2Up01').append($('.pg2Up .pg2Up01 li:eq(0),.pg2Up .pg2Up01 li:eq(1),.pg2Up .pg2Up01 li:eq(2),.pg2Up .pg2Up01 li:eq(3),.pg2Up .pg2Up01 li:eq(4)').clone(true));
		var timer02 = null;
		var num02 = 0;
		var fangXiang = -1;//全局变量 控制方向	
		var myTimer02 = function(){
			num02+=fangXiang;// num = num - 3;  '+num+'
			//如果num的值小于-1200 那么我们要让num的恢复到0
			if(num02 < -1680){
				num02 = 0;
			}else if(num02 > 0){
				num02 = -1680;
			}
			$('.pg2Up .pg2Up01').css('left',''+num02+'px');
		};
		
		timer02 = setInterval(myTimer02,30);
		
		$('.pg2Up .pg2Up01 li').hover(function(e) {
            $(this).siblings().stop().fadeTo(300,0.2);
			//清除定时器
			clearInterval(timer02);
        },function(){
			$(this).siblings().stop().fadeTo(300,1);
			//离开的时候再开启定时器
			clearInterval(timer02);
			timer02 = setInterval(myTimer02,30);
		});
//第二页第一个无缝滚动结束

//第二页第二个无缝滚动开始
		$('.pg2Up .pg2Up02').append($('.pg2Up .pg2Up02 li:eq(0),.pg2Up .pg2Up02 li:eq(1),.pg2Up .pg2Up02 li:eq(2),.pg2Up .pg2Up02 li:eq(3),.pg2Up .pg2Up02 li:eq(4)').clone(true));
		var timer04 = null;
		var num04 = 0;
		var fangXiang04 = 3;//全局变量 控制方向	
		var myTimer04 = function(){
			num04+=fangXiang04;// num = num - 3;  '+num+'
			//如果num的值小于-1200 那么我们要让num的恢复到0
			if(num04 < -1680){
				num04 = 0;
			}else if(num04 > 0){
				num04 = -1680;
			}
			$('.pg2Up .pg2Up02').css('left',''+num04+'px');
		};
		
		timer04 = setInterval(myTimer04,30);
		
		$('.pg2Up .pg2Up02 li').hover(function(e) {
            $(this).siblings().stop().fadeTo(300,0.2);
			//清除定时器
			clearInterval(timer04);
        },function(){
			$(this).siblings().stop().fadeTo(300,1);
			//离开的时候再开启定时器
			clearInterval(timer04);
			timer04 = setInterval(myTimer04,30);
		});
//第二页第二个无缝滚动结束

//vi展示开始
		$('.d,.dd').click(function(e) {
            $('.showVi').stop().fadeIn();
        });
		
		
		$('.showviTc').click(function(e) {
            $('.showVi').stop().fadeOut();
        });
		
		$('.showviUl li').mouseover(function(e) {
			var myHref = $(this).children('a').attr('href');
			var myTag01 = $('<div class="showGs"><img src="'+myHref+'" width="503" height="371"></div>');
			$(this).siblings().stop().fadeTo(300,0.3);
			$('.showviUl').after(myTag01);
			var myX = e.pageX + 10;
			var myY = e.pageY + 10;//   '+myX+'
			$('.showGs').hide().show(500).css({'left':''+myX+'px','top':''+myY+'px'});
        }).mouseout(function(){
			$('.showGs').remove();
			$(this).siblings().stop().fadeTo(300,1);
		})
//vi展示结束

//网页展示开始

		var wytimer01 = null;
		var wynum = 0;//全局变量是轮播图的灵魂
		$('.f,.aa').click(function(e) {
            $('.showWangye').stop().fadeIn();
        });
			
		$('.showwangyeTc').click(function(e) {
            $('.showWangye').stop().fadeOut();
        });
		$('.wangyezsUl02 li  ').click(function(e) {
            $(this).addClass('showwyLic').siblings().removeClass('showwyLic');
            $('.wangyezsUl01 li ').eq($(this).index()).stop().fadeIn().siblings().fadeOut();
			wynum = $(this).index();
        });

		var wymyTimer = function(){
			//先控制ol的li
			wynum++;
			if(wynum > 6){
				wynum = 0;
				}
		$('.wangyezsUl01 li ').eq(wynum).stop().fadeIn().siblings().fadeOut();
		$('.wangyezsUl02 li ').eq(wynum).addClass('showwyLic').siblings().removeClass('showwyLic');
		};
		wytimer01 = setInterval(wymyTimer,2000);
		
		$('.wangyezsUl01 li   ').hover(function(e) {
        	clearInterval(wytimer01);    
        },function(){
			wytimer01 = setInterval(wymyTimer,2000);
		});
		$('.wangyezsUl02 li  ').hover(function(e) {
        	clearInterval(wytimer01);    
        },function(){
			wytimer01 = setInterval(wymyTimer,2000);
		});		
		
//网页展示结束

//banner展示开始
		$('.e,.ee').click(function(e) {
            $('.showBanner').stop().fadeIn();
        });
		
		
		$('.showbannerTc').click(function(e) {
            $('.showBanner').stop().fadeOut();
        });
		$('.b1').mouseover(function(e) {
			var mybHref = $(this).children('a').attr('href');
			var mybTag01 = $('<div class="big01"><img src="images/banner/01.jpg" width="1200" ></div>');
			$(this).siblings().stop().fadeTo(300,0.3);
			$('.bannerUl01').after(mybTag01);
			var mybX = e.pageX + 10;
			var mybY = e.pageY + 10;//   '+myX+'
			$('.big01').hide().show(500).css({'left':''+mybX+'px','top':''+mybY+'px'});
        }).mouseout(function(){
			$('.big01').remove();
			$(this).siblings().stop().fadeTo(300,1);
		});
		
			$('.b2').mouseover(function(e) {
			var mybHref = $(this).children('a').attr('href');
			var mybTag02 = $('<div class="big02"><img src="images/banner/02.jpg" width="1200" ></div>');
			$(this).siblings().stop().fadeTo(300,0.3);
			$('.bannerUl01').after(mybTag02);
			var mybX = e.pageX + 10;
			var mybY = e.pageY + 10;//   '+myX+'
			$('.big02').hide().show(500).css({'left':''+mybX+'px','top':''+mybY+'px'});
        }).mouseout(function(){
			$('.big02').remove();
			$(this).siblings().stop().fadeTo(300,1);
		});
		
			$('.b3').mouseover(function(e) {
			var mybHref = $(this).children('a').attr('href');
			var mybTag03 = $('<div class="big03"><img src="images/banner/03.jpg" width="1200" ></div>');
			$(this).siblings().stop().fadeTo(300,0.3);
			$('.bannerUl01').after(mybTag03);
			var mybX = e.pageX - 310;
			var mybY = e.pageY + 10;//   '+myX+'
			$('.big03').hide().show(500).css({'left':''+mybX+'px','top':''+mybY+'px'});
        }).mouseout(function(){
			$('.big03').remove();
			$(this).siblings().stop().fadeTo(300,1);
		});
		
			$('.b4').mouseover(function(e) {
			var mybHref = $(this).children('a').attr('href');
			var mybTag04 = $('<div class="big04"><img src="images/banner/04.jpg" width="1200" ></div>');
			$(this).siblings().stop().fadeTo(300,0.3);
			$('.bannerUl01').after(mybTag04);
			var mybX = e.pageX + 100;
			var mybY = e.pageY - 110;//   '+myX+'
			$('.big04').hide().show(500).css({'left':''+mybX+'px','top':''+mybY+'px'});
        }).mouseout(function(){
			$('.big04').remove();
			$(this).siblings().stop().fadeTo(300,1);
		});
		
			$('.b5').mouseover(function(e) {
			var mybHref = $(this).children('a').attr('href');
			var mybTag05 = $('<div class="big05"><img src="images/banner/05.jpg" width="1200"></div>');
			$(this).siblings().stop().fadeTo(300,0.3);
			$('.bannerUl01').after(mybTag05);
			var mybX = e.pageX + 100;
			var mybY = e.pageY - 110;// //   '+myX+'
			$('.big05').hide().show(500).css({'left':''+mybX+'px','top':''+mybY+'px'});
        }).mouseout(function(){
			$('.big05').remove();
			$(this).siblings().stop().fadeTo(300,1);
		});
		
			$('.b6').mouseover(function(e) {
			var mybHref = $(this).children('a').attr('href');
			var mybTag06 = $('<div class="big06"><img src="images/banner/06.jpg" width="1200" ></div>');
			$(this).siblings().stop().fadeTo(300,0.3);
			$('.bannerUl01').after(mybTag06);
			var mybX = e.pageX - 810;
			var mybY = e.pageY - 210;// //   '+myX+'
			$('.big06').hide().show(500).css({'left':''+mybX+'px','top':''+mybY+'px'});
        }).mouseout(function(){
			$('.big06').remove();
			$(this).siblings().stop().fadeTo(300,1);
		});
		
			$('.b7').mouseover(function(e) {
			var mybHref = $(this).children('a').attr('href');
			var mybTag07 = $(' <div class="big07"><img src="images/banner/07.jpg" width="1200" ></div>');
			$(this).siblings().stop().fadeTo(300,0.3);
			$('.bannerUl01').after(mybTag07);
			var mybX = e.pageX + 10;
			var mybY = e.pageY - 110;//   '+myX+'
			$('.big07').hide().show(500).css({'left':''+mybX+'px','top':''+mybY+'px'});
        }).mouseout(function(){
			$('.big07').remove();
			$(this).siblings().stop().fadeTo(300,1);
		});
			
			
			$('.b8').mouseover(function(e) {
			var mybHref = $(this).children('a').attr('href');
			var mybTag08 = $(' <div class="big08"><img src="images/banner/08.jpg" width="1200" height="195"></div>');
			$(this).siblings().stop().fadeTo(300,0.3);
			$('.bannerUl01').after(mybTag08);
			var mybX = e.pageX + 10;
			var mybY = e.pageY - 110;//   '+myX+'
			$('.big08').hide().show(500).css({'left':''+mybX+'px','top':''+mybY+'px'});
        }).mouseout(function(){
			$('.big08').remove();
			$(this).siblings().stop().fadeTo(300,1);
		});
					
			$('.b9').mouseover(function(e) {
			var mybHref = $(this).children('a').attr('href');
			var mybTag07 = $(' <div class="big07"><img src="images/banner/09.jpg" width="1200" ></div>');
			$(this).siblings().stop().fadeTo(300,0.3);
			$('.bannerUl01').after(mybTag07);
			var mybX = e.pageX + 10;
			var mybY = e.pageY - 110;//   '+myX+'
			$('.big07').hide().show(500).css({'left':''+mybX+'px','top':''+mybY+'px'});
        }).mouseout(function(){
			$('.big07').remove();
			$(this).siblings().stop().fadeTo(300,1);
		});					
			$('.b10').mouseover(function(e) {
			var mybHref = $(this).children('a').attr('href');
			var mybTag07 = $(' <div class="big07"><img src="images/banner/10.jpg" width="1200" ></div>');
			$(this).siblings().stop().fadeTo(300,0.3);
			$('.bannerUl01').after(mybTag07);
			var mybX = e.pageX + 10;
			var mybY = e.pageY - 110;//   '+myX+'
			$('.big07').hide().show(500).css({'left':''+mybX+'px','top':''+mybY+'px'});
        }).mouseout(function(){
			$('.big07').remove();
			$(this).siblings().stop().fadeTo(300,1);
		});
				
				

//banner展示结束

//瀑布流展示开始
		$('.c,.cc').click(function(e) {
            $('.showPpl').stop().fadeIn();
        });
		$('.showpplTc').click(function(e) {
            $('.showPpl').stop().fadeOut();
        });
		
//瀑布流展示结束

//多媒体用户界面展示开始
    $('.h,.hh').click(function(e) {
        $('.showXm').stop().fadeIn();
    });


    $('.showxmTc').click(function(e) {
        $('.showXm').stop().fadeOut();
    });

    $('.showXmUl li').mouseover(function(e) {
        var myHref = $(this).children('a').attr('href');
        var myTag01 = $('<div class="showGs"><img src="'+myHref+'" width="503" height="503"></div>');
        $(this).siblings().stop().fadeTo(300,0.3);
        $('.showXmUl').after(myTag01);
        var myX = e.pageX + 10;
        var myY = e.pageY + 10;//   '+myX+'
        $('.showGs').hide().show(500).css({'left':''+myX+'px','top':''+myY+'px'});
    }).mouseout(function(){
        $('.showGs').remove();
        $(this).siblings().stop().fadeTo(300,1);
    })
//多媒体用户界面展示结束
//console
	console.log("                       (0 0)");
	console.log("   +-------------oOO----(_)----------------+");
	console.log("   |        	      欢迎光临              |");
	console.log("   |        	      我是:陈洁           |");
	console.log("   |   求职意向：ui设计 (正在找工作)  |");
	console.log("   |   我的个人网站- https://mr-lee0318.github.io/myWebsite/    |");
	console.log("   |   电话:18719260318               |");
	console.log("   |   邮箱:1024544146@qq.com               |");
	console.log("   +--------------------------oOO----------+");
	console.log("                      |__|__|");
	console.log("                       || ||");
	console.log("                      ooO Ooo");
    
})









