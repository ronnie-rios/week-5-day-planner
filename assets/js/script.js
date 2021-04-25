//displays current time
function displayCurrentDate() {
    var currentDate = moment().format('dddd, MMMM Do');
    $('#currentDay').text(currentDate)
}
displayCurrentDate();
//an array for the timeblocks
var timeBlocks = [
    {id: 0,
    time: '9:00 AM',
    event: ''},
    {id: 1,
    time: '10:00 AM',
    event: ''},
    {id: 2,
    time: '11:00 AM',
    event: ''},
    {id: 3,
    time: '12:00 PM',
    event: ''},
    {id: 4,
    time: '1:00 PM',
    event: ''},
    {id: 5,
    time: '2:00 PM',
    event: ''},
    {id: 6,
    time: '3:00 PM',
    event: ''},
    {id: 7,
    time: '4:00 PM',
    event: ''},
    {id: 8,
    time: '5:00 PM',
    event: ''},  
]

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
//function to save to local storage

var savedEvents = [];
function saveStorage() {
    var saveText = document.querySelector('.event-txt').value
    savedEvents.push(saveText)
    localStorage.setItem("event", JSON.stringify(savedEvents))
}

createElements();


$('.saveBtn').on('click', saveStorage);
//if statement
// if (timeBlocks.time < moment().hour()) {
//     textInfo.attr({'class' : 'future'});
// } else if (timeBlocks.time == moment().hour()) {
//     textInfo.attr({'class' : 'present'})
// } else {
//     textInfo.attr({'class' : 'past'}) 
// } 