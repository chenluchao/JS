//requirejs为我们暴露了两个全局变量 require requirejs

//模块加载规范
requirejs.config({
	baseUrl:"js",
	path:{
		a:"a",
		b:"b",
		c:"c"
	},
	shim:{
		a:{
			exports:"a"
		},
		b:{
			exports:"b"
		},
		c:{
			deps:["b"],
			exports:"c"
		}
	}
});

//模块加载
requirejs(['a','b','c'],function(module1,module2,module3){
	console.log(module1.a);
	console.log(module2.a);
	console.log(module3.f);
});
