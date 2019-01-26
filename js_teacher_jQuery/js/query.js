(function(){
	
	function jQuery(selector){
		return new jQuery.fn.init(selector);
	}

	jQuery.fn = {//jq方法的集合
		init:function(selector){//构造函数

			var eles = document.querySelectorAll(selector);
			
			//将eles中的所有元素定义到this(实例)下
			for(var i=0; i<eles.length; i++){
				this[i] = eles[i];
			}

			this.length = eles.length;

		},
		css:function(props){//设置实例下所有元素的css样式
			for(var i=0; i<this.length; i++){
				for(var attr in props){
					this[i].style[attr] = props[attr];
				}
			}
			return this;
		},
		click:function(fn){
			for(var i=0; i<this.length; i++){
				this[i].addEventListener('click',fn,false);
			}
			return this;
		},
		siblings:function(){
			//this下的元素清空
			//在this下放入新元素
			return this;
		}
	}

	jQuery.fn.init.prototype = jQuery.fn;


	window.jQuery = window.$ = jQuery;
})()
/*
	核心是查询元素
*/