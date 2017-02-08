document.body.style.backgroundImage = "url('https://res.cloudinary.com/takeout/image/upload/v1486421532/bg-cp_qqtesa.png')";
document.body.style.backgroundSize = "cover";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";


const date = new Date();
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("date").innerHTML = "/ " + days[date.getDay()] + " " + date.getDate() + ", " + months[date.getMonth()];


function timeNow () {
	let d = new Date();
	let h = d.getHours();
	let m = d.getMinutes();
	let s = d.getSeconds();

	h = extraZero(h);
	m = extraZero(m);
	s = extraZero(s);


	document.getElementById("clock").innerHTML = "/ " + h + ":" + m + ":" + s;

	setTimeout(function() {
		timeNow()
	}, 500); 
}

function extraZero(i) {
	if (i<10) {
		i = "0" + i
	}; 
	return i;
}

timeNow();