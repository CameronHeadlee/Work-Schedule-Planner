var timeDisplayEl = $('#time-display')

function displayTime() {
  var rightNow = moment().format("dddd, MMMM Do");
  timeDisplayEl.text(rightNow);
}

setInterval(displayTime);