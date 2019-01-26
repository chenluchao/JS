document.onmousemove=function(){
	document.onmousemove=function(e){
		e = e || event;
		var randomW = parseInt(Math.random()*21)+3;
		var maxW = (document.documentElement.clientWidth || document.body.clientWidth)-randomW;
		var maxH = (document.documentElement.clientHeight || document.body.clientHeight)-randomW;
		var div = document.createElement("div");
		div.className="moveColor";
		document.body.appendChild(div);
		div.style.width=randomW+"px";
		div.style.height=randomW+"px";
		div.style.left = e.clientX+"px";
		div.style.top = e.clientY+"px";
		div.style.background = "rgb("+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+","+parseInt(Math.random()*256)+")";
		(function go(){
			move(div,{
				left:parseInt(Math.random()*200+e.clientX-100),
				top:parseInt(Math.random()*200+e.clientY-100),
				width:0,
				height:0
			},1000,function(){
				document.body.removeChild(div);
			});
		})();//函数自执行
	}
}