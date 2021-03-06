requirejs.config({
	baseUrl:"../js",
	paths:{
		jq:"jquery.min",
		swiper:"swiper.min",
		lazyload:"lazyload.min",
		page:"jPages",
		baiduT:'baiduTemplate',
		extend:'jquery.extend'
	},
	shim:{
		jq:{
			exports:"jQuery"
		},
		swiper:{
			exports:'Swiper',
			deps:['jq']
		},
		lazyload:{
			deps:['jq']
		},
		page:{
			deps:['jq']
		},
		baiduT:{
			exports:'baidu'
		},
		extend:{
			deps:['jq']
		}
	}
});

requirejs(['jq','swiper','baiduT','lazyload','page','extend'],function($,Swiper,baidu){
	//选项卡
	$(".tab").tab("active");
	//手风琴
	$(".box").on("mouseenter","li",function(){
			$(this).stop().animate({
				width:402
			}).siblings().stop().animate({
				width:133
			}).end().mouseleave(function(){
				$(this).find(".mask").fadeIn();
			}).find(".mask").fadeOut();

		}).on("mouseleave",function(){
			$(this).children().children().stop().animate({
				width:172
			});
		});
		//轮播图
		 var swiper = new Swiper('.swiper-container', {
		 	loop:true,
		    navigation: {
		    	nextEl: '.swiper-button-next',
		        prevEl: '.swiper-button-prev',
		    },
    });
    //baidutemplate
    $.get("http://maoyan.alipapa.vip/movie").done(function(data){
			$("#movies").html(baidu.template("temp",data));
			$("#pages").jPages({
				containerID:"container",
				first:"首页",
				last:"尾页",
				previous:"上一页",
				next:"下一页",
				perPage:5
			});
		});
});