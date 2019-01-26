var c = {
	f:40,
	t:50
}
define(["js/b.js"],function(){
	return c;
});

alert(b.calc(c.f,c.t));