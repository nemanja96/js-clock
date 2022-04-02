let day = document.getElementById("day");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");

// Refresh page every 1 second
let reloadTime = () => {
	let date = new Date();
	let dayNow = date.getDay();
	let hoursNow = date.getHours();
	let minutesNow = date.getMinutes();
	let secondsNow = date.getSeconds();
	
	// Function call - converts a number to a day of the week
	dayOfWeek(dayNow);

	timeManager(hours, hoursNow);
	timeManager(minutes, minutesNow);
	timeManager(seconds, secondsNow);
};

// Zero is added if the time is between 0 and 9
let timeManager = (inputContent, inputTime) => {
	let date = new Date();
	if (inputTime >= 0 && inputTime <= 9) {
		inputContent.innerHTML = "0" + inputTime;
	}else{
		inputContent.innerHTML = inputTime;
	}
};

// Day of week
let dayOfWeek = (today) => {
	switch(today){
		case 0:
			day.innerHTML = "Su"; // Sunday
			break;
		case 1:
			day.innerHTML = "Mo"; // Monday
			break;
		case 2:
			day.innerHTML = "Tu"; // Tuesday
			break;
		case 3:
			day.innerHTML = "We"; // Wednesday
			break;
		case 4:
			day.innerHTML = "Th"; // Thursday
			break;
		case 5:
			day.innerHTML = "Fr"; // Friday
			break;
		case 6:
			day.innerHTML = "Sa"; // Saturday
			break;
	}
};

window.setInterval(reloadTime, 1000);