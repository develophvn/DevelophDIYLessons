function initDate() {
	const  date = new Date();
	const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
	const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date)
 
	$("#current-date").text(`${day}/${month}/${year}`);
}

$(document).ready(function () {
	initDate();
});
