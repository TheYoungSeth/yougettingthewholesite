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


