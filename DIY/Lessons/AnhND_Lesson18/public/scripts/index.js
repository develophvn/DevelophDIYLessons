function initDate() {
	const  date = new Date();
	const dateTimeFormat = new Intl.DateTimeFormat('en', { year: 'numeric', month: 'short', day: '2-digit' })
	const [{ value: month },,{ value: day },,{ value: year }] = dateTimeFormat.formatToParts(date)
 

	const dateElement = document.getElementById('current-date');
	dateElement.innerHTML = `${day}/${month}/${year}`;
}

document.addEventListener('DOMContentLoaded', function(e) {
	initDate();
})
