var dateDisplayEl = $('#currentDay');
var timeDisplayEl = $('.time-block');
var timeOfTheDescription = $('.hour')
var currentHour;
var timeDisplayed;

// will get current date
function getCurrentDate() {
    var dateToday = moment().format("dddd, MMMM Do YYYY");
    dateDisplayEl.text(dateToday);
}

setInterval(getCurrentDate, 1000);

// will get current time
function getCurrentTime() {
    currentHour = moment().hour();
}

//will handle the colors and will get item from local store
function timeBlocksColor() {
    getCurrentTime();

    $(".time-block").each(function () {
        var timeListed = $(this).attr("id");
        if (timeListed < currentHour) {
            $(this).addClass('past');
        }
        else if (timeListed == currentHour) {
            $(this).addClass('present');
        }
        else {
            $(this).addClass('future');
        }

        var descriptionTxt = localStorage.getItem(timeListed);
        $(this).children('textarea').text(descriptionTxt);
    })

}
timeBlocksColor();

//on the click of save will store the item in local storage
$("button").click(function () {
    var enterText = $(this).siblings(".description").val();
    var timeDisplayed = $(this).parent().attr("id");
    localStorage.setItem(timeDisplayed, enterText);
})


