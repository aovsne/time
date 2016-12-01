// creating function to put 0 infront of minute and second when lower than 10
function addZero(i){
	if(i < 10){
		i = '0' + i
	}
	// returning the i value
	return i

}

// creating function to show time on the page
function showTime(){
	// getting hour,minute and seconds from the date()method
	var today = new Date()
	var hour = today.getHours()
	var minute = today.getMinutes()
	var second = today.getSeconds()

	// change the military time to normal time
	if(hour > 12){
		hour = hour - 12
	}

	// now add function addZero to minute and second
	minute = addZero(minute)
	second = addZero(second)

	// inserting the time in h1 of HTML
	document.getElementById('jikan').textContent = hour + ' : ' + minute + ' : ' + second

	// set the time out to reload the page in every one second
	setTimeout(function(){
		showTime()
	}, 1000)
}
// adding event listener to let the function showtime load.
document.getElementById('body').addEventListener('onload', showTime(), false)