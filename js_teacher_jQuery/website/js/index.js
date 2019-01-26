requirejs.config({
	baseUrl:"js/plugins",
	paths:{
		baiduT:"baiduTemplate",
		page:"jPages",
		extend:"jquery.extend",
		jquery:"jquery.min",
		lazy:"lazyload.min",
		swiper:"swiper.min"
	},
	shim:{
		baiduT:{
			exports:"baidu"
		},
		page:{
			deps:["jquery"]
		},
		extend:{
			deps:["jquery"]
		},
		jquery:{
			exports:"jQuery"
		},
		lazy:{
			deps:["jquery"]
		},
		swiper:{
			exports:"Swiper",
			deps:["jquery"]
		}
	}
});

requirejs(["jquery","swiper","baiduT","extend","lazy","page"],function($,sw,bd){
	//轮播图
	var mySwiper = new sw ('.swiper-container', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		scrollbar: {
			el: '.swiper-scrollbar',
		}
	});
//二级菜单
	$(".menu").tab("","mouseenter");

	$(".menu").hover(function(){
		$(".sub_menu").addClass("active");
	},function(){
		$(".sub_menu").removeClass("active");
	});
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
		//baidutemplate
		$.get("http://maoyan.alipapa.vip/movie").done(function(data){
			$("#movies").html(bd.template("temp",data));
			console.log(data)
			$("#pages").jPages({
				containerID:"container",
				first:"首页",
				last:"尾页",
				previous:"上一页",
				next:"下一页",
				perPage:5
			});
		});
		//lazyload
		$(".lazy").lazyload();
		$("div.holder").jPages({
			containerID:"itemContainer",
			first:"首页",
			last:"尾页",
			previous:"上一页",
			next:"下一页",
			perPage:2,
			callback:function(){
				console.log(arguments);
			}
		});
});