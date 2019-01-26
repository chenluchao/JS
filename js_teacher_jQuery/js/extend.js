//$.fn.extend({
//	tab:function(selector){
//		selector=selector||"active";
//		this.each(function(index,ele){
//			$(ele).children().eq(0).children().click(function(){
//				$(this).addClass(selector).siblings().removeClass(selector);
//				
//				$(ele).children().eq(1).children().eq($(this).index()).addClass(selector).siblings().removeClass(selector)
//			})
//		})
//	}
//})

//$.fn.extend({
//	tab:function(tab_btn,tab_shows,selector){
//		tab_btn=tab_btn||"tab_btn";
//		tab_shows=tab_shows||"tab_shows";
//		selector=selector||"active";
//		this.each(function(index,ele){
//			$(ele).find(tab_btn).children().click(function(){
//				$(this).addClass(selector).siblings().removeClass(selector);
//				$(ele).find(tab_shows).children().eq($(this).index()).addClass(selector).siblings().removeClass(selector);
//			})
//		})
//	}
//})



$.fn.extend({
	tab:function(tab_btn,tab_shows,selector){
		tab_btn=tab_btn||"tab_btn";
		tab_shows=tab_shows||"tab_shows";
		selector=selector||"active";
		this.each(function(index,ele){
			$(ele).find(tab_btn).children().click(function(){
				$(this).addClass(selector).siblings().removeClass(selector);
				
				$(ele).find(tab_shows).children().eq($(this).index()).fadeIn().siblings().fadeOut();
			})
		})
	}
})
