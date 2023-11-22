function josh() {
	playSound("whistle")
	document.getElementById("gif").src="2.png";
};

function reset(){
	document.getElementById("whistlebaby").src="1.png";
};

window.onscroll = function(ev) {
	let {clientHeight,scrollHeight,scrollTop} = ev.target.documentElement;
	console.log(clientHeight)
    if (clientHeight + scrollTop + 1 >= scrollHeight) {
		const real = document.getElementById("real");
		document.getElementById("bruh").appendChild(real.cloneNode(true));
		document.getElementById("bruh").appendChild(real.cloneNode(true));
		document.getElementById("bruh").appendChild(real.cloneNode(true));
		document.getElementById("bruh").appendChild(real.cloneNode(true));
    }
};

function playRandom() {
	var sounds = ['correct','hohoho','glaggle','wtf']
    var sound = sounds[Math.floor(Math.random() * sounds.length)]
	if(Math.floor(Math.random() * 31) == 1) {
		josh();
	} else {
		playSound(sound);
	}
}

function playSound(elementId) {
	var orig = document.getElementById(elementId);
    var sound = orig.cloneNode();
    sound.play();
}


