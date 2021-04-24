//displays current time
function displayCurrentTime() {
    var currentDate = moment().format('dddd, MMMM Do');
    $('#currentDay').text(currentDate)
}
displayCurrentTime();
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

//display visuals for the schdule
// timeBlocks.forEach(function(givenHour) {
//     var timeBlockRow = $('<form>').attr({'class' : 'row'})
//     $('.container')
// })


for (let i = 0; i < timeBlocks.length; i++) {
    let indexBlock = timeBlocks[i];
    //creates row to hold hour, event, save button
    var timeBlockRow = $('<form>').attr({'class': 'row'})

    //creates hour display
    var hourDisplay = $('<div>').text(indexBlock.time).attr({'class':'col-md-2 time'})
    
    //creating the textholder 
    var eventDiv = $('<div>').attr({'class' : 'col-md-9 event-txt'})
    var textInfo = $('<textarea>').attr({'id' : indexBlock.id});
    eventDiv.append(textInfo)
    //append to row to container
    $('.container').append(timeBlockRow)
    //append to row created
    timeBlockRow.append(hourDisplay, eventDiv)
    
}
//     // let plan = timeBlocks[i]; 
//     // //creates the timeblock row
//     // var timeRow =$("<form>").attr({
//     //     "class": "row"
//     // });
//     // $("container").append(timeRow)

//     // //creates the display time row
//     // var hourRowDisplay = $('<div>').text('${plan.time}').attr({"class": "col-md-2 hour"})
    
//     // //creates the text
//     // var eventRow = $('<div>')
//     // var textData = $("<textarea>");
//     // eventRow.append(textData);
//     // eventRow.attr("id", plan.id)

//     // //creates the savebutton
//     // var saveBtn = $("<i class='far fa-save fa-md'></i>")
//     // var saveRow = $("<button>").attr({"class": "col-md-1 savebtn"});
//     // saveRow.append(saveBtn);
//     // var completeRow = timeRow.append(hourRowDisplay, eventRow, saveRow)
//     // $("container").append(completeRow)