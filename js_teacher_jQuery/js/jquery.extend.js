$.fn.extend({
	tab:function(selector){
		selector = selector || "active";
		this.each(function(index,ele){
			$(ele).children().eq(0).children().click(function(){
				$(this).addClass(selector).siblings().removeClass(selector);
				$(ele).children().eq(1).children().eq($(this).index()).addClass(selector).siblings().removeClass(selector);
			});
		});
	}
});