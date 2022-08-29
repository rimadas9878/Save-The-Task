var dateDisplayEl = $('#currentDay');
var timeDisplayEl = $('#time-block');
var descriptionColor = $('.description')
var descriptionText = $('#notesWritingContainer');
var timeSlot = $('.timeSlot');
var saveAddedNotes = $('.saveBtn');
var timeOfTheDescription = $('.hour')
var currentHour;


// will get current date
function getCurrentDate() {
var dateToday = moment().format("dddd, MMMM Do YYYY [at] h:mm:ss a");
dateDisplayEl.text(dateToday);
}

setInterval(getCurrentDate, 1000);

// will get current time
function getCurrentTime() {
    var currentDate = new Date();
    currentHour = currentDate.getHours();

}


function getTimeBlocksForRegularBusinessHours() {
    getCurrentTime();

    var timeArray = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];

    for(var i = 0; i<timeArray.length; i++){
        var timeList = timeArray[i];
        if(timeList > currentHour){
            descriptionColor;
        }
        else if (timeList == currentHour){
            descriptionColor;
        }
        else if (timeList < currentHour){
            descriptionColor;
        }
    }
}

//function saveTimeBlockEvent(currentDate, timeBlockId, entry)

function saveTimeBlockEvent() {
    
    saveAddedNotes.click(function(){
    var displayNotes = descriptionText.val();
    var descriptionAddedTime = timeOfTheDescription.val();
    console.log(displayNotes);
    console.log(descriptionAddedTime);

     localStorage.setItem('displayNotes', displayNotes);
     localStorage.setItem('descriptionAddedTime', descriptionAddedTime);
 })
 
}
saveTimeBlockEvent();


function retriveDataFromLocalStorage(){
   
}



function clearDescription(){

}


getTimeBlocksForRegularBusinessHours();
// if current time is 12:38 
// this function will return 12 
// if current time is 13:38  or 1:38 PM
// this function will return 13
function getTimeBlockForCurrentTime() {
 // getCurrentTime()
 // convert 12:38 (hours:min time) to 12 (timeBlockId)



}

// will return something that can 
// be displayed as a stack
// 9 am to 5 pm


// will save in localstorage event for 
// that timeblock
// 08/28/2022 9 go to dmv
// 08/28/2022 12 have lunch


// will retrieve saved entries
// from local storage
//  input -> 08/28/2022 12
function getTimeBlockEvent(currentDate, timeBlockId) {
 // will return entry value
 // will retrive "have lunch"
}

// timeBlockId 9
// currentTime 12:32
function isTimeBlockInPastPresentFuture(timeBlockId) {
 // getTimeBlockForCurrentTime(); 12:38 (hours:min time) to 12 (timeBlockId)
 // compare 12 with < > or = timeBlockId
 
}