var slider = document.querySelector(".slider");//获取轮播图框
var eul = slider.children[0];//获取ul
var lis = eul.children;//获取图片框集合
var prev = slider.children[1];//获取上一个按钮
var next = slider.children[2];//获取下一个按钮
var dots = slider.children[3].children;//获取 点 集合

var index = 1;//声明关键下标

fnChange();//初始化轮播图位置

slider.timer = setInterval(fnNext,1000);//开启自动轮播

slider.onmouseenter=function(){//鼠标移入轮播区域停止轮播
	clearInterval(slider.timer);
}
slider.onmouseleave=function(){//鼠标移出轮播区域开始轮播
	slider.timer = setInterval(fnNext,1000);
}

prev.onclick=fnPrev;//上一张图片

next.onclick=fnNext;//下一张图片

for(var i=0; i<dots.length; i++){//点击原点切换图片
	dots[i].index = i;
	dots[i].onclick=function(){
		index = this.index;//将下标改变为当前点击原点的下标
		fnChange();
	}
}

function fnNext(){//下一张逻辑
	index++;
	if(index==lis.length){//下标溢出
		index=1;
		eul.style.left = 0;
	}
	fnChange()
}

function fnPrev(){
	index--;
	if(index<0){//下标溢出
		index=lis.length-2;
		eul.style.left = -(lis.length-1)*lis[0].offsetWidth+"px";
	}
	fnChange()
}

function fnChange(){
	var num = index;//正常情况下num和index一样

	if(index == dots.length){//当index超出dots的下标时，让num为0
		num = 0;
	}

	for(var i=0; i<dots.length; i++){
		dots[i].className="";
	}
	dots[num].className="active";

	move(eul,{
		left:-index*lis[0].offsetWidth
	},200);
}