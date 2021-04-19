/* activate scrollspy menu */
let _link1 = document.getElementById("link1")
let _link2 = document.getElementById("link2")
let _link3 = document.getElementById("link3")
let _header = document.getElementsByClassName("header")[0]
let _articleHeight = document.getElementsByClassName("article")[0].offsetHeight
let _onoff = document.getElementsByClassName('onoff')[0]
let onoff = false
console.log(_articleHeight)
if (!onoff) {
	_onoff.innerText = 'close'
}
_onoff.onclick = function () {
	onoff = !onoff
	if (onoff) {
		_onoff.innerText = 'open'
		_header.style.display = 'none'
	} else {
		_onoff.innerText = 'close'
		_header.style.display = 'block'
	}
}

_link1.onclick = function () {
	$('html,body').animate({
		scrollTop: 0
	}, 1000);
	_link1.className = "nav-link active"
	_link2.className = "nav-link"
	_link3.className = "nav-link"
}

_link2.onclick = function () {
	console.log(_articleHeight * 1)
	$('html,body').animate({
		scrollTop: _articleHeight * 1
	}, 1000);
	_link1.className = "nav-link "
	_link2.className = "nav-link active"
	_link3.className = "nav-link"
}

_link3.onclick = function () {
	$('html,body').animate({
		scrollTop: _articleHeight * 2
	}, 1000);
	_link1.className = "nav-link "
	_link2.className = "nav-link "
	_link3.className = "nav-link active"
}

window.onscroll = function () {
	let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	console.log("滚动距离" + scrollTop);
	if (scrollTop < _articleHeight * 1) {
		_link1.className = "nav-link active"
		_link2.className = "nav-link"
		_link3.className = "nav-link"
	} else if (scrollTop >= _articleHeight * 1 && scrollTop < _articleHeight * 2) {
		_link1.className = "nav-link "
		_link2.className = "nav-link active"
		_link3.className = "nav-link"
	} else {
		_link1.className = "nav-link "
		_link2.className = "nav-link "
		_link3.className = "nav-link active"
	}

}