/*var img=document.getElementById('cursor');
img.onmouseenter=function(){
	this.style.display='none';
}
img.onmouseleave=function(){
	this.style.display='block';
}*/
document.getElementById('myslide').onmousemove = function (event){
	var x = event.offsetX;//относительно родителя!
	console.log(x);
	document.getElementById('two').style.width = x + 'px';
}

document.getElementById('myslide').onmouseleave = function(event){
	document.getElementById('two').style.width = '350px';
}
document.onmousemove = function (){
	document.getElementsByTagName('main')[0].insertAdjacentHTML('beforeEnd', '<img src="https://i.gifer.com/WG8P.gif" id="canvas">');
	var canvas = document.getElementById('canvas');
	canvas.style.position = 'fixed';

	document.onmousemove = function(event){
		canvas.style.left = event.clientX +40+'px';
		canvas.style.top = event.clientY +20+'px';
	}

}