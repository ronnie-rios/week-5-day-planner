//displays current time
function displayCurrentDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $('#currentDay').text(currentDate)
}
displayCurrentDate();

function createElements() {
for (let i = 0; i < timeBlocks.length; i++) {
    let indexBlock = timeBlocks[i];
    //creates row to hold hour, event, save button
    var timeBlockRow = $('<form>').attr({'class': 'row'})

    //creates hour display
    var hourDisplay = $('<div>').text(indexBlock.time).attr({'class':'col-md-2 time'})
    
    //creates the textholder 
    //var eventDiv = $('<div>').attr({'class' : 'col-md-9 event-txt'})
    var textInfo = $('<textarea>').attr({'id' : indexBlock.id, 'class':'col-md-9 event-txt'});
    // eventDiv.append(textInfo)

    //creates the save button
    var saveRow = $("<i class='far fa-save fa-md'></i>");
    var saveBtn = $('<button>').attr({'class' : 'col-md-1 saveBtn'});
    saveBtn.append(saveRow)

    //append to row to container
    $('.container').append(timeBlockRow)
    //append to row created
    timeBlockRow.append(hourDisplay, textInfo, saveBtn)      
   
    }

}
var currentHour = moment().hour();
console.log(currentHour)

// compareTime();
//function to save to local storage
function saveStorage() {
   let userInput = $(this).siblings('.event-txt').val() 
   var localStorageKey = $(this).siblings('.time').text()
   localStorage.setItem(localStorageKey, userInput)
   
}

function displayStorage() {
    //displays local storage for time and places in div
   var nineText = localStorage.getItem("9:00 AM")
    $('.9-text').text(nineText)
    var tenText = localStorage.getItem("10:00 AM")
    $('.10-text').text(tenText)
    var elevenText = localStorage.getItem("11:00 AM")
    $('.11-text').text(elevenText)
    var twelveText = localStorage.getItem("12:00 PM")
    $('.12-text').text(twelveText)
    var thirteenText = localStorage.getItem("1:00 PM")
    $('.13-text').text(thirteenText)
    var fourteenText = localStorage.getItem("2:00 PM")
    $('.14-text').text(fourteenText)
    var fifteenText = localStorage.getItem("3:00 PM")
    $('.15-text').text(fifteenText)
    var sixteenText = localStorage.getItem("4:00 PM")
    $('.16-text').text(sixteenText)
    var fifteenText = localStorage.getItem("5:00 PM")
    $('.17-text').text(fifteenText)
}
displayStorage();

$('.saveBtn').on('click', saveStorage);